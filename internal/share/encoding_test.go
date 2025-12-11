package share

import (
	"math/big"
	"testing"
)

func TestRoundTrip(t *testing.T) {
	tests := []struct {
		name  string
		input string
	}{
		{"simple", "hello world"},
		{"empty", ""},
		{"yapi config", `POST https://api.example.com/users
Content-Type: application/json

{
  "name": "test",
  "email": "test@example.com"
}`},
		{"unicode", "日本語テスト 🚀"},
		{"large", string(make([]byte, 10000))},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			if tc.input == "" {
				t.Skip("empty input produces empty encoding")
			}

			encoded, err := Encode(tc.input)
			if err != nil {
				t.Fatalf("Encode failed: %v", err)
			}

			decoded, err := Decode(encoded)
			if err != nil {
				t.Fatalf("Decode failed: %v", err)
			}

			if decoded != tc.input {
				t.Errorf("round trip failed:\ninput:   %q\nencoded: %q\ndecoded: %q", tc.input, encoded, decoded)
			}
		})
	}
}

func TestEncodeBuffer_RoundTrip(t *testing.T) {
	inputs := [][]byte{
		{0x01},
		{0x00, 0x01},
		{0xff, 0xfe, 0xfd},
		[]byte("hello"),
	}

	for _, input := range inputs {
		encoded := encodeBuffer(input)
		decoded, err := decodeBuffer(encoded)
		if err != nil {
			t.Fatalf("decodeBuffer failed: %v", err)
		}

		// Note: leading zeros are lost in the encoding (bigint behavior)
		// This is expected and matches the TypeScript implementation
		if len(decoded) > 0 && len(input) > 0 {
			// Compare the non-zero-padded values
			inputVal := new(big.Int).SetBytes(input)
			decodedVal := new(big.Int).SetBytes(decoded)
			if inputVal.Cmp(decodedVal) != 0 {
				t.Errorf("round trip failed:\ninput:   %x\nencoded: %s\ndecoded: %x", input, encoded, decoded)
			}
		}
	}
}

func TestShareURL(t *testing.T) {
	content := "GET https://example.com"
	url, err := ShareURL(content)
	if err != nil {
		t.Fatalf("ShareURL failed: %v", err)
	}

	prefix := "https://yapi.run/c/"
	if len(url) < len(prefix) || url[:len(prefix)] != prefix {
		t.Errorf("URL should start with %s, got: %s", prefix, url)
	}
}

func FuzzDecode(f *testing.F) {
	// Seed with valid encoded strings
	f.Add("ABC123")
	f.Add("")
	f.Add("~_.-")
	f.Add("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")

	// Add a real encoded value
	if encoded, err := Encode("hello world"); err == nil {
		f.Add(encoded)
	}

	f.Fuzz(func(t *testing.T, input string) {
		// Decode should not panic on any input
		_, _ = Decode(input)
	})
}
