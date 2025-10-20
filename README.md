# yapi - YAML API Testing

> Because writing curl commands by hand is so 2015.

**yapi** is a dead-simple API testing tool using YAML files. Write API calls in YAML, run them with one command, get pretty JSON output. That's it.

## Why yapi?

-   **No more `curl` archaeology:** Stop digging through bash history.
-   **Git-trackable:** API tests live in version control with your code.
-   **Simple & Fast:** If you can write YAML, you can test APIs. `fzf` integration for quick file picking.
-   **Pretty output:** Automatic `jq` formatting.

## Installation & Setup

**Requirements:** `bash`, `curl`, `yq`. Optional but recommended: `fzf`, `jq`.

```bash
# Clone it somewhere
git clone https://github.com/jamierpond/yapi ~/.config/yapi

```

### Zsh Integration (Recommended)
For enhanced zsh support, add the following to your `~/.zshrc`:
This enables history appending and an alias for easy access.

```zsh
YAPI_ZSH="$HOME/.config/yapi/bin/yapi.zsh"
[ -f "$YAPI_ZSH" ] && source "$YAPI_ZSH"
alias a="yapi"
```

## Usage

Create a file like `hello.yapi.yml`:

```yaml
# yaml-language-server: $schema=https://pond.audio/yapi/schema

url: https://httpbin.org
path: /get
method: GET
```

Run it:

```bash
# Run a specific file
yapi -c hello.yapi.yml

# Or run with no args to use the fzf fuzzy-finder
yapi
```

### POSTing Data

Use `body` for YAML that gets converted to JSON, or `json` to paste a raw JSON literal.

**YAML Body:**
```yaml
url: https://httpbin.org/post
method: POST
content_type: application/json
body:
  title: "My awesome post"
  tags: [ "testing", "api" ]
```

**Raw JSON:**
```yaml
url: https://httpbin.org/post
method: POST
content_type: application/json
json: |
  { "id": 123, "status": "active" }
```

## Key Features

-   **Interactive Mode:** Run `yapi` with no flags to use `fzf` to pick a `*.yapi.yml` file from your project.
-   **URL Overrides:** Test against different environments easily.
    ```bash
    yapi -c test.yml -u http://localhost:3000
    ```
-   **Editor Validation:** Add `# yaml-language-server: $schema=https://pond.audio/yapi/schema` to your files for VS Code autocomplete and validation.

## Command Line Options

```
Usage: yapi [OPTIONS]

Options:
  -c, --config FILE    Path to YAML config file (or use fzf)
  -u, --url URL        Override base URL from config
  -a, --all            Search all *.yml files (not just *.yapi.yml)
  -h, --help           Display help
```

---
Made with questionable decisions asnd too much coffee. PRs welcome.
