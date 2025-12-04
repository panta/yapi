.PHONY: build run test fmt fmt-check clean install docker web web-run bump-patch bump-minor bump-major release

NAME := yapi
VERSION := $(shell git describe --tags --always --dirty 2>/dev/null || echo "dev")
COMMIT := $(shell git rev-parse --short HEAD 2>/dev/null || echo "unknown")
DATE := $(shell date -u +"%Y-%m-%dT%H:%M:%SZ")
LDFLAGS := -X main.version=$(VERSION) -X main.commit=$(COMMIT) -X main.date=$(DATE)

install: build
	@echo "Installing yapi to $$(go env GOPATH)/bin..."
	@cp ./bin/yapi $$(go env GOPATH)/bin/yapi
	@codesign --sign - --force $$(go env GOPATH)/bin/yapi 2>/dev/null || true
	@echo "Done! Ensure $$(go env GOPATH)/bin is in your PATH."

lint:
	@echo "Running deadcode analysis..."
	@deadcode ./...

build:
	@echo "Building yapi CLI..."
	@go build -ldflags "$(LDFLAGS)" -o ./bin/yapi ./cmd/yapi
	@codesign --sign - --force ./bin/yapi 2>/dev/null || true

run:
	@echo "Running yapi CLI..."
	@go run ./cmd/yapi

test:
	@echo "Running all tests..."
	@go test ./...

fmt:
	@echo "Formatting code..."
	@gofmt -w .

fmt-check:
	@echo "Checking formatting..."
	@test -z "$$(gofmt -l cmd internal)" || (echo "Files not formatted:"; gofmt -l cmd internal; exit 1)

clean:
	@echo "Cleaning up..."
	@rm -f ./bin/yapi
	@go clean


web:
	docker build . -t ${NAME}:latest -f Dockerfile.webapp


web-run:
	-docker stop yapi
	-docker rm yapi
	docker run --name yapi -p 3000:3000 ${NAME}:latest

# Get current version, defaulting to v0.0.0 if no tags exist
CURRENT_TAG := $(shell git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
MAJOR := $(shell echo $(CURRENT_TAG) | sed 's/v//' | cut -d. -f1)
MINOR := $(shell echo $(CURRENT_TAG) | sed 's/v//' | cut -d. -f2)
PATCH := $(shell echo $(CURRENT_TAG) | sed 's/v//' | cut -d. -f3)

bump-patch:
	@echo "Current version: $(CURRENT_TAG)"
	@NEW_VERSION="v$(MAJOR).$(MINOR).$$(($(PATCH)+1))"; \
	echo "New version: $$NEW_VERSION"; \
	git tag "$$NEW_VERSION"; \
	echo "Tagged $$NEW_VERSION (run 'make release' to push)"

bump-minor:
	@echo "Current version: $(CURRENT_TAG)"
	@NEW_VERSION="v$(MAJOR).$$(($(MINOR)+1)).0"; \
	echo "New version: $$NEW_VERSION"; \
	git tag "$$NEW_VERSION"; \
	echo "Tagged $$NEW_VERSION (run 'make release' to push)"

bump-major:
	@echo "Current version: $(CURRENT_TAG)"
	@NEW_VERSION="v$$(($(MAJOR)+1)).0.0"; \
	echo "New version: $$NEW_VERSION"; \
	git tag "$$NEW_VERSION"; \
	echo "Tagged $$NEW_VERSION (run 'make release' to push)"

release:
	@TAG=$$(git describe --tags --abbrev=0); \
	echo "Pushing $$TAG to origin..."; \
	git push origin "$$TAG"
