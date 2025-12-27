// Package briefing provides the embedded LLM briefing documentation.
package briefing

import _ "embed"

//go:embed LLM_BRIEFING.md
var Content string
