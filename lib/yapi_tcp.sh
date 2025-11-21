#!/bin/bash
# yapi_tcp.sh - TCP request handling

# Execute TCP request
execute_tcp_request() {
  local config="$1"
  local url="$2"

  # Check dependency
  check_dependency "nc" "Install netcat: brew install netcat (macOS)"

  # Extract host and port from URL
  local server_addr
  server_addr="${url#tcp://}"
  local tcp_host="${server_addr%:*}"
  local tcp_port="${server_addr##*:}"

  if [[ -z "$tcp_host" ]]; then
    error_exit "TCP host is required in URL (tcp://host:port)"
  fi
  if [[ -z "$tcp_port" ]]; then
    error_exit "TCP port is required in URL (tcp://host:port)"
  fi

  # Prepare data to send
  local send_data=""
  if [[ -n "$TCP_DATA" ]]; then
    send_data="$TCP_DATA"
  elif [[ "$CONFIG_BODY_EXISTS" == "true" ]]; then
    send_data=$(yq e '.body' -o=json "$config")
  fi

  # Handle encoding
  if [[ "$TCP_ENCODING" == "hex" ]]; then
    send_data=$(echo -n "$send_data" | xxd -r -p)
  elif [[ "$TCP_ENCODING" == "base64" ]]; then
    send_data=$(echo -n "$send_data" | base64 -d)
  fi

  echo "Executing TCP request to $tcp_host:$tcp_port" >&2
  if [[ -n "$send_data" ]]; then
    echo "Sending data: $send_data" >&2
  fi

  local start_time end_time elapsed_ms response
  start_time=$(date +%s%N)

  local nc_args=(-w "$TCP_READ_TIMEOUT")

  if [[ -n "$send_data" ]]; then
    response=$(echo -n "$send_data" | nc "${nc_args[@]}" "$tcp_host" "$tcp_port" 2>&1)
  else
    response=$(nc "${nc_args[@]}" "$tcp_host" "$tcp_port" 2>&1 </dev/null)
  fi

  end_time=$(date +%s%N)
  elapsed_ms=$(( (end_time - start_time) / 1000000 ))

  print_response "$response"
  print_timing "$elapsed_ms"
}
