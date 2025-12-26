package executor

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"yapi.run/cli/internal/domain"
)

// HTTPTransport returns a transport function for HTTP requests.
func HTTPTransport(client HTTPClient) TransportFunc {
	return func(ctx context.Context, req *domain.Request) (*domain.Response, error) {
		// Apply timeout if specified
		if timeoutStr, ok := req.Metadata["timeout"]; ok && timeoutStr != "" {
			timeout, err := time.ParseDuration(timeoutStr)
			if err != nil {
				return nil, fmt.Errorf("invalid timeout value %q: %w", timeoutStr, err)
			}
			// Create timeout context - don't defer cancel() since the response body
			// is read after this function returns. The context will be cleaned up
			// when the timeout expires or the parent context is canceled.
			ctx, _ = context.WithTimeout(ctx, timeout)
		}

		httpReq, err := http.NewRequestWithContext(ctx, req.Method, req.URL, req.Body)
		if err != nil {
			return nil, fmt.Errorf("failed to create request: %w", err)
		}

		// Set custom headers
		for k, v := range req.Headers {
			httpReq.Header.Set(k, v)
		}

		res, err := client.Do(httpReq)
		if err != nil {
			return nil, fmt.Errorf("failed to execute request: %w", err)
		}

		// Convert http.Header to map[string]string
		headers := make(map[string]string)
		for k, v := range res.Header {
			if len(v) > 0 {
				headers[k] = v[0]
			}
		}

		return &domain.Response{
			StatusCode: res.StatusCode,
			Headers:    headers,
			Body:       res.Body,
		}, nil
	}
}
