package share

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"io"
	"math/big"
)

var characterSet = []byte("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~")
var base = big.NewInt(int64(len(characterSet)))

var charIndex = func() map[byte]int {
	m := make(map[byte]int, len(characterSet))
	for i, c := range characterSet {
		m[c] = i
	}
	return m
}()

func encodeBuffer(data []byte) string {
	value := new(big.Int).SetBytes(data)

	if value.Sign() == 0 {
		return ""
	}

	var encoded bytes.Buffer
	zero := big.NewInt(0)
	mod := new(big.Int)

	for value.Cmp(zero) > 0 {
		value.DivMod(value, base, mod)
		encoded.WriteByte(characterSet[mod.Int64()])
	}

	// Reverse the result
	result := encoded.Bytes()
	for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
		result[i], result[j] = result[j], result[i]
	}

	return string(result)
}

func gzipCompress(data []byte) ([]byte, error) {
	var buf bytes.Buffer
	w := gzip.NewWriter(&buf)
	if _, err := w.Write(data); err != nil {
		return nil, err
	}
	if err := w.Close(); err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

// Encode compresses and encodes content for sharing via yapi.run/c/{encoded}
func Encode(content string) (string, error) {
	compressed, err := gzipCompress([]byte(content))
	if err != nil {
		return "", fmt.Errorf("compression failed: %w", err)
	}
	return encodeBuffer(compressed), nil
}

// ShareURL returns the full shareable URL for the given content
func ShareURL(content string) (string, error) {
	encoded, err := Encode(content)
	if err != nil {
		return "", err
	}
	return "https://yapi.run/c/" + encoded, nil
}

func decodeBuffer(encoded string) ([]byte, error) {
	if encoded == "" {
		return nil, nil
	}

	value := big.NewInt(0)
	for i := 0; i < len(encoded); i++ {
		idx, ok := charIndex[encoded[i]]
		if !ok {
			return nil, fmt.Errorf("invalid character '%c' in encoded string", encoded[i])
		}
		value.Mul(value, base)
		value.Add(value, big.NewInt(int64(idx)))
	}

	return value.Bytes(), nil
}

func gzipDecompress(data []byte) ([]byte, error) {
	r, err := gzip.NewReader(bytes.NewReader(data))
	if err != nil {
		return nil, err
	}
	defer r.Close()
	return io.ReadAll(r)
}

// Decode decodes and decompresses content from a share URL encoding
func Decode(encoded string) (string, error) {
	compressed, err := decodeBuffer(encoded)
	if err != nil {
		return "", fmt.Errorf("decoding failed: %w", err)
	}
	decompressed, err := gzipDecompress(compressed)
	if err != nil {
		return "", fmt.Errorf("decompression failed: %w", err)
	}
	return string(decompressed), nil
}
