#!/bin/bash
# yapit Yaml API Testing
# requires: bash, curl, yq, jq, fzf (optional, for interactive file selection), grpcurl (for gRPC requests)
set -e

# Default values
config=""
cli_url=""
use_all_files=false

# Display help message
show_help() {
  cat << EOF
yapi - YAML API Testing Tool (HTTP/REST and gRPC)

Usage: $(basename "$0") [OPTIONS]

Options:
  -c, --config FILE    Path to YAML config file (required)
  -u, --url URL        Override base URL from config file
  -a, --all            Search all YAML files (default: git-tracked only)
  -h, --help           Display this help message

Supported Protocols:
  HTTP/REST:  http://, https://
  gRPC:       grpc:// (plaintext), grpcs:// (TLS)

Examples:
  $(basename "$0") -c test.yaml
  $(basename "$0") --config test.yaml --url http://localhost:8080
  $(basename "$0") -c grpc-service.yaml
  $(basename "$0") --all

EOF
  exit 0
}

# Error handler
error_exit() {
  echo "Error: $1" >&2
  echo "Use -h or --help for usage information" >&2
  exit 1
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    -c|--config)
      if [[ -z "$2" ]] || [[ "$2" == -* ]]; then
        error_exit "Option $1 requires an argument"
      fi
      config="$2"
      shift 2
      ;;
    -u|--url)
      if [[ -z "$2" ]] || [[ "$2" == -* ]]; then
        error_exit "Option $1 requires an argument"
      fi
      cli_url="$2"
      shift 2
      ;;
    -a|--all)
      use_all_files=true
      shift
      ;;
    -h|--help)
      show_help
      ;;
    -*)
      error_exit "Unknown option: $1"
      ;;
    *)
      error_exit "Unexpected argument: $1"
      ;;
  esac
done

YAPI_EXTENSION="yapi"

# Handle config file selection
if [[ -z "$config" ]]; then
  # Check if fzf is available
  if ! command -v fzf &>/dev/null; then
    error_exit "Config file is required (use -c or --config). Install fzf for interactive selection."
  fi

  # Find YAML files and let user select with fzf
  if [[ "$use_all_files" == "true" ]]; then
    # Search all YAML files in directory tree
    yaml_files=$(find . -type f \( -name '*.yml' -o -name '*.yaml' \) 2>/dev/null | sed 's|^\./||')
    if [[ -z "$yaml_files" ]]; then
      error_exit "No YAML files found in directory tree"
    fi
    config=$(echo "$yaml_files" | fzf  --preview 'yq {}' --prompt="Select config file: ")
  else
    # Search only git-tracked YAML files (default)
    yaml_files=$(git ls-files "*.$YAPI_EXTENSION.yaml" "*.$YAPI_EXTENSION.yml"  2>/dev/null)
    if [[ -z "$yaml_files" ]]; then
      error_exit "No git-tracked *.$YAPI_EXTENSION.[yaml|yml] files found. Use --all to search all files in directory tree."
    fi
    config=$(echo "$yaml_files" | fzf --preview 'yq {}' --prompt="Select config file: ")
  fi

  # Exit if user cancelled fzf
  if [[ -z "$config" ]]; then
    error_exit "No config file selected"
  fi

  echo "Selected: $config" >&2
fi

# Validate config file exists and is valid YAML
if [[ ! -f "$config" ]]; then
  error_exit "Config file '$config' does not exist"
fi

if ! yq e 'true' "$config" &>/dev/null; then
  error_exit "Config file '$config' is not a valid YAML file"
fi

# Extract values from config
config_url=$(yq e '.url // ""' "$config")
path=$(yq e '.path // ""' "$config")
method=$(yq e '.method // "GET"' "$config")
content_type=$(yq e '.content_type // ""' "$config")
body_exists=$(yq e 'has("body")' "$config")
json_exists=$(yq e 'has("json")' "$config")
query_exists=$(yq e 'has("query")' "$config")

# Detect protocol (HTTP vs gRPC)
protocol="http"
if [[ "$config_url" =~ ^grpcs?:// ]] || [[ "$method" == "grpc" ]]; then
  protocol="grpc"
  # Extract gRPC-specific config
  proto=$(yq e '.proto // ""' "$config")
  proto_path=$(yq e '.proto_path // ""' "$config")
  service=$(yq e '.service // ""' "$config")
  rpc=$(yq e '.rpc // ""' "$config")
  plaintext=$(yq e '.plaintext // ""' "$config")
  insecure=$(yq e '.insecure // ""' "$config")
  metadata_exists=$(yq e 'has("metadata")' "$config")
fi

# URL priority: CLI flag > YAML url (required if no CLI flag)
if [[ -n "$cli_url" ]]; then
  url="$cli_url"
elif [[ -n "$config_url" ]]; then
  url="$config_url"
else
  error_exit "URL is required: either provide 'url' in config file or use -u flag"
fi

# HTTP-specific URL and request building
if [[ "$protocol" == "http" ]]; then
  # Build full URL with encoded path
  if [[ -n "$path" ]]; then
  # Encode path segments but preserve slashes
  protected=$(echo "$path" | sed 's/%\([0-9A-Fa-f][0-9A-Fa-f]\)/___PERCENT___\1/g')
  protected=$(echo "$protected" | sed 's/\//___SLASH___/g')
  encoded=$(printf "%s" "$protected" | jq -Rr @uri)
  encoded_path=$(echo "$encoded" | sed 's/___SLASH___/\//g' | sed 's/___PERCENT___/%/g')
  full_url="${url%/}${encoded_path}"
else
  full_url="$url"
fi

# Build query string from query field if present
if [[ "$query_exists" == "true" ]]; then
  query_string=""
  first=true

  # Get all query keys
  keys=$(yq e '.query | keys | .[]' "$config")

  while IFS= read -r key; do
    if [[ -n "$key" ]]; then
      # Get the value for this key
      value=$(yq e ".query[\"$key\"]" "$config")

      # URL encode key and value
      encoded_key=$(printf "%s" "$key" | jq -Rr @uri)
      encoded_value=$(printf "%s" "$value" | jq -Rr @uri)

      # Build query string
      if [[ "$first" == "true" ]]; then
        query_string="?${encoded_key}=${encoded_value}"
        first=false
      else
        query_string="${query_string}&${encoded_key}=${encoded_value}"
      fi
    fi
  done <<< "$keys"

  full_url="${full_url}${query_string}"
fi
# echo "Requesting: $full_url"

# Validate method
if [[ -z "$method" ]]; then
  error_exit "HTTP method is required in config file"
fi

# Build curl command
curl_args=(
  -X "$method"
  "$full_url"
  -s
)

# Validate body and json are mutually exclusive
if [[ "$body_exists" == "true" ]] && [[ "$json_exists" == "true" ]]; then
  error_exit "Cannot specify both 'body' and 'json' fields - use only one"
fi

# Handle request body
if [[ "$body_exists" == "true" ]] || [[ "$json_exists" == "true" ]]; then
  # Require content_type when body/json is present
  if [[ -z "$content_type" ]]; then
    error_exit "content_type is required when body or json is present"
  fi

  # Currently only support JSON
  if [[ "$content_type" != "application/json" ]]; then
    error_exit "Only 'application/json' content_type is currently supported"
  fi

  # Get the JSON data
  if [[ "$body_exists" == "true" ]]; then
    # Convert YAML body to JSON
    request_json=$(yq e '.body' -o=json "$config")
  else
    # Use raw JSON literal
    request_json=$(yq e '.json' "$config")
  fi

  # echo "Request Body: $request_json"

  curl_args+=(
    -H "Content-Type: $content_type"
    -d "$request_json"
  )
fi
fi  # End of HTTP-specific processing

# now -- write to our history file
HISTORY_FILE="${HOME}/.yapi_history"
realpath_config=$(realpath "$config")

# TODO MAYBE FIX THIS SO FALLBACK WORKS
# base_cmd=""
# if yapi_alias_is_defined ; then
base_cmd="yapi"
# else
#   base_cmd="$(realpath "$0")"
# fi

command="$base_cmd -c \"$realpath_config\""
if [[ -n "$cli_url" ]]; then
  command+=" -u \"$cli_url\""
fi

echo "$(date +%s) | $command" >> "$HISTORY_FILE"

# Execute request based on protocol
if [[ "$protocol" == "grpc" ]]; then
  # gRPC request using grpcurl
  # Check if grpcurl is installed
  if ! command -v grpcurl &>/dev/null; then
    error_exit "grpcurl is required for gRPC requests but not found. Install it: brew install grpcurl (macOS) or go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest"
  fi

  # Validate required gRPC fields
  if [[ -z "$service" ]]; then
    error_exit "service field is required for gRPC requests"
  fi
  if [[ -z "$rpc" ]]; then
    error_exit "rpc field is required for gRPC requests"
  fi

  # Proto files are optional (uses server reflection if not provided)
  use_proto_files=false
  if [[ -n "$proto" ]]; then
    use_proto_files=true
    # If proto is specified, proto_path is required
    if [[ -z "$proto_path" ]]; then
      error_exit "proto_path is required when proto is specified"
    fi

    # Resolve proto_path relative to config file directory
    config_dir=$(dirname "$config")
    if [[ "$proto_path" != /* ]]; then
      # Relative path - resolve relative to config file
      resolved_proto_path=$(cd "$config_dir" && cd "$proto_path" && pwd)
    else
      # Absolute path
      resolved_proto_path="$proto_path"
    fi

    # Validate proto_path exists
    if [[ ! -d "$resolved_proto_path" ]]; then
      error_exit "proto_path directory does not exist: $resolved_proto_path"
    fi
  fi

  # Extract server address from URL (remove grpc:// or grpcs:// scheme)
  server_addr="${url#grpc://}"
  server_addr="${server_addr#grpcs://}"

  # Build grpcurl command
  grpcurl_args=()

  # Add proto file arguments if provided (otherwise uses server reflection)
  if [[ "$use_proto_files" == "true" ]]; then
    grpcurl_args+=(
      -import-path "$resolved_proto_path"
      -proto "$proto"
    )
  fi

  # Determine if plaintext should be used
  use_plaintext=false
  if [[ "$url" =~ ^grpc:// ]]; then
    # grpc:// scheme implies plaintext
    use_plaintext=true
  fi
  if [[ "$plaintext" == "true" ]]; then
    use_plaintext=true
  fi

  if [[ "$use_plaintext" == "true" ]]; then
    grpcurl_args+=(-plaintext)
  fi

  # Add insecure flag if specified (for TLS without verification)
  if [[ "$insecure" == "true" ]]; then
    grpcurl_args+=(-insecure)
  fi

  # Add metadata (gRPC headers) if present
  if [[ "$metadata_exists" == "true" ]]; then
    # Get all metadata keys
    metadata_keys=$(yq e '.metadata | keys | .[]' "$config")
    while IFS= read -r key; do
      if [[ -n "$key" ]]; then
        value=$(yq e ".metadata[\"$key\"]" "$config")
        grpcurl_args+=(-H "$key: $value")
      fi
    done <<< "$metadata_keys"
  fi

  # Add request body data if present
  if [[ "$body_exists" == "true" ]]; then
    # Convert YAML body to JSON
    request_json=$(yq e '.body' -o=json "$config")
    grpcurl_args+=(-d "$request_json")
  fi

  # Add server address and service/method
  grpcurl_args+=("$server_addr")
  grpcurl_args+=("$service/$rpc")

  echo "Executing gRPC request to $server_addr ($service/$rpc)" >&2
  response=$(grpcurl "${grpcurl_args[@]}")
else
  # HTTP request using curl
  #echo "Executing $method request to $full_url"
  #echo "Curl command: curl ${curl_args[*]}"
  echo "Executing $method request to $full_url" >&2
  response=$(curl -L "${curl_args[@]}")
fi

# Try to format as JSON if possible, otherwise print as-is
if echo "$response" | jq . &>/dev/null; then
  echo "$response" | jq
else
  echo "$response"
fi



