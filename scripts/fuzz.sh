#!/bin/bash
set -e

FUZZTIME="${FUZZTIME:-30s}"
COVERAGE="${COVERAGE:-false}"

for pkg in $(go list ./... | xargs -I{} sh -c 'go test -list "^Fuzz" {} 2>/dev/null | grep -q "^Fuzz" && echo {}'); do
    for fuzz in $(go test -list "^Fuzz" "$pkg" 2>/dev/null | grep "^Fuzz"); do
        echo "Fuzzing $fuzz in $pkg"
        if [ "$COVERAGE" = "true" ]; then
            coverfile="fuzz_$(echo "$pkg" | tr '/' '_').txt"
            go test -fuzz="$fuzz" -fuzztime="$FUZZTIME" -coverprofile="$coverfile" -covermode=atomic "$pkg" || true
        else
            go test -fuzz="$fuzz" -fuzztime="$FUZZTIME" "$pkg" || exit 1
        fi
    done
done
