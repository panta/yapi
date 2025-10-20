# The point of this file is that you can source this
# and we'll be able to append to the zsh history correctly.
# We can also generate the alias here.

YAPI_HOME="${YAPI_HOME:-$HOME/.config/yapi}"
alias yapi='yapi_zsh'

function yapi_zsh() {
  [ -f "$YAPI_HOME/yapi.sh" ] || return 1

  bash "$YAPI_HOME/yapi.sh" "$@"

  file="$HOME/.yapi_history"
  recent_line=$(tail -n 1 "$file")
  command=$(echo "$recent_line" | cut -d '|' -f 2- | xargs)
  cmd="$command"
  if ! print -s "$cmd" &>/dev/null; then
    if ! history -s "$cmd" &>/dev/null; then
      echo "Both print and history commands failed"
    fi
  fi
}

