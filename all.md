### Repo tree:
.
├── .github
│   └── workflows
│       ├── cli.yml
│       ├── codecov.yml
│       ├── installer-tests.yml
│       ├── release.yaml
│       └── webapp-tests.yml
├── .gitignore
├── .gitmodules
├── .golangci.yml
├── .goreleaser.yaml
├── AGENTS.md
├── bin
│   └── yapi.zsh
├── bump.sh
├── cmd
│   └── yapi
│       └── main.go
├── codecov.yml
├── examples
│   ├── chain
│   │   ├── auth-chain.yapi.yml
│   │   ├── env-vars-chain.yapi.yml
│   │   ├── forward-ref.fail.yapi.yml
│   │   ├── mixed-transport-refs.yapi.yml
│   │   ├── mixed-transport.yapi.yml
│   │   ├── post-chain.yapi.yml
│   │   └── simple-chain.yapi.yml
│   ├── expect
│   │   ├── simple-expect.yapi.yml
│   │   ├── test-expect.fail.yapi.yml
│   │   └── test-expect.yapi.yml
│   ├── graphql
│   │   ├── continents.yapi.yml
│   │   ├── countries-list.yapi.yml
│   │   ├── country-by-code.yapi.yml
│   │   ├── github-downloads.yapi.yml
│   │   └── rick-and-morty.yapi.yml
│   ├── grpc
│   │   ├── hello-service.yapi.yml
│   │   └── with-metadata.yapi.yml
│   ├── http
│   │   ├── basic-auth.yapi.yml
│   │   ├── custom-headers.yapi.yml
│   │   ├── delete.yapi.yml
│   │   ├── env-variables.yapi.yml
│   │   ├── get-with-params.yapi.yml
│   │   ├── jq-filter.yapi.yml
│   │   ├── jq-nested.yapi.yml
│   │   ├── json-literal.yapi.yml
│   │   ├── patch-partial.yapi.yml
│   │   ├── post-form.yapi.yml
│   │   ├── post-json.yapi.yml
│   │   ├── put-update.yapi.yml
│   │   └── simple-get.yapi.yml
│   ├── invalid
│   │   ├── bad-jq.yapi.yml
│   │   ├── grpc-missing-service.yapi.yml
│   │   ├── missing-url.yapi.yml
│   │   ├── undefined-chain-ref.yapi.yml
│   │   └── unknown-keys.yapi.yml
│   ├── live
│   │   └── audio-file-chain.local.yapi.yml
│   ├── tcp
│   │   ├── base64-data.yapi.yml
│   │   ├── echo-server.yapi.yml
│   │   ├── hex-data.yapi.yml
│   │   ├── multiline.yapi.yml
│   │   ├── post-issue.yapi.yml
│   │   └── tcp-chain.yapi.yml
│   └── wait
│       └── example-wait.yapi.yml
├── go.mod
├── go.sum
├── internal
│   ├── cli
│   │   ├── color
│   │   │   └── color.go
│   │   ├── commands
│   │   │   └── commands.go
│   │   └── middleware
│   │       └── observability.go
│   ├── compiler
│   │   └── compiler.go
│   ├── config
│   │   ├── loader_test.go
│   │   ├── loader.go
│   │   ├── merge_test.go
│   │   └── v1.go
│   ├── constants
│   │   └── keywords.go
│   ├── core
│   │   ├── core.go
│   │   └── stats.go
│   ├── domain
│   │   └── domain.go
│   ├── executor
│   │   ├── executor.go
│   │   ├── graphql.go
│   │   ├── grpc.go
│   │   ├── http_test.go
│   │   ├── http.go
│   │   ├── tcp_test.go
│   │   └── tcp.go
│   ├── filter
│   │   ├── jq_test.go
│   │   └── jq.go
│   ├── langserver
│   │   └── langserver.go
│   ├── observability
│   │   ├── client.go
│   │   ├── file_logger_test.go
│   │   ├── file_logger.go
│   │   └── observability.go
│   ├── output
│   │   ├── highlight_test.go
│   │   └── highlight.go
│   ├── runner
│   │   ├── chain_test.go
│   │   ├── context_test.go
│   │   ├── context.go
│   │   ├── mock_executor_test.go
│   │   └── runner.go
│   ├── share
│   │   ├── encoding_test.go
│   │   └── encoding.go
│   ├── tui
│   │   ├── selector
│   │   │   └── selector.go
│   │   ├── theme
│   │   │   └── theme.go
│   │   ├── tui.go
│   │   └── watch.go
│   ├── utils
│   │   └── fn.go
│   ├── validation
│   │   ├── analyzer_test.go
│   │   ├── analyzer.go
│   │   ├── chain_test.go
│   │   ├── debug_test.go
│   │   ├── graphql_jq.go
│   │   ├── validation_test.go
│   │   └── validation.go
│   └── vars
│       ├── vars_test.go
│       └── vars.go
├── LICENSE.md
├── lua
│   └── yapi_nvim
│       └── init.lua
├── Makefile
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── scripts
│   ├── bump.sh
│   ├── fuzz.go
│   ├── fuzz.sh
│   ├── gendocs.go
│   ├── rp-main.sh
│   ├── run-all-examples-parallel.sh
│   └── vercel-build.sh
├── vercel.json
└── web
    ├── __test__
    │   ├── browser
    │   │   ├── encoding.test.ts
    │   │   ├── gzip.test.ts
    │   │   ├── hello.test.tsx
    │   │   └── yapi-encode.test.ts
    │   └── node
    │       └── hello.test.ts
    ├── app
    │   ├── _lib
    │   │   ├── encoding.ts
    │   │   ├── gzip.ts
    │   │   ├── shared.ts
    │   │   └── yapi-encode.ts
    │   ├── api
    │   │   ├── execute
    │   │   │   └── route.ts
    │   │   ├── validate
    │   │   │   └── route.ts
    │   │   └── yapi
    │   │       └── version
    │   │           └── route.ts
    │   ├── apple-icon.tsx
    │   ├── blog
    │   │   ├── [...slug]
    │   │   │   └── page.tsx
    │   │   ├── madea.config.tsx
    │   │   └── page.tsx
    │   ├── c
    │   │   ├── [encoded]
    │   │   │   └── page.tsx
    │   │   └── readme.md
    │   ├── cli
    │   │   └── [[...path]]
    │   │       └── route.ts
    │   ├── components
    │   │   ├── CopyInstallButton.tsx
    │   │   ├── Editor.tsx
    │   │   ├── JsonViewer.tsx
    │   │   ├── Landing.tsx
    │   │   ├── LandingStyles.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── NavbarLogo.tsx
    │   │   ├── OutputPanel.tsx
    │   │   ├── Playground.tsx
    │   │   └── ShareButton.tsx
    │   ├── docs
    │   │   ├── [...slug]
    │   │   │   └── page.tsx
    │   │   ├── madea.config.tsx
    │   │   └── page.tsx
    │   ├── gh
    │   │   └── route.ts
    │   ├── globals.css
    │   ├── healthz
    │   │   └── route.ts
    │   ├── icon.tsx
    │   ├── layout.tsx
    │   ├── lib
    │   │   ├── constants.ts
    │   │   ├── github.ts
    │   │   ├── monaco.ts
    │   │   └── yapi-path.ts
    │   ├── manifest.ts
    │   ├── og
    │   │   ├── _lib
    │   │   │   └── shared.tsx
    │   │   ├── blog
    │   │   │   └── route.tsx
    │   │   ├── docs
    │   │   │   └── route.tsx
    │   │   └── route.tsx
    │   ├── page.tsx
    │   ├── playground
    │   │   └── page.tsx
    │   ├── sitemap.ts
    │   ├── twitter-image.tsx
    │   └── types
    │       └── api-contract.ts
    ├── eslint.config.mjs
    ├── madea-blog-core
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── badge.svg
    │   ├── file.svg
    │   ├── fonts
    │   │   └── JetBrains_Mono
    │   │       ├── JetBrainsMono-Italic-VariableFont_wght.ttf
    │   │       ├── JetBrainsMono-VariableFont_wght.ttf
    │   │       ├── OFL.txt
    │   │       ├── README.txt
    │   │       └── static
    │   │           ├── JetBrainsMono-Bold.ttf
    │   │           ├── JetBrainsMono-BoldItalic.ttf
    │   │           ├── JetBrainsMono-ExtraBold.ttf
    │   │           ├── JetBrainsMono-ExtraBoldItalic.ttf
    │   │           ├── JetBrainsMono-ExtraLight.ttf
    │   │           ├── JetBrainsMono-ExtraLightItalic.ttf
    │   │           ├── JetBrainsMono-Italic.ttf
    │   │           ├── JetBrainsMono-Light.ttf
    │   │           ├── JetBrainsMono-LightItalic.ttf
    │   │           ├── JetBrainsMono-Medium.ttf
    │   │           ├── JetBrainsMono-MediumItalic.ttf
    │   │           ├── JetBrainsMono-Regular.ttf
    │   │           ├── JetBrainsMono-SemiBold.ttf
    │   │           ├── JetBrainsMono-SemiBoldItalic.ttf
    │   │           ├── JetBrainsMono-Thin.ttf
    │   │           └── JetBrainsMono-ThinItalic.ttf
    │   ├── install
    │   │   ├── linux.sh
    │   │   ├── mac.sh
    │   │   └── windows.ps1
    │   └── robots.txt
    ├── README.md
    ├── tsconfig.json
    ├── vitest.config.browser.mts
    └── vitest.config.node.mts

76 directories, 209 files




#########################
### cmd/yapi/main.go
package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"runtime/debug"
	"strings"
	"time"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"yapi.run/cli/internal/cli/color"
	"yapi.run/cli/internal/cli/commands"
	"yapi.run/cli/internal/cli/middleware"
	"yapi.run/cli/internal/core"
	"yapi.run/cli/internal/langserver"
	"yapi.run/cli/internal/observability"
	"yapi.run/cli/internal/output"
	"yapi.run/cli/internal/runner"
	"yapi.run/cli/internal/share"
	"yapi.run/cli/internal/tui"
	"yapi.run/cli/internal/validation"
)

// Set via ldflags at build time
var (
	version = "dev"
	commit  = "unknown"
	date    = "unknown"
)

func init() {
	if version != "dev" {
		return
	}
	info, ok := debug.ReadBuildInfo()
	if !ok {
		return
	}
	if info.Main.Version != "" && info.Main.Version != "(devel)" {
		version = info.Main.Version
	}
	for _, s := range info.Settings {
		switch s.Key {
		case "vcs.revision":
			if len(s.Value) >= 7 {
				commit = s.Value[:7]
			}
		case "vcs.time":
			date = s.Value
		}
	}
}

type rootCommand struct {
	urlOverride string
	noColor     bool
	httpClient  *http.Client
	engine      *core.Engine
}

// ValidationError provides specific information about validation failures.
type ValidationError struct {
	Diagnostics []validation.Diagnostic
}

func (e *ValidationError) Error() string {
	var errMsgs []string
	for _, d := range e.Diagnostics {
		if d.Severity == validation.SeverityError {
			errMsgs = append(errMsgs, d.Message)
		}
	}
	if len(errMsgs) == 0 {
		return "validation failed"
	}
	if len(errMsgs) == 1 {
		return errMsgs[0]
	}
	return fmt.Sprintf("%d validation errors: %s", len(errMsgs), strings.Join(errMsgs, "; "))
}

func main() {
	observability.Init(version, commit)
	defer observability.Close()

	// Wire observability hook - main.go is the composition root
	requestHook := func(stats map[string]any) {
		observability.Track("request_executed", stats)
	}

	httpClient := &http.Client{Timeout: 30 * time.Second}
	app := &rootCommand{
		httpClient: httpClient,
		engine:     core.NewEngine(httpClient, core.WithRequestHook(requestHook)),
	}

	cfg := &commands.Config{}
	handlers := &commands.Handlers{
		RunInteractive: app.runInteractiveE,
		Run:            app.runE,
		Watch:          app.watchE,
		History:        historyE,
		LSP:            lspE,
		Version:        versionE,
		Validate:       validateE,
		Share:          shareE,
	}

	rootCmd := commands.BuildRoot(cfg, handlers)

	// Wire up the config to app after flags are parsed
	rootCmd.PersistentPreRun = func(cmd *cobra.Command, args []string) {
		app.urlOverride = cfg.URLOverride
		app.noColor = cfg.NoColor
		color.SetNoColor(app.noColor)
	}
	rootCmd.PersistentPostRun = func(cmd *cobra.Command, args []string) {
		// Log command to history (skip meta commands)
		switch cmd.Name() {
		case "history", "version", "lsp", "help", "yapi":
			return
		}
		logHistoryCmd(reconstructCommand(cmd, args))
	}

	// Wrap all commands with observability middleware
	middleware.WrapWithObservability(rootCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, color.Red(err.Error()))
		os.Exit(1)
	}
}

func (app *rootCommand) runInteractiveE(cmd *cobra.Command, args []string) error {
	selectedPath, err := tui.FindConfigFileSingle()
	if err != nil {
		return fmt.Errorf("failed to select config file: %w", err)
	}
	absPath, _ := filepath.Abs(selectedPath)
	logHistoryFromTUI(fmt.Sprintf("yapi run %q", absPath))
	return app.runConfigPathE(selectedPath)
}

func (app *rootCommand) runE(cmd *cobra.Command, args []string) error {
	return app.runConfigPathE(args[0])
}

func (app *rootCommand) watchE(cmd *cobra.Command, args []string) error {
	pretty, _ := cmd.Flags().GetBool("pretty")
	noPretty, _ := cmd.Flags().GetBool("no-pretty")

	var path string
	interactive := len(args) == 0

	if interactive {
		selectedPath, err := tui.FindConfigFileSingle()
		if err != nil {
			return fmt.Errorf("failed to select config file: %w", err)
		}
		path = selectedPath
		absPath, _ := filepath.Abs(selectedPath)
		logHistoryFromTUI(fmt.Sprintf("yapi watch %q", absPath))
	} else {
		path = args[0]
	}

	usePretty := pretty || (interactive && !noPretty)

	if usePretty {
		return tui.RunWatch(path)
	}
	return app.watchConfigPath(path)
}

func (app *rootCommand) watchConfigPath(path string) error {
	absPath, err := filepath.Abs(path)
	if err != nil {
		return fmt.Errorf("failed to resolve path: %w", err)
	}

	clearScreen()
	printWatchHeader(absPath)
	app.runConfigPathSafe(absPath)

	lastMod, err := getModTime(absPath)
	if err != nil {
		return fmt.Errorf("failed to stat file: %w", err)
	}

	ticker := time.NewTicker(500 * time.Millisecond)
	defer ticker.Stop()

	for range ticker.C {
		currentMod, err := getModTime(absPath)
		if err != nil {
			// File became inaccessible - print error and continue watching
			fmt.Fprintf(os.Stderr, "%s\n", color.Red("file inaccessible: "+err.Error()))
			continue
		}
		if currentMod != lastMod {
			lastMod = currentMod
			clearScreen()
			printWatchHeader(absPath)
			app.runConfigPathSafe(absPath)
		}
	}
	return nil
}

func getModTime(path string) (time.Time, error) {
	info, err := os.Stat(path)
	if err != nil {
		return time.Time{}, err
	}
	return info.ModTime(), nil
}

func clearScreen() {
	fmt.Print("\033[H\033[2J")
}

func printWatchHeader(path string) {
	fmt.Printf("%s\n\n", color.Accent("yapi watch"))
	fmt.Printf("%s\n", color.Dim("[watching "+filepath.Base(path)+"]"))
	fmt.Printf("%s\n\n", color.Dim("["+time.Now().Format("15:04:05")+"]"))
}

// runContext holds options for executeRun
type runContext struct {
	path   string
	strict bool // If true, return error on failures; if false, print and return nil
}

// printResult outputs a single result with optional expectation.
func (app *rootCommand) printResult(result *runner.Result, expectRes *runner.ExpectationResult) {
	if result != nil {
		body := strings.TrimRight(output.Highlight(result.Body, result.ContentType, app.noColor), "\n\r")
		fmt.Println(body)
		printResultMeta(result)
	}
	if expectRes != nil {
		printExpectationResult(expectRes)
	}
}

// executeRunE is the unified execution pipeline for both Run and Watch modes.
// Returns error for middleware to capture.
func (app *rootCommand) executeRunE(ctx runContext) error {
	opts := runner.Options{
		URLOverride: app.urlOverride,
		NoColor:     app.noColor,
	}

	runRes := app.engine.RunConfig(context.Background(), ctx.path, opts)

	// Handle validation/parse errors first
	if runRes.Error != nil && runRes.Analysis == nil {
		if ctx.strict {
			return runRes.Error
		}
		fmt.Println(color.Red(runRes.Error.Error()))
		return nil
	}

	app.printErrors(runRes.Analysis, ctx.strict)
	if runRes.Analysis != nil && runRes.Analysis.HasErrors() {
		if ctx.strict {
			return &ValidationError{Diagnostics: runRes.Analysis.Diagnostics}
		}
		return nil
	}

	// Check if this is a chain config
	if runRes.Analysis != nil && len(runRes.Analysis.Chain) > 0 {
		chainResult, chainErr := app.engine.RunChain(context.Background(), runRes.Analysis.Base, runRes.Analysis.Chain, opts, runRes.Analysis)

		// Print results from all completed steps (even if chain failed)
		if chainResult != nil {
			for i, stepResult := range chainResult.Results {
				fmt.Fprintf(os.Stderr, "\n--- Step %d: %s ---\n", i+1, chainResult.StepNames[i])
				var expectRes *runner.ExpectationResult
				if i < len(chainResult.ExpectationResults) {
					expectRes = chainResult.ExpectationResults[i]
				}
				app.printResult(stepResult, expectRes)
			}
		}

		if chainErr != nil {
			if ctx.strict {
				return chainErr
			}
			fmt.Println(color.Red(chainErr.Error()))
			return nil
		}

		fmt.Fprintln(os.Stderr, "\nChain completed successfully.")
		app.printWarnings(runRes.Analysis, ctx.strict)
		return nil
	}

	if runRes.Analysis == nil || runRes.Analysis.Request == nil {
		if ctx.strict {
			return errors.New("invalid config")
		}
		return nil
	}

	app.printResult(runRes.Result, runRes.ExpectRes)

	if runRes.Error != nil {
		if ctx.strict {
			return runRes.Error
		}
		fmt.Println(color.Red(runRes.Error.Error()))
		return nil
	}

	app.printWarnings(runRes.Analysis, ctx.strict)
	return nil
}

// formatDiagnostic formats a single diagnostic with color.
func formatDiagnostic(d validation.Diagnostic) string {
	lineInfo := ""
	if d.Line >= 0 {
		lineInfo = fmt.Sprintf(" (line %d)", d.Line+1)
	}

	switch d.Severity {
	case validation.SeverityError:
		return color.Red("[ERROR]" + lineInfo + " " + d.Message)
	case validation.SeverityWarning:
		return color.Yellow("[WARN]" + lineInfo + " " + d.Message)
	default:
		return color.Cyan("[INFO]" + lineInfo + " " + d.Message)
	}
}

// printDiagnostics prints diagnostics filtered by a predicate.
func (app *rootCommand) printDiagnostics(
	analysis *validation.Analysis,
	strict bool,
	filter func(validation.Diagnostic) bool,
) {
	if analysis == nil {
		return
	}

	out := os.Stdout
	if strict {
		out = os.Stderr
	}

	for _, d := range analysis.Diagnostics {
		if !filter(d) {
			continue
		}
		_, _ = fmt.Fprintln(out, formatDiagnostic(d))
	}
}

func (app *rootCommand) printErrors(a *validation.Analysis, strict bool) {
	app.printDiagnostics(a, strict, func(d validation.Diagnostic) bool {
		return d.Severity == validation.SeverityError
	})
}

func (app *rootCommand) printWarnings(a *validation.Analysis, strict bool) {
	if a == nil {
		return
	}

	out := os.Stdout
	if strict {
		out = os.Stderr
	}

	// Print legacy warnings (from parser level) and non-error diagnostics in one pass
	for _, w := range a.Warnings {
		_, _ = fmt.Fprintln(out, color.Yellow("[WARN] "+w))
	}
	for _, d := range a.Diagnostics {
		if d.Severity != validation.SeverityError {
			_, _ = fmt.Fprintln(out, formatDiagnostic(d))
		}
	}
}

// runConfigPathSafe runs a config file without returning error (for watch mode)
func (app *rootCommand) runConfigPathSafe(path string) {
	_ = app.executeRunE(runContext{path: path, strict: false})
}

// runConfigPathE runs a config file in strict mode (returns error)
func (app *rootCommand) runConfigPathE(path string) error {
	return app.executeRunE(runContext{path: path, strict: true})
}

func lspE(cmd *cobra.Command, args []string) error {
	langserver.Run()
	return nil
}

func versionE(cmd *cobra.Command, args []string) error {
	jsonOutput, _ := cmd.Flags().GetBool("json")

	if jsonOutput {
		info := map[string]any{
			"version": version,
			"commit":  commit,
			"date":    date,
		}
		return json.NewEncoder(os.Stdout).Encode(info)
	}

	fmt.Printf("yapi %s\n", version)
	fmt.Printf("  commit: %s\n", commit)
	fmt.Printf("  built:  %s\n", date)
	return nil
}

func validateE(cmd *cobra.Command, args []string) error {
	jsonOutput, _ := cmd.Flags().GetBool("json")
	var text string

	if len(args) == 0 || args[0] == "-" {
		data, err := io.ReadAll(os.Stdin)
		if err != nil {
			if jsonOutput {
				outputValidateError(err)
				return nil
			}
			return fmt.Errorf("failed to read stdin: %w", err)
		}
		text = string(data)
	} else {
		data, err := os.ReadFile(args[0])
		if err != nil {
			if jsonOutput {
				outputValidateError(err)
				return nil
			}
			return fmt.Errorf("failed to read file: %w", err)
		}
		text = string(data)
	}

	analysis, err := validation.AnalyzeConfigString(text)
	if err != nil {
		if jsonOutput {
			outputValidateError(err)
			return nil
		}
		return fmt.Errorf("validation failed: %w", err)
	}

	if jsonOutput {
		_ = json.NewEncoder(os.Stdout).Encode(analysis.ToJSON())
		return nil
	}

	return outputValidateText(analysis)
}

func outputValidateError(err error) {
	out := validation.JSONOutput{
		Valid: false,
		Diagnostics: []validation.JSONDiagnostic{{
			Severity: "error",
			Message:  err.Error(),
			Line:     0,
			Col:      0,
		}},
		Warnings: []string{},
	}
	_ = json.NewEncoder(os.Stdout).Encode(out)
}

func outputValidateText(analysis *validation.Analysis) error {
	hasOutput := len(analysis.Warnings) > 0 || len(analysis.Diagnostics) > 0

	for _, w := range analysis.Warnings {
		fmt.Println(color.Yellow("[WARN] " + w))
	}

	for _, d := range analysis.Diagnostics {
		fmt.Println(formatDiagnostic(d))
	}

	if !hasOutput {
		fmt.Println(color.Green("Valid"))
	}

	if analysis.HasErrors() {
		return errors.New("validation errors")
	}
	return nil
}

func shareE(cmd *cobra.Command, args []string) error {
	filename := args[0]

	data, err := os.ReadFile(filename) //nolint:gosec // user-provided file path
	if err != nil {
		return fmt.Errorf("failed to read file: %w", err)
	}

	content := string(data)

	// Validate the config
	analysis, analysisErr := validation.AnalyzeConfigString(content)
	if analysisErr != nil {
		return fmt.Errorf("failed to analyze config: %w", analysisErr)
	}
	hasErrors := analysis != nil && analysis.HasErrors()
	hasWarnings := analysis != nil && len(analysis.Warnings) > 0

	encoded, err := share.Encode(content)
	if err != nil {
		return fmt.Errorf("failed to encode: %w", err)
	}

	url := "https://yapi.run/c/" + encoded

	// Stats
	originalSize := len(data)
	compressedSize := len(encoded)
	ratio := float64(compressedSize) / float64(originalSize) * 100
	lines := strings.Count(content, "\n") + 1

	// Fancy output to stderr
	fmt.Fprintln(os.Stderr)
	fmt.Fprintln(os.Stderr, color.AccentBg(" yapi share "))
	fmt.Fprintln(os.Stderr)

	if hasErrors {
		fmt.Fprintln(os.Stderr, "  "+color.Yellow("Heads up: this yap has validation errors!"))
		fmt.Fprintln(os.Stderr)
		for _, d := range analysis.Diagnostics {
			if d.Severity == validation.SeverityError {
				fmt.Fprintln(os.Stderr, "  "+color.Red(d.Message))
			}
		}
		fmt.Fprintln(os.Stderr)
	} else if hasWarnings {
		fmt.Fprintln(os.Stderr, "  "+color.Yellow("Your yap has warnings, but it's ready to share!"))
	} else {
		fmt.Fprintln(os.Stderr, "  "+color.Green("Your yap is ready to share!"))
	}
	fmt.Fprintln(os.Stderr)
	fmt.Fprintln(os.Stderr, color.Dim("  file     ")+filepath.Base(filename))
	fmt.Fprintln(os.Stderr, color.Dim("  lines    ")+fmt.Sprintf("%d", lines))
	fmt.Fprintln(os.Stderr, color.Dim("  size     ")+fmt.Sprintf("%s -> %s (%.0f%%)", formatBytes(originalSize), formatBytes(compressedSize), ratio))
	fmt.Fprintln(os.Stderr)
	fmt.Fprintln(os.Stderr, "  "+color.Cyan(url))
	fmt.Fprintln(os.Stderr)
	fmt.Fprintln(os.Stderr, color.Dim("  The entire request is encoded in the URL - just share it!"))
	fmt.Fprintln(os.Stderr)

	// Only print raw URL to stdout when piping (not a terminal)
	if stat, _ := os.Stdout.Stat(); (stat.Mode() & os.ModeCharDevice) == 0 {
		fmt.Println(url)
	}
	return nil
}

// printExpectationResult prints expectation results to stderr
func printExpectationResult(res *runner.ExpectationResult) {
	if res.AssertionsTotal == 0 && !res.StatusChecked {
		return
	}

	fmt.Fprintln(os.Stderr)

	// Status check result
	if res.StatusChecked {
		if res.StatusPassed {
			fmt.Fprintf(os.Stderr, "%s %s\n", color.Green("[PASS]"), "status check")
		} else {
			fmt.Fprintf(os.Stderr, "%s %s\n", color.Red("[FAIL]"), "status check")
		}
	}

	// Print each assertion result
	for _, ar := range res.AssertionResults {
		if ar.Passed {
			fmt.Fprintf(os.Stderr, "%s %s\n", color.Green("[PASS]"), ar.Expression)
		} else {
			fmt.Fprintf(os.Stderr, "%s %s\n", color.Red("[FAIL]"), ar.Expression)
		}
	}

	// Summary line
	if res.AssertionsTotal > 0 {
		summary := fmt.Sprintf("assertions: %d/%d passed", res.AssertionsPassed, res.AssertionsTotal)
		if res.AllPassed() {
			fmt.Fprintf(os.Stderr, "\n%s\n", color.Green(summary))
		} else {
			fmt.Fprintf(os.Stderr, "\n%s\n", color.Red(summary))
		}
	}
}

// printResultMeta prints request URL and timing to stderr
func printResultMeta(result *runner.Result) {
	if result.RequestURL != "" {
		fmt.Fprintf(os.Stderr, "\n%s\n", color.Dim("URL: "+result.RequestURL))
	}
	fmt.Fprintf(os.Stderr, "%s\n", color.Dim("Time: "+result.Duration.String()))
	fmt.Fprintf(os.Stderr, "%s\n", color.Dim(fmt.Sprintf("Size: %s (%d lines, %d chars)", formatBytes(result.BodyBytes), result.BodyLines, result.BodyChars)))
}

func formatBytes(b int) string {
	const unit = 1000
	if b < unit {
		return fmt.Sprintf("%dB", b)
	}
	div, exp := int64(unit), 0
	for n := b / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cB", float64(b)/float64(div), "kMGTPE"[exp])
}

type historyEntry struct {
	Timestamp string   `json:"timestamp"`
	Event     string   `json:"event,omitempty"`  // legacy single event
	Events    []string `json:"events,omitempty"` // new merged events
	Command   string   `json:"command,omitempty"`
	FromTUI   bool     `json:"from_tui,omitempty"`
	// Fields from request tracking
	OS      string         `json:"os,omitempty"`
	Arch    string         `json:"arch,omitempty"`
	Version string         `json:"version,omitempty"`
	Commit  string         `json:"commit,omitempty"`
	Props   map[string]any `json:"-"` // For parsing additional fields
}

func historyE(cmd *cobra.Command, args []string) error {
	jsonOutput, _ := cmd.Flags().GetBool("json")

	count := 10
	if len(args) == 1 {
		n, err := fmt.Sscanf(args[0], "%d", &count)
		if err != nil || n != 1 || count < 1 {
			return fmt.Errorf("invalid count: %s", args[0])
		}
	}

	data, err := os.ReadFile(observability.HistoryFilePath)
	if err != nil {
		if os.IsNotExist(err) {
			fmt.Println("No history yet")
			return nil
		}
		return fmt.Errorf("failed to read history: %w", err)
	}

	lines := strings.Split(strings.TrimSpace(string(data)), "\n")
	if len(lines) == 0 || (len(lines) == 1 && lines[0] == "") {
		fmt.Println("No history yet")
		return nil
	}

	start := len(lines) - count
	if start < 0 {
		start = 0
	}

	entries := lines[start:]

	if jsonOutput {
		fmt.Println("[")
		for i, line := range entries {
			fmt.Print("  " + line)
			if i < len(entries)-1 {
				fmt.Println(",")
			} else {
				fmt.Println()
			}
		}
		fmt.Println("]")
		return nil
	}

	// Pretty print for humans
	for _, line := range entries {
		var entry historyEntry
		if err := json.Unmarshal([]byte(line), &entry); err != nil {
			continue
		}
		t, _ := time.Parse(time.RFC3339, entry.Timestamp)
		timeStr := color.Dim(t.Format("2006-01-02 15:04:05"))

		// New merged format has Command field directly
		if entry.Command != "" {
			fmt.Printf("%s  %s\n", timeStr, entry.Command)
			continue
		}

		// Legacy: request_executed entries had method/url
		if entry.Event == "request_executed" {
			var raw map[string]any
			if err := json.Unmarshal([]byte(line), &raw); err == nil {
				method, _ := raw["method"].(string)
				url, _ := raw["url"].(string)
				status, _ := raw["status_code"].(float64)
				if method != "" && url != "" {
					fmt.Printf("%s  %s %s %s\n", timeStr, color.Cyan(method), url, color.Dim(fmt.Sprintf("[%d]", int(status))))
					continue
				}
			}
		}
	}
	return nil
}

// logHistoryCmd writes a command to history as JSON
func logHistoryCmd(cmdStr string) {
	logHistoryEntry(cmdStr, false)
}

// logHistoryFromTUI writes a TUI-selected command to history
func logHistoryFromTUI(cmdStr string) {
	logHistoryEntry(cmdStr, true)
}

func logHistoryEntry(cmdStr string, fromTUI bool) {
	props := map[string]any{
		"command": cmdStr,
	}
	if fromTUI {
		props["from_tui"] = true
	}
	observability.Track("command", props)
}

// reconstructCommand builds the full command string from cobra command and args
func reconstructCommand(cmd *cobra.Command, args []string) string {
	parts := []string{"yapi", cmd.Name()}

	// Add flags that were set
	cmd.Flags().Visit(func(f *pflag.Flag) {
		if f.Value.Type() == "bool" {
			parts = append(parts, "--"+f.Name)
		} else {
			parts = append(parts, fmt.Sprintf("--%s=%q", f.Name, f.Value.String()))
		}
	})

	// Add args (quote paths)
	for _, arg := range args {
		absPath, err := filepath.Abs(arg)
		if err == nil && fileExists(absPath) {
			parts = append(parts, fmt.Sprintf("%q", absPath))
		} else {
			parts = append(parts, arg)
		}
	}

	return strings.Join(parts, " ")
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}



#########################
### internal/cli/color/color.go
// Package color provides CLI color constants matching the yapi theme.
// Uses ANSI true color (24-bit) for exact RGB color matching.
package color

import "fmt"

// Theme RGB values from internal/tui/theme/theme.go
const (
	// Accent: #ff9e64
	accentR, accentG, accentB = 255, 158, 100
	// Green: #69DB7C
	greenR, greenG, greenB = 105, 219, 124
	// Red: #FF6B6B
	redR, redG, redB = 255, 107, 107
	// Yellow: #FFE066
	yellowR, yellowG, yellowB = 255, 224, 102
	// Cyan/Info: #7aa2f7
	cyanR, cyanG, cyanB = 122, 162, 247
)

// ANSI true color escape sequences
var (
	accentSeq   = fmt.Sprintf("\033[38;2;%d;%d;%dm", accentR, accentG, accentB)
	greenSeq    = fmt.Sprintf("\033[38;2;%d;%d;%dm", greenR, greenG, greenB)
	redSeq      = fmt.Sprintf("\033[38;2;%d;%d;%dm", redR, redG, redB)
	yellowSeq   = fmt.Sprintf("\033[38;2;%d;%d;%dm", yellowR, yellowG, yellowB)
	cyanSeq     = fmt.Sprintf("\033[38;2;%d;%d;%dm", cyanR, cyanG, cyanB)
	dimSeq      = "\033[2m"
	resetSeq    = "\033[0m"
	accentBgSeq = fmt.Sprintf("\033[48;2;%d;%d;%dm\033[38;2;255;255;255m", accentR, accentG, accentB) // white on orange
)

// noColor tracks if color output is disabled
var noColor bool

// SetNoColor globally disables color output.
func SetNoColor(disabled bool) {
	noColor = disabled
}

// wrap returns text wrapped in color sequence, respecting NoColor
func wrap(seq, text string) string {
	if noColor {
		return text
	}
	return seq + text + resetSeq
}

// Accent formats text with the theme accent color (#ff9e64 orange)
func Accent(text string) string {
	return wrap(accentSeq, text)
}

// Green formats text with theme green (#69DB7C)
func Green(text string) string {
	return wrap(greenSeq, text)
}

// Red formats text with theme red (#FF6B6B)
func Red(text string) string {
	return wrap(redSeq, text)
}

// Yellow formats text with theme yellow (#FFE066)
func Yellow(text string) string {
	return wrap(yellowSeq, text)
}

// Cyan formats text with theme cyan/info (#7aa2f7)
func Cyan(text string) string {
	return wrap(cyanSeq, text)
}

// Dim formats text with faint/dim style
func Dim(text string) string {
	return wrap(dimSeq, text)
}

// AccentBg formats text with white on accent background
func AccentBg(text string) string {
	return wrap(accentBgSeq, text)
}



#########################
### internal/cli/commands/commands.go
// Package commands defines the CLI command structure for the yapi application.
package commands

import (
	"github.com/spf13/cobra"
)

// Config holds configuration for command execution
type Config struct {
	URLOverride string
	NoColor     bool
}

// Handlers contains the callback functions for command execution
type Handlers struct {
	RunInteractive func(cmd *cobra.Command, args []string) error
	Run            func(cmd *cobra.Command, args []string) error
	Watch          func(cmd *cobra.Command, args []string) error
	History        func(cmd *cobra.Command, args []string) error
	LSP            func(cmd *cobra.Command, args []string) error
	Version        func(cmd *cobra.Command, args []string) error
	Validate       func(cmd *cobra.Command, args []string) error
	Share          func(cmd *cobra.Command, args []string) error
}

// BuildRoot builds the root command tree with optional handlers.
// If handlers is nil, commands are built without RunE functions (for doc generation).
func BuildRoot(cfg *Config, handlers *Handlers) *cobra.Command {
	if cfg == nil {
		cfg = &Config{}
	}

	rootCmd := &cobra.Command{
		Use:           "yapi",
		Short:         "yapi is a unified API client for HTTP, gRPC, and TCP",
		SilenceUsage:  true,
		SilenceErrors: true,
		Run:           func(cmd *cobra.Command, args []string) {},
	}

	if handlers != nil && handlers.RunInteractive != nil {
		rootCmd.RunE = handlers.RunInteractive
	}

	rootCmd.PersistentFlags().StringVarP(&cfg.URLOverride, "url", "u", "", "Override the URL specified in the config file")
	rootCmd.PersistentFlags().BoolVar(&cfg.NoColor, "no-color", false, "Disable color output")

	rootCmd.AddCommand(newRunCmd(handlers))
	rootCmd.AddCommand(newWatchCmd(handlers))
	rootCmd.AddCommand(newHistoryCmd(handlers))
	rootCmd.AddCommand(newLSPCmd(handlers))
	rootCmd.AddCommand(newVersionCmd(handlers))
	rootCmd.AddCommand(newValidateCmd(handlers))
	rootCmd.AddCommand(newShareCmd(handlers))

	return rootCmd
}

func newRunCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "run <file>",
		Short: "Run a request defined in a yapi config file",
		Args:  cobra.ExactArgs(1),
		Run:   func(cmd *cobra.Command, args []string) {}, // no-op for doc generation
	}
	if h != nil && h.Run != nil {
		cmd.RunE = h.Run
	}
	return cmd
}

func newWatchCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "watch [file]",
		Short: "Watch a yapi config file and re-run on changes",
		Args:  cobra.MaximumNArgs(1),
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.Watch != nil {
		cmd.RunE = h.Watch
	}

	cmd.Flags().BoolP("pretty", "p", false, "Enable pretty TUI mode")
	cmd.Flags().Bool("no-pretty", false, "Disable pretty TUI mode")

	return cmd
}

func newHistoryCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "history [count]",
		Short: "Show yapi command history (default: last 10)",
		Args:  cobra.MaximumNArgs(1),
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.History != nil {
		cmd.RunE = h.History
	}

	cmd.Flags().Bool("json", false, "Output as JSON")

	return cmd
}

func newLSPCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "lsp",
		Short: "Run the yapi language server over stdio",
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.LSP != nil {
		cmd.RunE = h.LSP
	}
	return cmd
}

func newVersionCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "version",
		Short: "Print version information",
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.Version != nil {
		cmd.RunE = h.Version
	}

	cmd.Flags().Bool("json", false, "Output version info as JSON")

	return cmd
}

func newValidateCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "validate [file]",
		Short: "Validate a yapi config file",
		Long:  "Validate a yapi config file and report diagnostics. Use - to read from stdin.",
		Args:  cobra.MaximumNArgs(1),
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.Validate != nil {
		cmd.RunE = h.Validate
	}

	cmd.Flags().Bool("json", false, "Output diagnostics as JSON")

	return cmd
}

func newShareCmd(h *Handlers) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "share <file>",
		Short: "Generate a shareable yapi.run link for a config file",
		Args:  cobra.ExactArgs(1),
		Run:   func(cmd *cobra.Command, args []string) {},
	}
	if h != nil && h.Share != nil {
		cmd.RunE = h.Share
	}

	return cmd
}



#########################
### internal/cli/middleware/observability.go
// Package middleware provides Cobra command middleware for the yapi CLI.
package middleware

import (
	"time"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"yapi.run/cli/internal/observability"
)

// WrapWithObservability recursively wraps all commands with observability instrumentation.
// This automatically captures command name, flags used (not values), args count, timing, and success/failure.
func WrapWithObservability(cmd *cobra.Command) {
	// Recursively wrap all child commands first
	for _, c := range cmd.Commands() {
		WrapWithObservability(c)
	}

	// Skip noise commands (completion generates many internal calls)
	if cmd.Name() == "completion" || cmd.Name() == "__complete" {
		return
	}

	// Get the original run function
	originalRunE := cmd.RunE
	if originalRunE == nil && cmd.Run != nil {
		originalRun := cmd.Run
		originalRunE = func(c *cobra.Command, args []string) error {
			originalRun(c, args)
			return nil
		}
	}

	// If no run function, nothing to wrap
	if originalRunE == nil {
		return
	}

	// Clear the Run field since we're using RunE
	cmd.Run = nil

	// Wrap with observability
	cmd.RunE = func(c *cobra.Command, args []string) error {
		start := time.Now()

		// Collect properties from flags
		props := make(map[string]any)

		// Go vibe: Only record that the flag was used, NOT its value
		// This avoids capturing sensitive data like URLs, tokens, etc.
		cmd.Flags().Visit(func(f *pflag.Flag) {
			props["flag_used_"+f.Name] = true
		})

		// Only record args count, not the args themselves
		props["args_count"] = len(args)

		// Execute the original command
		err := originalRunE(c, args)

		// Track command execution
		props["duration_ms"] = time.Since(start).Milliseconds()
		props["success"] = err == nil
		if err != nil {
			// Record error type, not the full message (which may contain sensitive paths)
			props["has_error"] = true
		}
		observability.Track("cmd_"+cmd.Name(), props)

		return err
	}
}



#########################
### internal/compiler/compiler.go
// Package compiler transforms ConfigV1 into domain.Request via recursive interpolation and validation.
// This is the Single Source of Truth for both CLI runtime and LSP.
package compiler

import (
	"encoding/json"
	"fmt"
	"net/url"
	"strings"

	"yapi.run/cli/internal/config"
	"yapi.run/cli/internal/constants"
	"yapi.run/cli/internal/domain"
	"yapi.run/cli/internal/utils"
	"yapi.run/cli/internal/vars"
)

// CompiledRequest is the result of compiling a ConfigV1.
type CompiledRequest struct {
	Request *domain.Request
	Errors  []error
}

// Compile transforms ConfigV1 -> domain.Request via recursive interpolation + validation.
func Compile(cfg *config.ConfigV1, resolver vars.Resolver) *CompiledRequest {
	res := &CompiledRequest{}

	// 1. Recursive Interpolation
	interpolated, err := resolveConfig(cfg, resolver)
	if err != nil {
		res.Errors = append(res.Errors, err)
		return res
	}

	// 2. Canonicalize
	if interpolated.Method == "" {
		interpolated.Method = constants.MethodGET
	}
	interpolated.Method = constants.CanonicalizeMethod(interpolated.Method)

	// 3. Construct Domain Object
	req := &domain.Request{
		Method:   interpolated.Method,
		Headers:  interpolated.Headers,
		Metadata: make(map[string]string),
	}

	// 4. URL Construction
	fullURL := interpolated.URL
	if interpolated.Path != "" {
		fullURL += interpolated.Path
	}
	if len(interpolated.Query) > 0 {
		q := url.Values{}
		for k, v := range interpolated.Query {
			q.Set(k, v)
		}
		if strings.Contains(fullURL, "?") {
			fullURL += "&" + q.Encode()
		} else {
			fullURL += "?" + q.Encode()
		}
	}
	req.URL = fullURL

	// 5. Body Handling
	if interpolated.JSON != "" && interpolated.Body != nil && len(interpolated.Body) > 0 {
		res.Errors = append(res.Errors, fmt.Errorf("`body` and `json` are mutually exclusive"))
	}

	if interpolated.JSON != "" {
		req.Body = strings.NewReader(interpolated.JSON)
		req.Metadata["body_source"] = "json"
		if req.Headers == nil {
			req.Headers = make(map[string]string)
		}
		req.Headers["Content-Type"] = utils.Coalesce(req.Headers["Content-Type"], "application/json")
	} else if interpolated.Body != nil {
		bodyBytes, err := json.Marshal(interpolated.Body)
		if err != nil {
			res.Errors = append(res.Errors, fmt.Errorf("invalid json in 'body' field: %w", err))
		} else {
			req.Body = strings.NewReader(string(bodyBytes))
			if req.Headers == nil {
				req.Headers = make(map[string]string)
			}
			req.Headers["Content-Type"] = utils.Coalesce(req.Headers["Content-Type"], "application/json")
		}
	}

	// Content-Type override
	if interpolated.ContentType != "" {
		if req.Headers == nil {
			req.Headers = make(map[string]string)
		}
		req.Headers["Content-Type"] = interpolated.ContentType
	}

	// 6. Protocol Detection and Validation
	transport := detectTransport(req.URL, interpolated)
	req.Metadata["transport"] = transport

	switch transport {
	case constants.TransportGRPC:
		if interpolated.Service == "" {
			res.Errors = append(res.Errors, fmt.Errorf("gRPC requires 'service'"))
		}
		if interpolated.RPC == "" {
			res.Errors = append(res.Errors, fmt.Errorf("gRPC requires 'rpc'"))
		}
		req.Metadata["service"] = interpolated.Service
		req.Metadata["rpc"] = interpolated.RPC
		req.Metadata["proto"] = interpolated.Proto
		req.Metadata["proto_path"] = interpolated.ProtoPath
		req.Metadata["insecure"] = fmt.Sprintf("%t", interpolated.Insecure)
		req.Metadata["plaintext"] = fmt.Sprintf("%t", interpolated.Plaintext)

	case constants.TransportTCP:
		if interpolated.Encoding != "" && !isValidEncoding(interpolated.Encoding) {
			res.Errors = append(res.Errors, fmt.Errorf("invalid encoding '%s'", interpolated.Encoding))
		}
		req.Metadata["data"] = interpolated.Data
		req.Metadata["encoding"] = interpolated.Encoding
		req.Metadata["read_timeout"] = fmt.Sprintf("%d", interpolated.ReadTimeout)
		req.Metadata["idle_timeout"] = fmt.Sprintf("%d", interpolated.IdleTimeout)
		req.Metadata["close_after_send"] = fmt.Sprintf("%t", interpolated.CloseAfterSend)
	}

	// JQ Filter
	if interpolated.JQFilter != "" {
		req.Metadata["jq_filter"] = interpolated.JQFilter
	}

	// GraphQL
	if interpolated.Graphql != "" {
		req.Metadata["graphql_query"] = interpolated.Graphql
		if interpolated.Variables != nil {
			varsJSON, err := json.Marshal(interpolated.Variables)
			if err != nil {
				res.Errors = append(res.Errors, fmt.Errorf("could not marshal graphql variables: %w", err))
			} else {
				req.Metadata["graphql_variables"] = string(varsJSON)
			}
		}
	}

	res.Request = req
	return res
}

// resolveConfig clones the config and walks it with the resolver.
func resolveConfig(cfg *config.ConfigV1, resolver vars.Resolver) (*config.ConfigV1, error) {
	clone := *cfg
	var err error

	if clone.URL, err = vars.ExpandString(clone.URL, resolver); err != nil {
		return nil, fmt.Errorf("url: %w", err)
	}
	if clone.Path, err = vars.ExpandString(clone.Path, resolver); err != nil {
		return nil, fmt.Errorf("path: %w", err)
	}
	if clone.JSON, err = vars.ExpandString(clone.JSON, resolver); err != nil {
		return nil, fmt.Errorf("json: %w", err)
	}
	if clone.Data, err = vars.ExpandString(clone.Data, resolver); err != nil {
		return nil, fmt.Errorf("data: %w", err)
	}

	// Walk map[string]string fields
	if clone.Headers, err = walkStringMap(clone.Headers, resolver); err != nil {
		return nil, fmt.Errorf("headers: %w", err)
	}
	if clone.Query, err = walkStringMap(clone.Query, resolver); err != nil {
		return nil, fmt.Errorf("query: %w", err)
	}

	// Walk deep maps
	if clone.Body != nil {
		clone.Body, err = walkDeep(clone.Body, resolver)
		if err != nil {
			return nil, fmt.Errorf("body: %w", err)
		}
	}
	if clone.Variables != nil {
		clone.Variables, err = walkDeep(clone.Variables, resolver)
		if err != nil {
			return nil, fmt.Errorf("variables: %w", err)
		}
	}

	return &clone, nil
}

// walkStringMap interpolates all values in a string map.
func walkStringMap(m map[string]string, resolver vars.Resolver) (map[string]string, error) {
	if m == nil {
		return nil, nil
	}
	out := make(map[string]string, len(m))
	for k, v := range m {
		expanded, err := vars.ExpandString(v, resolver)
		if err != nil {
			return nil, fmt.Errorf("key '%s': %w", k, err)
		}
		out[k] = expanded
	}
	return out, nil
}

// walkDeep recursively interpolates any maps/slices.
func walkDeep(v map[string]any, resolver vars.Resolver) (map[string]any, error) {
	if v == nil {
		return nil, nil
	}
	out := make(map[string]any, len(v))
	for k, sv := range v {
		res, err := walkValue(sv, resolver)
		if err != nil {
			return nil, fmt.Errorf("key '%s': %w", k, err)
		}
		out[k] = res
	}
	return out, nil
}

// walkValue recursively interpolates a single value.
func walkValue(v any, resolver vars.Resolver) (any, error) {
	switch val := v.(type) {
	case string:
		return vars.ExpandString(val, resolver)
	case map[string]any:
		return walkDeep(val, resolver)
	case []any:
		out := make([]any, len(val))
		for i, sv := range val {
			res, err := walkValue(sv, resolver)
			if err != nil {
				return nil, err
			}
			out[i] = res
		}
		return out, nil
	default:
		return val, nil
	}
}

func detectTransport(u string, c *config.ConfigV1) string {
	urlLower := strings.ToLower(u)
	if strings.HasPrefix(urlLower, "grpc://") || strings.HasPrefix(urlLower, "grpcs://") {
		return constants.TransportGRPC
	}
	if strings.HasPrefix(urlLower, "tcp://") {
		return constants.TransportTCP
	}
	if c.Graphql != "" {
		return constants.TransportGraphQL
	}
	return constants.TransportHTTP
}

func isValidEncoding(e string) bool {
	return e == "text" || e == "hex" || e == "base64"
}



#########################
### internal/config/loader.go
// Package config handles parsing and loading yapi config files.
package config

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
	"yapi.run/cli/internal/domain"
)

// Envelope is used solely to peek at the version
type Envelope struct {
	Yapi string `yaml:"yapi"`
}

// ParseResult holds the output of parsing a yapi config file.
type ParseResult struct {
	Request  *domain.Request
	Warnings []string
	Chain    []ChainStep // Chain steps if this is a chain config
	Base     *ConfigV1   // Base config for chain merging
	Expect   Expectation // Expectations for single request validation
}

// Load reads and parses a yapi config file from the given path.
func Load(path string) (*ParseResult, error) {
	data, err := os.ReadFile(path) //nolint:gosec // user-provided config file
	if err != nil {
		return nil, err
	}
	return LoadFromString(string(data))
}

// LoadFromString parses a yapi config from raw YAML data.
func LoadFromString(data string) (*ParseResult, error) {
	// 1. Peek at version
	var env Envelope
	if err := yaml.Unmarshal([]byte(data), &env); err != nil {
		return nil, fmt.Errorf("invalid yaml: %w", err)
	}

	// 2. Dispatch based on version
	switch env.Yapi {
	case "v1":
		return parseV1([]byte(data))
	case "":
		// Legacy support: Parse as V1 but warn
		res, err := parseV1([]byte(data))
		if err == nil {
			res.Warnings = append(res.Warnings, "Missing 'yapi: v1' version tag. Defaulting to v1.")
		}
		return res, err
	default:
		return nil, fmt.Errorf("unsupported yapi version: %s", env.Yapi)
	}
}

func parseV1(data []byte) (*ParseResult, error) {
	var v1 ConfigV1
	if err := yaml.Unmarshal(data, &v1); err != nil {
		return nil, err
	}

	// Check if this is a chain config
	if len(v1.Chain) > 0 {
		return &ParseResult{Chain: v1.Chain, Base: &v1}, nil
	}

	domainReq, err := v1.ToDomain()
	if err != nil {
		return nil, err
	}

	return &ParseResult{Request: domainReq, Expect: v1.Expect, Base: &v1}, nil
}



#########################
### internal/config/v1.go
package config

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/url"
	"os"
	"sort"
	"strings"

	"yapi.run/cli/internal/constants"
	"yapi.run/cli/internal/domain"
	"yapi.run/cli/internal/utils"
)

// knownV1Keys is the set of valid keys for v1 config files.
// Must be kept in sync with ConfigV1 struct yaml tags.
var knownV1Keys = map[string]bool{
	"yapi":             true,
	"url":              true,
	"path":             true,
	"method":           true,
	"content_type":     true,
	"headers":          true,
	"body":             true,
	"json":             true,
	"query":            true,
	"graphql":          true,
	"variables":        true,
	"service":          true,
	"rpc":              true,
	"proto":            true,
	"proto_path":       true,
	"data":             true,
	"encoding":         true,
	"jq_filter":        true,
	"insecure":         true,
	"plaintext":        true,
	"read_timeout":     true,
	"idle_timeout":     true,
	"close_after_send": true,
	"chain":            true,
	"expect":           true,
	"delay":            true,
}

// FindUnknownKeys checks a raw map for keys not in knownV1Keys.
// Returns a sorted slice of unknown key names.
func FindUnknownKeys(raw map[string]any) []string {
	var unknown []string
	for key := range raw {
		if !knownV1Keys[key] {
			unknown = append(unknown, key)
		}
	}
	sort.Strings(unknown)
	return unknown
}

// ConfigV1 represents the v1 YAML schema
type ConfigV1 struct {
	Yapi           string            `yaml:"yapi"` // The version tag
	URL            string            `yaml:"url"`
	Path           string            `yaml:"path,omitempty"`
	Method         string            `yaml:"method,omitempty"` // HTTP method (GET, POST, PUT, DELETE, etc.)
	ContentType    string            `yaml:"content_type,omitempty"`
	Headers        map[string]string `yaml:"headers,omitempty"`
	Body           map[string]any    `yaml:"body,omitempty"`
	JSON           string            `yaml:"json,omitempty"` // Raw JSON override
	Query          map[string]string `yaml:"query,omitempty"`
	Graphql        string            `yaml:"graphql,omitempty"`   // GraphQL query/mutation
	Variables      map[string]any    `yaml:"variables,omitempty"` // GraphQL variables
	Service        string            `yaml:"service,omitempty"`   // gRPC
	RPC            string            `yaml:"rpc,omitempty"`       // gRPC
	Proto          string            `yaml:"proto,omitempty"`     // gRPC
	ProtoPath      string            `yaml:"proto_path,omitempty"`
	Data           string            `yaml:"data,omitempty"`     // TCP raw data
	Encoding       string            `yaml:"encoding,omitempty"` // text, hex, base64
	JQFilter       string            `yaml:"jq_filter,omitempty"`
	Insecure       bool              `yaml:"insecure,omitempty"`     // For gRPC
	Plaintext      bool              `yaml:"plaintext,omitempty"`    // For gRPC
	ReadTimeout    int               `yaml:"read_timeout,omitempty"` // TCP read timeout in seconds
	IdleTimeout    int               `yaml:"idle_timeout,omitempty"` // TCP idle timeout in milliseconds (default 500)
	CloseAfterSend bool              `yaml:"close_after_send,omitempty"`

	// Flow control
	Delay string `yaml:"delay,omitempty"` // Wait before executing this step (e.g. "5s", "500ms")

	// Expect defines assertions to run after the request
	Expect Expectation `yaml:"expect,omitempty"`

	// Chain allows executing multiple dependent requests
	Chain []ChainStep `yaml:"chain,omitempty"`
}

// ChainStep represents a single step in a request chain.
// It embeds ConfigV1 so all config fields are available as overrides.
type ChainStep struct {
	Name     string           `yaml:"name"` // Required: unique step identifier
	ConfigV1 `yaml:",inline"` // All ConfigV1 fields available as overrides
}

// Merge creates a full ConfigV1 by applying step overrides to the base config.
// Maps are deep copied to avoid polluting the shared base config between steps.
func (c *ConfigV1) Merge(step ChainStep) ConfigV1 {
	m := *c
	m.Chain = nil
	m.Expect = step.Expect

	// Scalar overrides using Coalesce
	m.URL = utils.Coalesce(step.URL, c.URL)
	m.Path = utils.Coalesce(step.Path, c.Path)
	m.Method = utils.Coalesce(step.Method, c.Method)
	m.ContentType = utils.Coalesce(step.ContentType, c.ContentType)
	m.JSON = utils.Coalesce(step.JSON, c.JSON)
	m.Graphql = utils.Coalesce(step.Graphql, c.Graphql)
	m.Service = utils.Coalesce(step.Service, c.Service)
	m.RPC = utils.Coalesce(step.RPC, c.RPC)
	m.Proto = utils.Coalesce(step.Proto, c.Proto)
	m.ProtoPath = utils.Coalesce(step.ProtoPath, c.ProtoPath)
	m.Data = utils.Coalesce(step.Data, c.Data)
	m.Encoding = utils.Coalesce(step.Encoding, c.Encoding)
	m.JQFilter = utils.Coalesce(step.JQFilter, c.JQFilter)
	m.Delay = utils.Coalesce(step.Delay, c.Delay)

	// Bool/Int overrides
	if step.Insecure {
		m.Insecure = true
	}
	if step.Plaintext {
		m.Plaintext = true
	}
	if step.CloseAfterSend {
		m.CloseAfterSend = true
	}
	if step.ReadTimeout != 0 {
		m.ReadTimeout = step.ReadTimeout
	}
	if step.IdleTimeout != 0 {
		m.IdleTimeout = step.IdleTimeout
	}

	// Generic map merging
	m.Headers = utils.MergeMaps(c.Headers, step.Headers)
	m.Query = utils.MergeMaps(c.Query, step.Query)

	// Deep clone Body/Variables from c, then override if step has values
	m.Body = utils.DeepCloneMap(c.Body)
	if step.Body != nil {
		m.Body = step.Body
	}

	m.Variables = utils.DeepCloneMap(c.Variables)
	if step.Variables != nil {
		m.Variables = step.Variables
	}

	return m
}

// Expectation defines assertions for a chain step
type Expectation struct {
	Status any      `yaml:"status,omitempty"` // int or []int
	Assert []string `yaml:"assert,omitempty"` // JQ expressions that must evaluate to true
}

// ToDomain converts V1 YAML to the Canonical Config
func (c *ConfigV1) ToDomain() (*domain.Request, error) {
	c.expandEnvVars()
	c.setDefaults()

	bodyReader, bodySource, err := c.prepareBody()
	if err != nil {
		return nil, err
	}

	req := &domain.Request{
		URL:      c.buildURL(),
		Method:   c.Method,
		Headers:  c.Headers,
		Body:     bodyReader,
		Metadata: make(map[string]string),
	}

	if c.ContentType != "" {
		if req.Headers == nil {
			req.Headers = make(map[string]string)
		}
		req.Headers["Content-Type"] = c.ContentType
	}

	if bodySource != "" {
		req.Metadata["body_source"] = bodySource
	}

	if err := c.enrichMetadata(req); err != nil {
		return nil, err
	}

	return req, nil
}

// expandEnvVars expands environment variables in URL, Path, Headers, and Query
func (c *ConfigV1) expandEnvVars() {
	c.URL = os.ExpandEnv(c.URL)
	c.Path = os.ExpandEnv(c.Path)
	c.Headers = expandMapEnv(c.Headers)
	c.Query = expandMapEnv(c.Query)
}

func expandMapEnv(m map[string]string) map[string]string {
	if len(m) == 0 {
		return m
	}
	for k, v := range m {
		m[k] = os.ExpandEnv(v)
	}
	return m
}

// setDefaults applies default values for Method
func (c *ConfigV1) setDefaults() {
	if c.Method == "" {
		c.Method = constants.MethodGET
	}
	c.Method = constants.CanonicalizeMethod(c.Method)
}

// prepareBody processes the body/json fields and returns a reader, source identifier, and any error
func (c *ConfigV1) prepareBody() (io.Reader, string, error) {
	if c.JSON != "" && c.Body != nil && len(c.Body) > 0 {
		return nil, "", fmt.Errorf("`body` and `json` are mutually exclusive")
	}

	if c.JSON != "" {
		if c.ContentType == "" {
			c.ContentType = "application/json"
		}
		return strings.NewReader(c.JSON), "json", nil
	}

	if c.Body != nil {
		bodyBytes, err := json.Marshal(c.Body)
		if err != nil {
			return nil, "", fmt.Errorf("invalid json in 'body' field: %w", err)
		}
		if c.ContentType == "" {
			c.ContentType = "application/json"
		}
		return bytes.NewReader(bodyBytes), "", nil
	}

	return nil, "", nil
}

// buildURL constructs the final URL with path and query parameters
func (c *ConfigV1) buildURL() string {
	finalURL := c.URL
	if c.Path != "" {
		finalURL += c.Path
	}
	if len(c.Query) > 0 {
		q := url.Values{}
		for k, v := range c.Query {
			q.Set(k, v)
		}
		finalURL += "?" + q.Encode()
	}
	return finalURL
}

// detectTransport determines the transport type from URL scheme
func (c *ConfigV1) detectTransport() string {
	urlLower := strings.ToLower(c.URL)

	if strings.HasPrefix(urlLower, "grpc://") || strings.HasPrefix(urlLower, "grpcs://") {
		return constants.TransportGRPC
	}
	if strings.HasPrefix(urlLower, "tcp://") {
		return constants.TransportTCP
	}
	if c.Graphql != "" {
		return constants.TransportGraphQL
	}
	return constants.TransportHTTP
}

// enrichMetadata adds transport-specific metadata to the request
func (c *ConfigV1) enrichMetadata(req *domain.Request) error {
	transport := c.detectTransport()
	req.Metadata["transport"] = transport

	switch transport {
	case constants.TransportGRPC:
		req.Metadata["service"] = c.Service
		req.Metadata["rpc"] = c.RPC
		req.Metadata["proto"] = c.Proto
		req.Metadata["proto_path"] = c.ProtoPath
		req.Metadata["insecure"] = fmt.Sprintf("%t", c.Insecure)
		req.Metadata["plaintext"] = fmt.Sprintf("%t", c.Plaintext)
	case constants.TransportTCP:
		req.Metadata["data"] = c.Data
		req.Metadata["encoding"] = c.Encoding
		req.Metadata["read_timeout"] = fmt.Sprintf("%d", c.ReadTimeout)
		req.Metadata["idle_timeout"] = fmt.Sprintf("%d", c.IdleTimeout)
		req.Metadata["close_after_send"] = fmt.Sprintf("%t", c.CloseAfterSend)
	}

	if c.JQFilter != "" {
		req.Metadata["jq_filter"] = c.JQFilter
	}

	if c.Graphql != "" {
		req.Metadata["graphql_query"] = c.Graphql
		if c.Variables != nil {
			vars, err := json.Marshal(c.Variables)
			if err != nil {
				return fmt.Errorf("could not marshal graphql variables: %w", err)
			}
			req.Metadata["graphql_variables"] = string(vars)
		}
	}

	return nil
}



#########################
### internal/constants/keywords.go
// Package constants defines protocol and method constants.
package constants

import "strings"

// HTTP methods
const (
	MethodGET     = "GET"
	MethodPOST    = "POST"
	MethodPUT     = "PUT"
	MethodDELETE  = "DELETE"
	MethodPATCH   = "PATCH"
	MethodHEAD    = "HEAD"
	MethodOPTIONS = "OPTIONS"
)

// Transport types
const (
	TransportHTTP    = "http"
	TransportGRPC    = "grpc"
	TransportTCP     = "tcp"
	TransportGraphQL = "graphql"
)

// ValidHTTPMethods contains all valid HTTP verbs for validation
var ValidHTTPMethods = map[string]bool{
	MethodGET:     true,
	MethodPOST:    true,
	MethodPUT:     true,
	MethodDELETE:  true,
	MethodPATCH:   true,
	MethodHEAD:    true,
	MethodOPTIONS: true,
}

// CanonicalizeMethod returns canonical uppercase method name.
func CanonicalizeMethod(m string) string {
	return strings.ToUpper(strings.TrimSpace(m))
}



#########################
### internal/core/core.go
// Package core provides the main engine for executing yapi configs.
package core

import (
	"context"
	"net/http"
	"time"

	"yapi.run/cli/internal/config"
	"yapi.run/cli/internal/executor"
	"yapi.run/cli/internal/runner"
	"yapi.run/cli/internal/validation"
)

// RequestHook is called after a request completes with stats about the execution.
// This allows the caller (main.go) to wire observability without core knowing about it.
type RequestHook func(stats map[string]any)

// Engine owns shared execution bits used by CLI, TUI, etc.
type Engine struct {
	factory   *executor.Factory
	onRequest RequestHook
}

// EngineOption configures an Engine
type EngineOption func(*Engine)

// WithRequestHook sets a hook to be called after each request
func WithRequestHook(hook RequestHook) EngineOption {
	return func(e *Engine) {
		e.onRequest = hook
	}
}

// NewEngine wires a single HTTP client and executor factory.
func NewEngine(httpClient *http.Client, opts ...EngineOption) *Engine {
	e := &Engine{factory: executor.NewFactory(httpClient)}
	for _, opt := range opts {
		opt(e)
	}
	return e
}

// RunConfigResult contains the results of running a config
type RunConfigResult struct {
	Analysis  *validation.Analysis
	Result    *runner.Result
	ExpectRes *runner.ExpectationResult
	Error     error
}

// RunConfig analyzes, validates, and executes a config file.
// It never prints. Callers decide how to render diagnostics/output.
func (e *Engine) RunConfig(
	ctx context.Context,
	path string,
	opts runner.Options,
) *RunConfigResult {
	analysis, err := validation.AnalyzeConfigFile(path)
	if err != nil {
		return &RunConfigResult{Error: err}
	}

	if analysis.HasErrors() {
		return &RunConfigResult{Analysis: analysis}
	}

	// Check if this is a chain config
	if len(analysis.Chain) > 0 {
		// For chains, return analysis only - caller handles execution
		return &RunConfigResult{Analysis: analysis}
	}

	if analysis.Request == nil {
		return &RunConfigResult{Analysis: analysis}
	}

	// Extract config stats for hook
	stats := ExtractConfigStats(analysis)
	start := time.Now()

	exec, err := e.factory.Create(analysis.Request.Metadata["transport"])
	if err != nil {
		return &RunConfigResult{Analysis: analysis, Error: err}
	}

	result, runErr := runner.Run(ctx, exec, analysis.Request, analysis.Warnings, opts)

	// Check expectations if present
	var expectRes *runner.ExpectationResult
	if result != nil && (analysis.Expect.Status != nil || len(analysis.Expect.Assert) > 0) {
		expectRes = runner.CheckExpectations(analysis.Expect, result)
	}

	// Call hook with request stats (if configured)
	if e.onRequest != nil {
		stats["duration_ms"] = time.Since(start).Milliseconds()
		stats["success"] = runErr == nil && (expectRes == nil || expectRes.Error == nil)
		if runErr != nil {
			stats["error_type"] = "execution"
		} else if expectRes != nil && expectRes.Error != nil {
			stats["error_type"] = "assertion_failed"
		}
		e.onRequest(stats)
	}

	if runErr != nil {
		return &RunConfigResult{Analysis: analysis, Result: result, Error: runErr}
	}

	if expectRes != nil && expectRes.Error != nil {
		return &RunConfigResult{Analysis: analysis, Result: result, ExpectRes: expectRes, Error: expectRes.Error}
	}

	return &RunConfigResult{Analysis: analysis, Result: result, ExpectRes: expectRes}
}

// RunChain executes a chain configuration
func (e *Engine) RunChain(
	ctx context.Context,
	base *config.ConfigV1,
	chain []config.ChainStep,
	opts runner.Options,
	analysis *validation.Analysis,
) (*runner.ChainResult, error) {
	stats := ExtractConfigStats(analysis)
	start := time.Now()

	result, err := runner.RunChain(ctx, e.factory, base, chain, opts)

	if e.onRequest != nil {
		stats["duration_ms"] = time.Since(start).Milliseconds()
		stats["success"] = err == nil
		if err != nil {
			stats["error_type"] = "chain_execution"
		}
		e.onRequest(stats)
	}

	return result, err
}



#########################
### internal/core/stats.go
package core

import (
	"yapi.run/cli/internal/config"
	"yapi.run/cli/internal/validation"
	"yapi.run/cli/internal/vars"
)

// ExtractConfigStats extracts feature usage statistics from an analysis result.
// This is used by observability hooks to gather request metadata.
func ExtractConfigStats(analysis *validation.Analysis) map[string]any {
	stats := make(map[string]any)

	if analysis == nil || analysis.Base == nil {
		return stats
	}

	base := analysis.Base

	// Transport detection
	stats["transport"] = detectTransport(base)

	// Chain info
	isChain := len(analysis.Chain) > 0
	stats["is_chain"] = isChain
	stats["chain_step_count"] = len(analysis.Chain)

	// Expectations
	hasExpectations := analysis.Expect.Status != nil || len(analysis.Expect.Assert) > 0
	assertionCount := len(analysis.Expect.Assert)
	hasStatusCheck := analysis.Expect.Status != nil

	// Count expectations across chain steps too
	for _, step := range analysis.Chain {
		if step.Expect.Status != nil || len(step.Expect.Assert) > 0 {
			hasExpectations = true
		}
		assertionCount += len(step.Expect.Assert)
		if step.Expect.Status != nil {
			hasStatusCheck = true
		}
	}

	stats["has_expectations"] = hasExpectations
	stats["assertion_count"] = assertionCount
	stats["has_status_check"] = hasStatusCheck

	// Variable usage detection
	usesChainVars := false
	usesEnvVars := false

	for _, s := range collectStrings(base, analysis.Chain) {
		if vars.HasChainVars(s) {
			usesChainVars = true
		}
		if vars.HasEnvVars(s) {
			usesEnvVars = true
		}
	}

	stats["uses_chain_vars"] = usesChainVars
	stats["uses_env_vars"] = usesEnvVars

	return stats
}

// detectTransport determines the transport type from URL scheme
func detectTransport(c *config.ConfigV1) string {
	if c == nil || c.URL == "" {
		return "http"
	}

	url := c.URL
	if len(url) >= 7 && (url[:7] == "grpc://" || (len(url) >= 8 && url[:8] == "grpcs://")) {
		return "grpc"
	}
	if len(url) >= 6 && url[:6] == "tcp://" {
		return "tcp"
	}
	if c.Graphql != "" {
		return "graphql"
	}
	return "http"
}

// collectStrings gathers all string values from the config for variable detection.
func collectStrings(base *config.ConfigV1, chain []config.ChainStep) []string {
	if base == nil {
		return nil
	}

	strs := []string{
		base.URL, base.Path, base.Method, base.ContentType,
		base.JSON, base.Graphql, base.Service, base.RPC,
		base.Proto, base.ProtoPath, base.Data, base.Encoding, base.JQFilter,
		base.Delay,
	}

	for _, v := range base.Headers {
		strs = append(strs, v)
	}
	for _, v := range base.Query {
		strs = append(strs, v)
	}

	strs = append(strs, collectMapStrings(base.Body)...)
	strs = append(strs, collectMapStrings(base.Variables)...)

	// Collect from chain steps
	for _, step := range chain {
		strs = append(strs,
			step.URL, step.Path, step.Method, step.ContentType,
			step.JSON, step.Graphql, step.Service, step.RPC,
			step.Proto, step.ProtoPath, step.Data, step.Encoding, step.JQFilter,
			step.Delay,
		)
		for _, v := range step.Headers {
			strs = append(strs, v)
		}
		for _, v := range step.Query {
			strs = append(strs, v)
		}
		strs = append(strs, collectMapStrings(step.Body)...)
		strs = append(strs, collectMapStrings(step.Variables)...)
	}

	return strs
}

// collectMapStrings recursively extracts string values from a map.
func collectMapStrings(m map[string]any) []string {
	var strs []string
	for _, v := range m {
		switch val := v.(type) {
		case string:
			strs = append(strs, val)
		case map[string]any:
			strs = append(strs, collectMapStrings(val)...)
		case []any:
			for _, elem := range val {
				if s, ok := elem.(string); ok {
					strs = append(strs, s)
				} else if m, ok := elem.(map[string]any); ok {
					strs = append(strs, collectMapStrings(m)...)
				}
			}
		}
	}
	return strs
}



#########################
### internal/domain/domain.go
// Package domain defines core request and response types.
package domain

import (
	"io"
	"time"
)

// Request represents an outgoing API request.
type Request struct {
	URL      string
	Method   string
	Headers  map[string]string
	Body     io.Reader // Streamable body
	Metadata map[string]string
}

// Response represents the result of an API request.
type Response struct {
	StatusCode int
	Headers    map[string]string
	Body       io.ReadCloser // Streamable response
	Duration   time.Duration
}



#########################
### internal/executor/executor.go
// Package executor provides transport implementations for HTTP, gRPC, TCP, and GraphQL.
package executor

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"yapi.run/cli/internal/constants"
	"yapi.run/cli/internal/domain"
)

// TransportFunc is the functional signature for all transport implementations.
type TransportFunc func(ctx context.Context, req *domain.Request) (*domain.Response, error)

// HTTPClient is an interface for a client that can send HTTP requests.
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// Factory creates transport functions for different protocols.
type Factory struct {
	Client HTTPClient
}

// NewFactory creates a new executor factory with the given HTTP client.
func NewFactory(client HTTPClient) *Factory {
	return &Factory{Client: client}
}

// Create returns the appropriate transport function for the given transport type.
// The returned function is wrapped with timing middleware.
func (f *Factory) Create(transport string) (TransportFunc, error) {
	var fn TransportFunc

	switch transport {
	case constants.TransportHTTP:
		fn = HTTPTransport(f.Client)
	case constants.TransportGraphQL:
		fn = GraphQLTransport(f.Client)
	case constants.TransportGRPC:
		fn = GRPCTransport
	case constants.TransportTCP:
		fn = TCPTransport
	default:
		return nil, fmt.Errorf("unsupported transport: %s", transport)
	}

	return WithTiming(fn), nil
}

// WithTiming wraps a transport function to measure execution duration.
func WithTiming(next TransportFunc) TransportFunc {
	return func(ctx context.Context, req *domain.Request) (*domain.Response, error) {
		start := time.Now()
		resp, err := next(ctx, req)
		if err != nil {
			return nil, err
		}
		resp.Duration = time.Since(start)
		return resp, err
	}
}



#########################
### internal/executor/graphql.go
package executor

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"yapi.run/cli/internal/domain"
)

// graphqlPayload represents the standard GraphQL JSON envelope
type graphqlPayload struct {
	Query     string         `json:"query"`
	Variables map[string]any `json:"variables,omitempty"`
}

// GraphQLTransport returns a transport function for GraphQL requests.
func GraphQLTransport(client HTTPClient) TransportFunc {
	httpFn := HTTPTransport(client)

	return func(ctx context.Context, req *domain.Request) (*domain.Response, error) {
		// Construct the GraphQL payload
		payload := graphqlPayload{
			Query: req.Metadata["graphql_query"],
		}
		if vars, ok := req.Metadata["graphql_variables"]; ok && vars != "" {
			if err := json.Unmarshal([]byte(vars), &payload.Variables); err != nil {
				return nil, fmt.Errorf("failed to unmarshal graphql variables: %w", err)
			}
		}

		// Marshal to JSON
		jsonBytes, err := json.Marshal(payload)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal graphql payload: %w", err)
		}

		// Create a new request for HTTP execution
		httpReq := &domain.Request{
			URL:     req.URL,
			Method:  "POST",
			Headers: req.Headers,
			Body:    strings.NewReader(string(jsonBytes)),
		}
		if httpReq.Headers == nil {
			httpReq.Headers = make(map[string]string)
		}
		httpReq.Headers["Content-Type"] = "application/json"

		return httpFn(ctx, httpReq)
	}
}



#########################
### internal/executor/grpc.go
package executor

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"strconv"
	"strings"

	"github.com/fullstorydev/grpcurl"
	"github.com/jhump/protoreflect/grpcreflect"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/reflection/grpc_reflection_v1alpha"
	"yapi.run/cli/internal/domain"

	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/proto"
)

// GRPCTransport is the transport function for gRPC requests.
func GRPCTransport(ctx context.Context, req *domain.Request) (*domain.Response, error) {
	// Extract metadata
	service := req.Metadata["service"]
	rpc := req.Metadata["rpc"]
	protoFile := req.Metadata["proto"]
	protoPath := req.Metadata["proto_path"]
	insecureFlag, _ := strconv.ParseBool(req.Metadata["insecure"])
	plaintext, _ := strconv.ParseBool(req.Metadata["plaintext"])

	// Connection setup
	target := strings.TrimPrefix(req.URL, "grpc://")
	var opts []grpc.DialOption
	if insecureFlag || plaintext || strings.HasPrefix(target, "localhost") || strings.HasPrefix(target, "127.0.0.1") {
		opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	}

	// Establish connection
	cc, err := grpc.DialContext(ctx, target, opts...)
	if err != nil {
		return nil, fmt.Errorf("failed to dial gRPC target %s: %w", target, err)
	}
	defer func() { _ = cc.Close() }()

	// Determine descriptor source
	var descSource grpcurl.DescriptorSource
	if protoFile != "" {
		// TODO: Handle proto and proto_path. For now, we focus on reflection.
		_ = protoPath // Avoid unused variable error
		return nil, fmt.Errorf("proto file support not yet implemented")
	}

	// Use server reflection
	refClient := grpcreflect.NewClient(ctx, grpc_reflection_v1alpha.NewServerReflectionClient(cc))
	descSource = grpcurl.DescriptorSourceFromServer(ctx, refClient)

	// Prepare request payload
	var reqData []byte
	if req.Body != nil {
		var buf bytes.Buffer
		if _, err = io.Copy(&buf, req.Body); err != nil {
			return nil, fmt.Errorf("failed to read gRPC request body: %w", err)
		}
		reqData = buf.Bytes()
	}

	// Create a RequestSupplier to feed the request data
	reqSupplier := func(m proto.Message) error {
		if len(reqData) == 0 {
			return io.EOF // No more data
		}
		err := (&jsonpb.Unmarshaler{AllowUnknownFields: true}).Unmarshal(bytes.NewReader(reqData), m)
		if err != nil {
			return fmt.Errorf("failed to unmarshal request data: %w", err)
		}
		reqData = nil // Clear data after first use for unary/server-streaming RPCs
		return nil
	}

	// Setup output buffer for handler
	respBuf := bytes.NewBuffer(nil)
	formatter := grpcurl.NewJSONFormatter(true, nil)
	handler := grpcurl.NewDefaultEventHandler(respBuf, descSource, formatter, false)

	// Invoke RPC
	if err := grpcurl.InvokeRPC(ctx, descSource, cc, service+"/"+rpc, nil, handler, reqSupplier); err != nil {
		return nil, fmt.Errorf("failed to invoke gRPC RPC %s/%s: %w", service, rpc, err)
	}

	return &domain.Response{
		StatusCode: 0, // gRPC status is handled differently, 0 for OK
		Headers:    map[string]string{"Content-Type": "application/json"},
		Body:       io.NopCloser(respBuf),
	}, nil
}



#########################
### internal/executor/http.go
package executor

import (
	"context"
	"fmt"
	"net/http"

	"yapi.run/cli/internal/domain"
)

// HTTPTransport returns a transport function for HTTP requests.
func HTTPTransport(client HTTPClient) TransportFunc {
	return func(ctx context.Context, req *domain.Request) (*domain.Response, error) {
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



#########################
### internal/executor/tcp.go
package executor

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"io"
	"net"
	"strconv"
	"strings"
	"time"

	"yapi.run/cli/internal/domain"
)

// TCPTransport is the transport function for TCP requests.
func TCPTransport(ctx context.Context, req *domain.Request) (*domain.Response, error) {
	// Extract metadata
	data := req.Metadata["data"]
	encoding := req.Metadata["encoding"]
	readTimeout, _ := strconv.Atoi(req.Metadata["read_timeout"])
	idleTimeout, _ := strconv.Atoi(req.Metadata["idle_timeout"])
	closeAfterSend, _ := strconv.ParseBool(req.Metadata["close_after_send"])

	// Extract host and port from URL
	target := strings.TrimPrefix(req.URL, "tcp://")
	if !strings.Contains(target, ":") {
		return nil, fmt.Errorf("TCP URL must be in format tcp://host:port, got %s", req.URL)
	}

	// Prepare data to send
	var sendData []byte
	var err error
	if data != "" {
		sendData = []byte(data)
	} else if req.Body != nil {
		var buf bytes.Buffer
		if _, err = io.Copy(&buf, req.Body); err != nil {
			return nil, fmt.Errorf("failed to read request body for TCP: %w", err)
		}
		sendData = buf.Bytes()
	}

	// Handle encoding
	switch encoding {
	case "hex":
		decoded, err := hex.DecodeString(string(sendData))
		if err != nil {
			return nil, fmt.Errorf("failed to decode hex data: %w", err)
		}
		sendData = decoded
	case "base64":
		decoded, err := base64.StdEncoding.DecodeString(string(sendData))
		if err != nil {
			return nil, fmt.Errorf("failed to decode base64 data: %w", err)
		}
		sendData = decoded
	case "text", "": // Default is text
		// No special decoding needed
	default:
		return nil, fmt.Errorf("unsupported TCP encoding: %s", encoding)
	}

	// Establish connection
	var d net.Dialer
	conn, err := d.DialContext(ctx, "tcp", target)
	if err != nil {
		return nil, fmt.Errorf("failed to dial TCP target %s: %w", target, err)
	}
	defer func() { _ = conn.Close() }()

	// Write data if present
	if len(sendData) > 0 {
		_, err := conn.Write(sendData)
		if err != nil {
			return nil, fmt.Errorf("failed to write data to TCP connection: %w", err)
		}
		if closeAfterSend {
			if tcpConn, ok := conn.(*net.TCPConn); ok {
				_ = tcpConn.CloseWrite()
			}
		}
	}

	// Read response
	var respBuf bytes.Buffer

	// Set read deadline
	if readTimeout > 0 {
		_ = conn.SetReadDeadline(time.Now().Add(time.Duration(readTimeout) * time.Second))
	} else if idleTimeout > 0 {
		_ = conn.SetReadDeadline(time.Now().Add(time.Duration(idleTimeout) * time.Millisecond))
	}

	_, err = io.Copy(&respBuf, conn)
	if err != nil {
		// Ignore timeout errors as they are expected when the server doesn't close the connection
		if netErr, ok := err.(net.Error); !ok || !netErr.Timeout() {
			return nil, fmt.Errorf("failed to read from TCP connection: %w", err)
		}
	}

	return &domain.Response{
		StatusCode: 0, // TCP has no status code
		Body:       io.NopCloser(&respBuf),
	}, nil
}



#########################
### internal/filter/jq.go
// Package filter provides JQ filtering for response bodies.
package filter

import (
	"encoding/json"
	"fmt"
	"math/big"
	"strings"

	"github.com/itchyny/gojq"
)

// ApplyJQ applies a jq filter expression to the given JSON input string.
// Returns the filtered result as a string.
// If the filter produces multiple values, they are joined with newlines.
func ApplyJQ(input string, filterExpr string) (string, error) {
	filterExpr = strings.TrimSpace(filterExpr)
	if filterExpr == "" {
		return input, nil
	}

	// Parse the jq query
	query, err := gojq.Parse(filterExpr)
	if err != nil {
		return "", fmt.Errorf("failed to parse jq filter %q: %w", filterExpr, err)
	}

	// Parse the input JSON, preserving number precision
	inputData, err := parseJSONPreserveNumbers(input)
	if err != nil {
		return "", fmt.Errorf("failed to parse input as JSON: %w", err)
	}

	// Run the query
	iter := query.Run(inputData)

	var results []string
	for {
		v, ok := iter.Next()
		if !ok {
			break
		}
		if err, isErr := v.(error); isErr {
			return "", fmt.Errorf("jq filter error: %w", err)
		}

		// Format the output
		output, err := formatOutput(v)
		if err != nil {
			return "", fmt.Errorf("failed to format jq output: %w", err)
		}
		results = append(results, output)
	}

	return strings.Join(results, "\n"), nil
}

// parseJSONPreserveNumbers parses JSON input while preserving large integer precision.
// It converts json.Number to appropriate Go types that gojq can handle.
func parseJSONPreserveNumbers(input string) (any, error) {
	dec := json.NewDecoder(strings.NewReader(input))
	dec.UseNumber()

	var data any
	if err := dec.Decode(&data); err != nil {
		return nil, err
	}

	return convertNumbers(data), nil
}

// convertNumbers recursively converts json.Number to *big.Int or float64 as appropriate.
// gojq supports *big.Int for arbitrary-precision integers.
func convertNumbers(v any) any {
	switch val := v.(type) {
	case json.Number:
		// Try to parse as big.Int first for arbitrary precision
		if i, ok := new(big.Int).SetString(string(val), 10); ok {
			// Check if it fits in int (gojq prefers int for small numbers)
			if i.IsInt64() {
				return int(i.Int64())
			}
			return i
		}
		// Fall back to float64
		f, _ := val.Float64()
		return f
	case map[string]any:
		for k, v := range val {
			val[k] = convertNumbers(v)
		}
		return val
	case []any:
		for i, v := range val {
			val[i] = convertNumbers(v)
		}
		return val
	default:
		return val
	}
}

// EvalJQBool evaluates a JQ expression and returns true if it evaluates to boolean true.
// Used for assertion checking in chains.
func EvalJQBool(input string, expr string) (bool, error) {
	expr = strings.TrimSpace(expr)
	if expr == "" {
		return false, fmt.Errorf("empty assertion expression")
	}

	// Parse the jq query
	query, err := gojq.Parse(expr)
	if err != nil {
		return false, fmt.Errorf("failed to parse jq expression %q: %w", expr, err)
	}

	// Parse the input JSON
	inputData, err := parseJSONPreserveNumbers(input)
	if err != nil {
		return false, fmt.Errorf("failed to parse input as JSON: %w", err)
	}

	// Run the query
	iter := query.Run(inputData)
	v, ok := iter.Next()
	if !ok {
		return false, fmt.Errorf("assertion %q produced no result", expr)
	}
	if err, isErr := v.(error); isErr {
		return false, fmt.Errorf("assertion error: %w", err)
	}

	// Check if result is boolean true
	switch val := v.(type) {
	case bool:
		return val, nil
	default:
		return false, fmt.Errorf("assertion %q did not return boolean (got %T: %v)", expr, v, v)
	}
}

// formatOutput converts a value to its JSON string representation.
// Strings are returned without quotes for cleaner output.
func formatOutput(v any) (string, error) {
	if v == nil {
		return "null", nil
	}

	switch val := v.(type) {
	case string:
		// Return strings without quotes for cleaner output
		return val, nil
	case bool:
		return fmt.Sprintf("%v", val), nil
	case int:
		return fmt.Sprintf("%d", val), nil
	case int64:
		return fmt.Sprintf("%d", val), nil
	case float64:
		// Use %v for cleaner output (no trailing zeros for whole numbers)
		return fmt.Sprintf("%v", val), nil
	case *big.Int:
		return val.String(), nil
	default:
		// For complex types (objects, arrays), use JSON encoding
		b, err := json.MarshalIndent(v, "", "  ")
		if err != nil {
			return "", err
		}
		return string(b), nil
	}
}



#########################
### internal/langserver/langserver.go
// Package langserver implements an LSP server for yapi config files.
package langserver

import (
	"fmt"
	"strings"

	"github.com/tliron/commonlog"
	_ "github.com/tliron/commonlog/simple"
	"github.com/tliron/glsp"
	protocol "github.com/tliron/glsp/protocol_3_16"
	"github.com/tliron/glsp/server"
	"yapi.run/cli/internal/compiler"
	"yapi.run/cli/internal/constants"
	"yapi.run/cli/internal/utils"
	"yapi.run/cli/internal/validation"
	"yapi.run/cli/internal/vars"
)

const lsName = "yapi language server"

var (
	version = "0.0.1"
	handler protocol.Handler
	docs    = make(map[protocol.DocumentUri]*document)
)

type document struct {
	URI  protocol.DocumentUri
	Text string
}

// Run starts the yapi language server over stdio.
func Run() {
	commonlog.Configure(1, nil)

	handler = protocol.Handler{
		Initialize:             initialize,
		Initialized:            initialized,
		Shutdown:               shutdown,
		SetTrace:               setTrace,
		TextDocumentDidOpen:    textDocumentDidOpen,
		TextDocumentDidChange:  textDocumentDidChange,
		TextDocumentDidClose:   textDocumentDidClose,
		TextDocumentDidSave:    textDocumentDidSave,
		TextDocumentCompletion: textDocumentCompletion,
		TextDocumentHover:      textDocumentHover,
	}

	srv := server.NewServer(&handler, lsName, false)
	_ = srv.RunStdio()
}

func initialize(ctx *glsp.Context, params *protocol.InitializeParams) (any, error) {
	capabilities := handler.CreateServerCapabilities()

	syncKind := protocol.TextDocumentSyncKindFull
	capabilities.TextDocumentSync = protocol.TextDocumentSyncOptions{
		OpenClose: boolPtr(true),
		Change:    &syncKind,
		Save: &protocol.SaveOptions{
			IncludeText: boolPtr(true),
		},
	}

	capabilities.CompletionProvider = &protocol.CompletionOptions{
		TriggerCharacters: []string{":", " ", "\n"},
	}

	capabilities.HoverProvider = true

	return protocol.InitializeResult{
		Capabilities: capabilities,
		ServerInfo: &protocol.InitializeResultServerInfo{
			Name:    lsName,
			Version: &version,
		},
	}, nil
}

func initialized(ctx *glsp.Context, params *protocol.InitializedParams) error {
	return nil
}

func shutdown(ctx *glsp.Context) error {
	return nil
}

func setTrace(ctx *glsp.Context, params *protocol.SetTraceParams) error {
	return nil
}

func textDocumentDidOpen(ctx *glsp.Context, params *protocol.DidOpenTextDocumentParams) error {
	uri := params.TextDocument.URI
	text := params.TextDocument.Text

	docs[uri] = &document{
		URI:  uri,
		Text: text,
	}

	validateAndNotify(ctx, uri, text)
	return nil
}

func textDocumentDidChange(ctx *glsp.Context, params *protocol.DidChangeTextDocumentParams) error {
	uri := params.TextDocument.URI

	// With TextDocumentSyncKindFull, we get the full text in each change
	if len(params.ContentChanges) > 0 {
		text := params.ContentChanges[len(params.ContentChanges)-1].(protocol.TextDocumentContentChangeEventWhole).Text

		if doc, ok := docs[uri]; ok {
			doc.Text = text
		} else {
			docs[uri] = &document{
				URI:  uri,
				Text: text,
			}
		}

		validateAndNotify(ctx, uri, text)
	}

	return nil
}

func textDocumentDidClose(ctx *glsp.Context, params *protocol.DidCloseTextDocumentParams) error {
	delete(docs, params.TextDocument.URI)
	return nil
}

func textDocumentDidSave(ctx *glsp.Context, params *protocol.DidSaveTextDocumentParams) error {
	if params.Text != nil {
		uri := params.TextDocument.URI
		text := *params.Text

		if doc, ok := docs[uri]; ok {
			doc.Text = text
		}

		validateAndNotify(ctx, uri, text)
	}
	return nil
}

func validateAndNotify(ctx *glsp.Context, uri protocol.DocumentUri, text string) {
	analysis, err := validation.AnalyzeConfigString(text)
	if err != nil {
		// Catastrophic error - send one diagnostic and bail
		ctx.Notify(protocol.ServerTextDocumentPublishDiagnostics, protocol.PublishDiagnosticsParams{
			URI: uri,
			Diagnostics: []protocol.Diagnostic{{
				Range: protocol.Range{
					Start: protocol.Position{Line: 0, Character: 0},
					End:   protocol.Position{Line: 0, Character: 1},
				},
				Severity: ptr(protocol.DiagnosticSeverityError),
				Source:   ptr("yapi"),
				Message:  "internal validation error: " + err.Error(),
			}},
		})
		return
	}

	// Initialize to empty slice, not nil, so JSON serializes as [] not null
	diagnostics := []protocol.Diagnostic{}

	// Config-level warnings (missing yapi: v1 etc)
	for _, w := range analysis.Warnings {
		diagnostics = append(diagnostics, protocol.Diagnostic{
			Range: protocol.Range{
				Start: protocol.Position{Line: 0, Character: 0},
				End:   protocol.Position{Line: 0, Character: 100},
			},
			Severity: ptr(protocol.DiagnosticSeverityWarning),
			Source:   ptr("yapi"),
			Message:  w,
		})
	}

	// Analyzer diagnostics
	for _, d := range analysis.Diagnostics {
		line := protocol.UInteger(0)
		char := protocol.UInteger(0)
		if d.Line >= 0 {
			line = protocol.UInteger(d.Line)
		}
		if d.Col >= 0 {
			char = protocol.UInteger(d.Col)
		}

		diagnostics = append(diagnostics, protocol.Diagnostic{
			Range: protocol.Range{
				Start: protocol.Position{Line: line, Character: char},
				End:   protocol.Position{Line: line, Character: 100},
			},
			Severity: ptr(severityToProtocol(d.Severity)),
			Source:   ptr("yapi"),
			Message:  d.Message,
		})
	}

	// Compiler parity check - run the compiler with mock resolver for additional validation
	// Skip for chain configs (they require different handling)
	if analysis.Request != nil && len(analysis.Chain) == 0 && !analysis.HasErrors() {
		var resolver vars.Resolver = MockResolver
		compiled := compiler.Compile(analysis.Base, resolver)
		for _, err := range compiled.Errors {
			diagnostics = append(diagnostics, protocol.Diagnostic{
				Range: protocol.Range{
					Start: protocol.Position{Line: 0, Character: 0},
					End:   protocol.Position{Line: 0, Character: 100},
				},
				Severity: ptr(protocol.DiagnosticSeverityError),
				Source:   ptr("yapi-compiler"),
				Message:  err.Error(),
			})
		}
	}

	ctx.Notify(protocol.ServerTextDocumentPublishDiagnostics, protocol.PublishDiagnosticsParams{
		URI:         uri,
		Diagnostics: diagnostics,
	})
}

func ptr[T any](v T) *T {
	return &v
}

func severityToProtocol(s validation.Severity) protocol.DiagnosticSeverity {
	switch s {
	case validation.SeverityError:
		return protocol.DiagnosticSeverityError
	case validation.SeverityWarning:
		return protocol.DiagnosticSeverityWarning
	case validation.SeverityInfo:
		return protocol.DiagnosticSeverityInformation
	default:
		return protocol.DiagnosticSeverityInformation
	}
}

func boolPtr(b bool) *bool {
	return &b
}

// MockResolver provides placeholder values for variable interpolation in LSP validation.
// This allows the compiler to validate the config structure even without real env vars.
func MockResolver(key string) (string, error) {
	keyLower := strings.ToLower(key)
	if strings.Contains(keyLower, "port") {
		return "8080", nil
	}
	if strings.Contains(keyLower, "host") {
		return "localhost", nil
	}
	if strings.Contains(keyLower, "url") {
		return "http://localhost:8080", nil
	}
	// Return a placeholder for anything else - don't fail
	return "PLACEHOLDER", nil
}

// valDesc represents a value with its description for completions
type valDesc struct {
	val  string
	desc string
}

func toValueCompletion(v valDesc) protocol.CompletionItem {
	return protocol.CompletionItem{
		Label:         v.val,
		Kind:          ptr(protocol.CompletionItemKindValue),
		Detail:        ptr(v.desc),
		InsertText:    ptr(v.val),
		Documentation: v.desc,
	}
}

// Schema definitions for completions
var topLevelKeys = []struct {
	key  string
	desc string
}{
	{"url", "The target URL (required)"},
	{"path", "URL path to append"},
	{"method", "HTTP method or protocol (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, grpc, tcp)"},
	{"headers", "HTTP headers as key-value pairs"},
	{"content_type", "Content-Type header value"},
	{"body", "Request body as key-value pairs"},
	{"json", "Raw JSON string for request body"},
	{"query", "Query parameters as key-value pairs"},
	{"graphql", "GraphQL query or mutation (multiline string)"},
	{"variables", "GraphQL variables as key-value pairs"},
	{"service", "gRPC service name"},
	{"rpc", "gRPC method name"},
	{"proto", "Path to .proto file"},
	{"proto_path", "Import path for proto files"},
	{"data", "Raw data for TCP requests"},
	{"encoding", "Data encoding (text, hex, base64)"},
	{"jq_filter", "JQ filter to apply to response"},
	{"insecure", "Skip TLS verification (boolean)"},
	{"plaintext", "Use plaintext gRPC (boolean)"},
	{"read_timeout", "TCP read timeout in seconds"},
	{"close_after_send", "Close TCP connection after sending (boolean)"},
	{"delay", "Wait before executing this step (e.g. 5s, 500ms)"},
}

var methodValues = []valDesc{
	{constants.MethodGET, "HTTP GET request"},
	{constants.MethodPOST, "HTTP POST request"},
	{constants.MethodPUT, "HTTP PUT request"},
	{constants.MethodDELETE, "HTTP DELETE request"},
	{constants.MethodPATCH, "HTTP PATCH request"},
	{constants.MethodHEAD, "HTTP HEAD request"},
	{constants.MethodOPTIONS, "HTTP OPTIONS request"},
}

var encodingValues = []valDesc{
	{"text", "Plain text encoding"},
	{"hex", "Hexadecimal encoding"},
	{"base64", "Base64 encoding"},
}

var contentTypeValues = []valDesc{
	{"application/json", "JSON content type"},
}

func textDocumentCompletion(ctx *glsp.Context, params *protocol.CompletionParams) (any, error) {
	uri := params.TextDocument.URI
	doc, ok := docs[uri]
	if !ok {
		return nil, nil
	}

	line := params.Position.Line
	char := params.Position.Character

	lines := strings.Split(doc.Text, "\n")
	if int(line) >= len(lines) {
		return nil, nil
	}

	currentLine := lines[line]
	textBeforeCursor := ""
	if int(char) <= len(currentLine) {
		textBeforeCursor = currentLine[:char]
	}

	var items []protocol.CompletionItem

	// Check if we're completing a value (after a colon)
	if colonIdx := strings.Index(textBeforeCursor, ":"); colonIdx != -1 {
		key := strings.TrimSpace(textBeforeCursor[:colonIdx])

		switch key {
		case "method":
			items = utils.Map(methodValues, toValueCompletion)
		case "encoding":
			items = utils.Map(encodingValues, toValueCompletion)
		case "content_type":
			items = utils.Map(contentTypeValues, toValueCompletion)
		case "insecure", "plaintext", "close_after_send":
			items = append(items,
				protocol.CompletionItem{
					Label:      "true",
					Kind:       ptr(protocol.CompletionItemKindValue),
					InsertText: ptr("true"),
				},
				protocol.CompletionItem{
					Label:      "false",
					Kind:       ptr(protocol.CompletionItemKindValue),
					InsertText: ptr("false"),
				},
			)
		}
	} else {
		// Completing a key at the start of a line
		trimmed := strings.TrimSpace(textBeforeCursor)

		// Find which keys are already used
		usedKeys := make(map[string]bool)
		for _, l := range lines {
			if colonIdx := strings.Index(l, ":"); colonIdx != -1 {
				k := strings.TrimSpace(l[:colonIdx])
				usedKeys[k] = true
			}
		}

		for _, k := range topLevelKeys {
			if usedKeys[k.key] {
				continue
			}
			// Filter by what user has typed
			if trimmed != "" && !strings.HasPrefix(k.key, trimmed) {
				continue
			}
			items = append(items, protocol.CompletionItem{
				Label:         k.key,
				Kind:          ptr(protocol.CompletionItemKindField),
				Detail:        ptr(k.desc),
				InsertText:    ptr(k.key + ": "),
				Documentation: k.desc,
			})
		}
	}

	return items, nil
}

func textDocumentHover(ctx *glsp.Context, params *protocol.HoverParams) (*protocol.Hover, error) {
	uri := params.TextDocument.URI
	doc, ok := docs[uri]
	if !ok {
		return nil, nil
	}

	line := int(params.Position.Line)
	char := int(params.Position.Character)

	// Find all env var references in the document
	refs := validation.FindEnvVarRefs(doc.Text)

	// Check if cursor is within any env var reference
	for _, ref := range refs {
		if ref.Line == line && char >= ref.Col && char <= ref.EndIndex {
			var content string
			if ref.IsDefined {
				redacted := validation.RedactValue(ref.Value)
				content = fmt.Sprintf("**Environment Variable: `%s`**\n\nValue: `%s`", ref.Name, redacted)
			} else {
				content = fmt.Sprintf("**Environment Variable: `%s`**\n\n_Not defined_", ref.Name)
			}

			return &protocol.Hover{
				Contents: protocol.MarkupContent{
					Kind:  protocol.MarkupKindMarkdown,
					Value: content,
				},
				Range: &protocol.Range{
					Start: protocol.Position{Line: protocol.UInteger(line), Character: protocol.UInteger(ref.Col)},
					End:   protocol.Position{Line: protocol.UInteger(line), Character: protocol.UInteger(ref.EndIndex)},
				},
			}, nil
		}
	}

	return nil, nil
}



#########################
### internal/observability/client.go
package observability

// Provider defines the behavior for any observability backend
type Provider interface {
	Track(event string, props map[string]any)
	Close() error
}

// providers holds all registered observability backends
var providers []Provider

// Track sends an event to all registered providers
func Track(event string, props map[string]any) {
	for _, p := range providers {
		p.Track(event, props)
	}
}

// Close flushes all providers
func Close() {
	for _, p := range providers {
		_ = p.Close()
	}
}

// AddProvider registers a new observability provider
func AddProvider(p Provider) {
	providers = append(providers, p)
}



#########################
### internal/observability/file_logger.go
package observability

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"sync"
	"time"
)

// FileLoggerClient logs events to a file
type FileLoggerClient struct {
	file    *os.File
	version string
	commit  string
	mu      sync.Mutex
	events  []map[string]any
}

// NewFileLoggerClient creates a new file logger client
func NewFileLoggerClient(path, version, commit string) (*FileLoggerClient, error) {
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil { //nolint:gosec // user config directory
		return nil, err
	}
	file, err := os.OpenFile(path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644) //nolint:gosec // user-provided log path
	if err != nil {
		return nil, err
	}
	return &FileLoggerClient{
		file:    file,
		version: version,
		commit:  commit,
	}, nil
}

// Track records an event with properties to be written on Close.
func (f *FileLoggerClient) Track(event string, props map[string]any) {
	f.mu.Lock()
	defer f.mu.Unlock()

	entry := map[string]any{
		"event": event,
	}
	for k, v := range props {
		entry[k] = v
	}
	f.events = append(f.events, entry)
}

// Close merges all tracked events and writes them to the log file.
func (f *FileLoggerClient) Close() error {
	f.mu.Lock()
	defer f.mu.Unlock()

	if len(f.events) == 0 {
		return f.file.Close()
	}

	// Merge all events into a single entry
	merged := map[string]any{
		"timestamp": time.Now().UTC().Format(time.RFC3339),
		"os":        runtime.GOOS,
		"arch":      runtime.GOARCH,
		"version":   f.version,
		"commit":    f.commit,
	}

	// Merge props from all events (later events override earlier)
	for _, ev := range f.events {
		for k, v := range ev {
			if k != "event" {
				merged[k] = v
			}
		}
	}

	// Collect event names
	var events []string
	for _, ev := range f.events {
		if name, ok := ev["event"].(string); ok {
			events = append(events, name)
		}
	}
	merged["events"] = events

	jsonBytes, err := json.Marshal(merged)
	if err != nil {
		return f.file.Close()
	}

	_, _ = fmt.Fprintln(f.file, string(jsonBytes))
	return f.file.Close()
}



#########################
### internal/observability/observability.go
// Package observability provides local file logging.
package observability

import (
	"os"
	"path/filepath"
)

// LogDir is the yapi data directory
var LogDir = filepath.Join(os.Getenv("HOME"), ".yapi")

// HistoryFileName is the history file name
const HistoryFileName = "history.json"

// HistoryFilePath is the full path to the history file
var HistoryFilePath = filepath.Join(LogDir, HistoryFileName)

// Init initializes observability (file logging).
// Should be called once at startup with version info.
func Init(version, commit string) {
	if fileLogger, err := NewFileLoggerClient(HistoryFilePath, version, commit); err == nil {
		AddProvider(fileLogger)
	}
}



#########################
### internal/output/highlight.go
// Package output provides response formatting and syntax highlighting.
package output

import (
	"bytes"
	"encoding/json"
	"os"
	"strings"

	"codeberg.org/derat/htmlpretty"
	"github.com/alecthomas/chroma/v2"
	"github.com/alecthomas/chroma/v2/formatters"
	"github.com/alecthomas/chroma/v2/lexers"
	"github.com/alecthomas/chroma/v2/styles"
	"golang.org/x/net/html"
)

// Highlight applies syntax highlighting and pretty-printing to the given raw string based on content type.
// If noColor is true or stdout is not a TTY, it returns pretty-printed output without colors.
func Highlight(raw string, contentType string, noColor bool) string {
	lang := detectLanguage(raw, contentType)

	// Always pretty-print, regardless of color setting
	formatted := prettyPrint(raw, lang)

	if noColor {
		return formatted
	}

	if !isTerminal() {
		return formatted
	}

	return highlightWithChroma(formatted, lang)
}

// isTerminal checks if stdout is a TTY (terminal).
func isTerminal() bool {
	fi, err := os.Stdout.Stat()
	if err != nil {
		return false
	}
	return (fi.Mode() & os.ModeCharDevice) != 0
}

// detectLanguage determines the syntax highlighting language based on content type and content.
func detectLanguage(raw string, contentType string) string {
	// Check content type header
	if strings.Contains(contentType, "application/json") {
		return "json"
	}
	if strings.Contains(contentType, "text/html") {
		return "html"
	}

	// Fallback to content sniffing
	trimmed := strings.TrimSpace(raw)
	if strings.HasPrefix(trimmed, "{") || strings.HasPrefix(trimmed, "[") {
		return "json"
	}
	if strings.HasPrefix(strings.ToLower(trimmed), "<!doctype html") || strings.HasPrefix(strings.ToLower(trimmed), "<html") {
		return "html"
	}

	// Default to JSON
	return "json"
}

// highlightWithChroma applies Chroma syntax highlighting to the raw string.
func highlightWithChroma(raw string, lang string) string {
	lexer := lexers.Get(lang)
	if lexer == nil {
		return raw
	}
	lexer = chroma.Coalesce(lexer)

	style := styles.Get("dracula")
	if style == nil {
		style = styles.Fallback
	}

	formatter := formatters.TTY8
	if formatter == nil {
		return raw
	}

	iterator, err := lexer.Tokenise(nil, raw)
	if err != nil {
		return raw
	}

	var buf bytes.Buffer
	err = formatter.Format(&buf, style, iterator)
	if err != nil {
		return raw
	}

	return buf.String()
}

// prettyPrint formats JSON and HTML content for better readability.
func prettyPrint(raw string, lang string) string {
	switch lang {
	case "json":
		return prettyPrintJSON(raw)
	case "html":
		return prettyPrintHTML(raw)
	default:
		return raw
	}
}

// prettyPrintJSON formats JSON with indentation.
// Handles multiple JSON objects in a stream (common jq output).
func prettyPrintJSON(raw string) string {
	dec := json.NewDecoder(strings.NewReader(raw))
	var results []string

	for {
		var v any
		if err := dec.Decode(&v); err != nil {
			break
		}

		pretty, _ := json.MarshalIndent(v, "", "  ")
		results = append(results, string(pretty))
	}

	if len(results) > 0 {
		return strings.Join(results, "\n")
	}

	// Fall back to raw if nothing parsed
	return raw
}

// prettyPrintHTML formats HTML using htmlpretty.
func prettyPrintHTML(raw string) string {
	node, err := html.Parse(strings.NewReader(raw))
	if err != nil {
		return raw
	}

	var buf bytes.Buffer
	if err := htmlpretty.Print(&buf, node, "  ", 120); err != nil {
		return raw
	}

	return buf.String()
}



#########################
### internal/runner/context.go
package runner

import (
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"strings"

	"yapi.run/cli/internal/vars"
)

// StepResult holds the output of a single chain step.
type StepResult struct {
	BodyRaw    string
	BodyJSON   map[string]any
	Headers    map[string]string
	StatusCode int
}

// ChainContext tracks results from chain steps for variable interpolation.
type ChainContext struct {
	Results map[string]StepResult
}

// NewChainContext creates a new chain context for tracking step results.
func NewChainContext() *ChainContext {
	return &ChainContext{
		Results: make(map[string]StepResult),
	}
}

// AddResult stores a step result for later variable interpolation.
func (c *ChainContext) AddResult(name string, result *Result) {
	sr := StepResult{
		BodyRaw:    result.Body,
		Headers:    make(map[string]string),
		StatusCode: result.StatusCode,
	}

	// Copy all response headers
	for k, v := range result.Headers {
		sr.Headers[k] = v
	}

	var data map[string]any
	// Try parsing JSON; ignore errors (BodyJSON stays nil)
	if err := json.Unmarshal([]byte(result.Body), &data); err == nil {
		sr.BodyJSON = data
	}
	c.Results[name] = sr
}

// ExpandVariables replaces $var and ${var} with values from Env or Chain Context.
func (c *ChainContext) ExpandVariables(input string) (string, error) {
	var capturedErr error

	result := vars.Expansion.ReplaceAllStringFunc(input, func(match string) string {
		var key string
		if strings.HasPrefix(match, "${") {
			// Strict: ${key}
			key = match[2 : len(match)-1]
		} else {
			// Lazy: $key
			key = match[1:]
		}

		// 1. Check OS Environment
		if val, ok := os.LookupEnv(key); ok {
			return val
		}

		// 2. Check Chain Context (must contain dot)
		if strings.Contains(key, ".") {
			val, err := c.resolveChainVar(key)
			if err != nil {
				if capturedErr == nil {
					capturedErr = err
				}
				return match // Return original on error
			}
			return val
		}

		// Not found: return as is (or could error if strict mode)
		return match
	})

	if capturedErr != nil {
		return "", capturedErr
	}
	return result, nil
}

func (c *ChainContext) resolveChainVar(key string) (string, error) {
	parts := strings.Split(key, ".")
	if len(parts) < 2 {
		return "", fmt.Errorf("invalid reference format '%s'", key)
	}

	stepName := parts[0]
	path := parts[1:]

	res, ok := c.Results[stepName]
	if !ok {
		return "", fmt.Errorf("step '%s' not found (or hasn't run yet)", stepName)
	}

	// 1. Reserved Keywords
	if len(path) == 1 {
		switch path[0] {
		case "body":
			return res.BodyRaw, nil
		case "status":
			return strconv.Itoa(res.StatusCode), nil
		}
	}

	// 2. Headers - check HTTP response headers first, then fall back to JSON body
	if path[0] == "headers" {
		if len(path) < 2 {
			return "", fmt.Errorf("header reference requires key (e.g. headers.Content-Type)")
		}
		target := path[1]
		// Try exact match in HTTP response headers
		if v, ok := res.Headers[target]; ok {
			return v, nil
		}
		// Try case-insensitive in HTTP response headers
		for k, v := range res.Headers {
			if strings.EqualFold(k, target) {
				return v, nil
			}
		}
		// Fall back to JSON path lookup (for APIs like httpbin that echo headers in body)
		if res.BodyJSON != nil {
			val, err := jsonPathLookup(res.BodyJSON, path)
			if err == nil {
				return val, nil
			}
		}
		return "", fmt.Errorf("header '%s' not found in step '%s'", target, stepName)
	}

	// 3. JSON Path
	if res.BodyJSON == nil {
		return "", fmt.Errorf("step '%s' did not return JSON, cannot access property '%s'", stepName, key)
	}

	return jsonPathLookup(res.BodyJSON, path)
}

func jsonPathLookup(data any, path []string) (string, error) {
	current := data
	for i, key := range path {
		switch v := current.(type) {
		case map[string]any:
			val, ok := v[key]
			if !ok {
				return "", fmt.Errorf("key '%s' not found at path '%s'", key, strings.Join(path[:i+1], "."))
			}
			current = val
		default:
			return "", fmt.Errorf("path segment '%s' is not an object", strings.Join(path[:i], "."))
		}
	}
	// Convert final value to string
	switch v := current.(type) {
	case string:
		return v, nil
	case float64:
		// Check if it's actually an integer
		if v == float64(int(v)) {
			return strconv.Itoa(int(v)), nil
		}
		return fmt.Sprintf("%v", v), nil
	case bool:
		return strconv.FormatBool(v), nil
	case nil:
		return "null", nil
	default:
		// For complex types, marshal to JSON
		jsonBytes, err := json.Marshal(v)
		if err != nil {
			return fmt.Sprintf("%v", v), nil
		}
		return string(jsonBytes), nil
	}
}

// ResolveVariableRaw checks if input is a pure variable reference (e.g. "$step.field" or "${step.field}")
// and returns the raw typed value. Returns (value, true) if resolved, (nil, false) otherwise.
func (c *ChainContext) ResolveVariableRaw(input string) (any, bool) {
	trimmed := strings.TrimSpace(input)

	// Check if it's a pure reference (entire string is just the variable)
	match := vars.Expansion.FindStringSubmatch(trimmed)
	if match == nil {
		return nil, false
	}

	// Verify the entire string is just the variable reference
	if match[0] != trimmed {
		return nil, false
	}

	var key string
	if match[1] != "" {
		// Strict format: ${key}
		key = match[1]
	} else {
		// Lazy format: $key
		key = match[2]
	}

	// Must contain a dot to be a chain reference
	if !strings.Contains(key, ".") {
		return nil, false
	}

	parts := strings.Split(key, ".")
	if len(parts) < 2 {
		return nil, false
	}

	stepName := parts[0]
	path := parts[1:]

	res, ok := c.Results[stepName]
	if !ok {
		return nil, false
	}

	// JSON Path lookup returning raw value
	if res.BodyJSON == nil {
		return nil, false
	}

	val, err := jsonPathLookupRaw(res.BodyJSON, path)
	if err != nil {
		return nil, false
	}

	return val, true
}

// jsonPathLookupRaw returns the raw typed value at the given path
func jsonPathLookupRaw(data any, path []string) (any, error) {
	current := data
	for i, key := range path {
		switch v := current.(type) {
		case map[string]any:
			val, ok := v[key]
			if !ok {
				return nil, fmt.Errorf("key '%s' not found at path '%s'", key, strings.Join(path[:i+1], "."))
			}
			current = val
		default:
			return nil, fmt.Errorf("path segment '%s' is not an object", strings.Join(path[:i], "."))
		}
	}
	return current, nil
}



#########################
### internal/runner/runner.go
// Package runner executes API requests and chains.
package runner

import (
	"context"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"yapi.run/cli/internal/config"
	"yapi.run/cli/internal/domain"
	"yapi.run/cli/internal/executor"
	"yapi.run/cli/internal/filter"
)

// Result holds the output of a yapi execution
type Result struct {
	Body        string
	ContentType string
	StatusCode  int
	Warnings    []string
	RequestURL  string        // The full constructed URL (HTTP/GraphQL only)
	Duration    time.Duration // Time taken for the request
	BodyLines   int
	BodyChars   int
	BodyBytes   int
	Headers     map[string]string // Response headers
}

// Options for execution
type Options struct {
	URLOverride string
	NoColor     bool
}

// Run executes a yapi request and returns the result.
func Run(ctx context.Context, exec executor.TransportFunc, req *domain.Request, warnings []string, opts Options) (*Result, error) {
	// Apply URL override
	if opts.URLOverride != "" {
		req.URL = opts.URLOverride
	}

	// Execute the request
	resp, err := exec(ctx, req)
	if err != nil {
		return nil, err
	}
	defer func() { _ = resp.Body.Close() }()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}
	body := string(bodyBytes)

	// Apply JQ filter if specified
	if jqFilter, ok := req.Metadata["jq_filter"]; ok && jqFilter != "" {
		body, err = filter.ApplyJQ(body, jqFilter)
		if err != nil {
			return nil, fmt.Errorf("jq filter failed: %w", err)
		}
		resp.Headers["Content-Type"] = "application/json"
	}

	bodyLines := strings.Count(body, "\n") + 1
	bodyChars := len(body)
	bodyBytesLen := len(bodyBytes)

	return &Result{
		Body:        body,
		ContentType: resp.Headers["Content-Type"],
		StatusCode:  resp.StatusCode,
		Warnings:    warnings,
		RequestURL:  req.URL,
		Duration:    resp.Duration,
		BodyLines:   bodyLines,
		BodyChars:   bodyChars,
		BodyBytes:   bodyBytesLen,
		Headers:     resp.Headers,
	}, nil
}

// ChainResult holds the output of a chain execution
type ChainResult struct {
	Results            []*Result            // Results from each step
	StepNames          []string             // Names of each step
	ExpectationResults []*ExpectationResult // Expectation results from each step
}

// ExecutorFactory is an interface for creating transport functions
type ExecutorFactory interface {
	Create(transport string) (executor.TransportFunc, error)
}

// RunChain executes a sequence of steps, merging each step with the base config
func RunChain(ctx context.Context, factory ExecutorFactory, base *config.ConfigV1, steps []config.ChainStep, opts Options) (*ChainResult, error) {
	chainCtx := NewChainContext()
	chainResult := &ChainResult{
		Results:            make([]*Result, 0, len(steps)),
		StepNames:          make([]string, 0, len(steps)),
		ExpectationResults: make([]*ExpectationResult, 0, len(steps)),
	}

	for i, step := range steps {
		fmt.Fprintf(os.Stderr, "Running step %d: %s...\n", i+1, step.Name)

		// 1. Merge step with base config to get full config
		merged := base.Merge(step)

		// 2. Interpolate variables in the merged config
		interpolatedConfig, err := interpolateConfig(chainCtx, &merged)
		if err != nil {
			return nil, fmt.Errorf("step '%s': %w", step.Name, err)
		}

		// 3. Handle Delay (wait before executing step)
		if interpolatedConfig.Delay != "" {
			d, err := time.ParseDuration(interpolatedConfig.Delay)
			if err != nil {
				return nil, fmt.Errorf("step '%s' invalid delay '%s': %w", step.Name, interpolatedConfig.Delay, err)
			}
			if d > 0 {
				fmt.Fprintf(os.Stderr, "[INFO] Delaying for %s...\n", d)
				select {
				case <-time.After(d):
				case <-ctx.Done():
					return nil, ctx.Err()
				}
			}
		}

		// 4. Convert to domain request (handles ALL transports: HTTP, TCP, gRPC, GraphQL)
		req, err := interpolatedConfig.ToDomain()
		if err != nil {
			return nil, fmt.Errorf("step '%s': %w", step.Name, err)
		}

		// 5. Create executor for this step's transport
		exec, err := factory.Create(req.Metadata["transport"])
		if err != nil {
			return nil, fmt.Errorf("step '%s': %w", step.Name, err)
		}

		// 6. Execute
		result, err := Run(ctx, exec, req, []string{}, opts)
		if err != nil {
			return nil, fmt.Errorf("step '%s' failed: %w", step.Name, err)
		}

		// 7. Assert Expectations
		expectRes := CheckExpectations(step.Expect, result)

		// 8. Store Result (including expectation result even if failed)
		chainCtx.AddResult(step.Name, result)
		chainResult.Results = append(chainResult.Results, result)
		chainResult.StepNames = append(chainResult.StepNames, step.Name)
		chainResult.ExpectationResults = append(chainResult.ExpectationResults, expectRes)

		if expectRes.Error != nil {
			return chainResult, fmt.Errorf("step '%s' assertion failed: %w", step.Name, expectRes.Error)
		}
	}

	return chainResult, nil
}

// interpolateConfig expands chain variables in a config
func interpolateConfig(chainCtx *ChainContext, cfg *config.ConfigV1) (*config.ConfigV1, error) {
	result := *cfg // Copy

	// Interpolate URL
	if result.URL != "" {
		expanded, err := chainCtx.ExpandVariables(result.URL)
		if err != nil {
			return nil, fmt.Errorf("url: %w", err)
		}
		result.URL = expanded
	}

	// Interpolate Path
	if result.Path != "" {
		expanded, err := chainCtx.ExpandVariables(result.Path)
		if err != nil {
			return nil, fmt.Errorf("path: %w", err)
		}
		result.Path = expanded
	}

	// Interpolate Headers
	if result.Headers != nil {
		newHeaders := make(map[string]string)
		for k, v := range result.Headers {
			expanded, err := chainCtx.ExpandVariables(v)
			if err != nil {
				return nil, fmt.Errorf("header '%s': %w", k, err)
			}
			newHeaders[k] = expanded
		}
		result.Headers = newHeaders
	}

	// Interpolate Query params
	if result.Query != nil {
		newQuery := make(map[string]string)
		for k, v := range result.Query {
			expanded, err := chainCtx.ExpandVariables(v)
			if err != nil {
				return nil, fmt.Errorf("query '%s': %w", k, err)
			}
			newQuery[k] = expanded
		}
		result.Query = newQuery
	}

	// Interpolate JSON
	if result.JSON != "" {
		expanded, err := chainCtx.ExpandVariables(result.JSON)
		if err != nil {
			return nil, fmt.Errorf("json: %w", err)
		}
		result.JSON = expanded
	}

	// Interpolate Data (TCP)
	if result.Data != "" {
		expanded, err := chainCtx.ExpandVariables(result.Data)
		if err != nil {
			return nil, fmt.Errorf("data: %w", err)
		}
		result.Data = expanded
	}

	// Interpolate Body
	if result.Body != nil {
		newBody, err := interpolateBody(chainCtx, result.Body)
		if err != nil {
			return nil, fmt.Errorf("body: %w", err)
		}
		result.Body = newBody
	}

	// Interpolate Variables (GraphQL)
	if result.Variables != nil {
		newVars, err := interpolateBody(chainCtx, result.Variables)
		if err != nil {
			return nil, fmt.Errorf("variables: %w", err)
		}
		result.Variables = newVars
	}

	// Interpolate Delay
	if result.Delay != "" {
		expanded, err := chainCtx.ExpandVariables(result.Delay)
		if err != nil {
			return nil, fmt.Errorf("delay: %w", err)
		}
		result.Delay = expanded
	}

	return &result, nil
}

// interpolateBody recursively interpolates variables in body map
// It preserves types for pure variable references (e.g. $step.field returns int/bool, not string)
func interpolateBody(chainCtx *ChainContext, body map[string]any) (map[string]any, error) {
	if body == nil {
		return nil, nil
	}

	result := make(map[string]any)
	for k, v := range body {
		interpolated, err := interpolateValue(chainCtx, v)
		if err != nil {
			return nil, err
		}
		result[k] = interpolated
	}
	return result, nil
}

// interpolateValue recursively interpolates variables in any value
func interpolateValue(chainCtx *ChainContext, v any) (any, error) {
	switch val := v.(type) {
	case string:
		// First, try to resolve as a pure variable reference (preserves type)
		if rawVal, ok := chainCtx.ResolveVariableRaw(val); ok {
			return rawVal, nil
		}
		// Fall back to string interpolation
		return chainCtx.ExpandVariables(val)
	case map[string]any:
		return interpolateBody(chainCtx, val)
	case []any:
		result := make([]any, len(val))
		for i, elem := range val {
			interpolated, err := interpolateValue(chainCtx, elem)
			if err != nil {
				return nil, err
			}
			result[i] = interpolated
		}
		return result, nil
	default:
		return v, nil
	}
}

// AssertionResult holds the result of a single assertion
type AssertionResult struct {
	Expression string
	Passed     bool
	Error      error
}

// ExpectationResult contains the results of running expectations
type ExpectationResult struct {
	StatusPassed     bool
	StatusChecked    bool
	AssertionsPassed int
	AssertionsTotal  int
	AssertionResults []AssertionResult
	Error            error
}

// AllPassed returns true if all expectations passed
func (e *ExpectationResult) AllPassed() bool {
	return e.Error == nil
}

// CheckExpectations validates the response against expected values
func CheckExpectations(expect config.Expectation, result *Result) *ExpectationResult {
	res := &ExpectationResult{
		AssertionsTotal:  len(expect.Assert),
		AssertionResults: make([]AssertionResult, 0, len(expect.Assert)),
	}

	// Status Check
	if expect.Status != nil {
		res.StatusChecked = true
		matched := false
		switch v := expect.Status.(type) {
		case int:
			if result.StatusCode == v {
				matched = true
			}
		case float64: // YAML often parses numbers as float64
			if result.StatusCode == int(v) {
				matched = true
			}
		case []any: // YAML often parses arrays as []any
			for _, code := range v {
				switch c := code.(type) {
				case int:
					if c == result.StatusCode {
						matched = true
					}
				case float64:
					if int(c) == result.StatusCode {
						matched = true
					}
				}
			}
		}
		res.StatusPassed = matched
		if !matched {
			res.Error = fmt.Errorf("expected status %v, got %d", expect.Status, result.StatusCode)
			return res
		}
	}

	// JQ Assertions
	for _, assertion := range expect.Assert {
		passed, err := filter.EvalJQBool(result.Body, assertion)
		ar := AssertionResult{
			Expression: assertion,
			Passed:     passed && err == nil,
			Error:      err,
		}
		res.AssertionResults = append(res.AssertionResults, ar)

		if err != nil {
			res.Error = fmt.Errorf("assertion failed: %w", err)
			return res
		}
		if !passed {
			res.Error = fmt.Errorf("assertion failed: %s", assertion)
			return res
		}
		res.AssertionsPassed++
	}

	return res
}



#########################
### internal/share/encoding.go
// Package share provides URL encoding for sharing configs.
package share

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"math/big"
)

var characterSet = []byte("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~")
var base = big.NewInt(int64(len(characterSet)))

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



#########################
### internal/tui/selector/selector.go
// Package selector provides a TUI file picker component.
package selector

import (
	"os"

	"github.com/charmbracelet/bubbles/textinput"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/sahilm/fuzzy"
	"yapi.run/cli/internal/tui/theme"
)

// Model is the bubbletea model for the file selector.
type Model struct {
	files           []string
	filteredFiles   []string
	cursor          int
	selectedSet     map[string]struct{} // multi-select
	viewport        viewport.Model
	textInput       textinput.Model
	multi           bool
	isVertical      bool
	maxVisibleFiles int
}

// New creates a new file selector model.
func New(files []string, multi bool) Model {
	ti := textinput.New()
	ti.Placeholder = "Type to filter..."
	ti.Focus()
	ti.PromptStyle = lipgloss.NewStyle().Foreground(theme.Accent)
	ti.TextStyle = lipgloss.NewStyle().Foreground(theme.Fg)
	ti.PlaceholderStyle = lipgloss.NewStyle().Foreground(theme.FgMuted)
	ti.Cursor.Style = lipgloss.NewStyle().Foreground(theme.Accent)

	vp := viewport.New(80, 20)
	vp.Style = lipgloss.NewStyle().
		Padding(0, 1).
		Foreground(theme.Fg).
		Background(theme.BgElevated)

	m := Model{
		files:           files,
		filteredFiles:   files,
		selectedSet:     make(map[string]struct{}),
		viewport:        vp,
		textInput:       ti,
		multi:           multi,
		maxVisibleFiles: 10,
	}
	m.loadFileContent()
	return m
}

func (m *Model) loadFileContent() {
	if m.cursor >= 0 && m.cursor < len(m.filteredFiles) {
		content, err := os.ReadFile(m.filteredFiles[m.cursor])
		if err != nil {
			m.viewport.SetContent("Error reading file")
			return
		}
		m.viewport.SetContent(string(content))
		return
	}
	m.viewport.SetContent("")
}

// Init implements tea.Model.
func (m Model) Init() tea.Cmd {
	return textinput.Blink
}

// Update implements tea.Model.
func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd

	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		const minWidthForHorizontalLayout = 100
		const minHeightForHorizontalLayout = 19
		const leftPanelWidth = 50
		const leftPanelPadding = 2

		// Chrome heights: theme.App border(2) + padding(2) + header(1) + margin(1) + footer(2) + viewportBorder(2) + viewportPadding(2)
		const chromeHeight = 12

		if msg.Width < minWidthForHorizontalLayout || msg.Height < minHeightForHorizontalLayout {
			m.isVertical = true
			availableWidth := msg.Width - theme.App.GetHorizontalFrameSize()
			m.textInput.Width = availableWidth
			m.viewport.Width = availableWidth - theme.ViewportContent.GetHorizontalFrameSize()
			// In vertical mode, split remaining height between file list and preview
			availableForContent := msg.Height - chromeHeight
			// Give file list ~1/3, preview ~2/3, with minimums
			m.maxVisibleFiles = max(3, availableForContent/3)
			m.viewport.Height = max(5, availableForContent-m.maxVisibleFiles-2) // -2 for preview title + margin
		} else {
			m.isVertical = false
			m.maxVisibleFiles = 10
			m.textInput.Width = leftPanelWidth
			m.viewport.Width = msg.Width - theme.App.GetHorizontalFrameSize() - leftPanelWidth - leftPanelPadding - theme.ViewportContent.GetHorizontalFrameSize()
			m.viewport.Height = msg.Height - chromeHeight
		}
		return m, nil

	case tea.KeyMsg:
		switch msg.String() {
		case "ctrl+c", "esc":
			return m, tea.Quit

		case "up", "ctrl+k":
			if m.cursor > 0 {
				m.cursor--
				m.loadFileContent()
			}
			return m, nil

		case "down", "ctrl+j":
			if m.cursor < len(m.filteredFiles)-1 {
				m.cursor++
				m.loadFileContent()
			}
			return m, nil

		case "pgup":
			m.viewport.LineUp(5)
			return m, nil

		case "pgdown":
			m.viewport.LineDown(5)
			return m, nil

		case " ":
			// toggle selection
			if m.multi && len(m.filteredFiles) > 0 {
				p := m.filteredFiles[m.cursor]
				if _, ok := m.selectedSet[p]; ok {
					delete(m.selectedSet, p)
				} else {
					m.selectedSet[p] = struct{}{}
				}
			}
			return m, nil

		case "enter":
			// In single-select mode, ensure current cursor is selected
			if !m.multi && len(m.filteredFiles) > 0 && m.cursor < len(m.filteredFiles) {
				m.selectedSet = map[string]struct{}{
					m.filteredFiles[m.cursor]: {},
				}
			}
			return m, tea.Quit
		}
	}

	m.textInput, cmd = m.textInput.Update(msg)
	m.filterFiles()
	m.viewport, _ = m.viewport.Update(msg)
	return m, cmd
}

func (m *Model) filterFiles() {
	query := m.textInput.Value()
	if query == "" {
		m.filteredFiles = m.files
	} else {
		matches := fuzzy.Find(query, m.files)
		m.filteredFiles = make([]string, len(matches))
		for i, match := range matches {
			m.filteredFiles[i] = match.Str
		}
	}

	if m.cursor >= len(m.filteredFiles) {
		if len(m.filteredFiles) > 0 {
			m.cursor = len(m.filteredFiles) - 1
		} else {
			m.cursor = 0
		}
	}
	m.loadFileContent()
}

// visibleWindow calculates the start and end indices for a scrolling window.
func visibleWindow(total, cursor, max int) (start, end int) {
	if max <= 0 || total <= max {
		return 0, total
	}
	start = cursor - max/2
	if start < 0 {
		start = 0
	}
	end = start + max
	if end > total {
		end = total
		start = end - max
		if start < 0 {
			start = 0
		}
	}
	return
}

// View implements tea.Model.
func (m Model) View() string {
	fileList := ""
	maxVisible := m.maxVisibleFiles
	if maxVisible < 1 {
		maxVisible = 10
	}

	start, end := visibleWindow(len(m.filteredFiles), m.cursor, maxVisible)

	for i := start; i < end; i++ {
		file := m.filteredFiles[i]
		prefix := "  "
		if _, ok := m.selectedSet[file]; ok {
			prefix = lipgloss.NewStyle().Foreground(theme.Accent).Render("* ")
		}

		style := theme.Item
		if m.cursor == i {
			style = theme.SelectedItem
		}

		renderedLine := style.Render("> " + prefix + file)
		if m.cursor != i {
			renderedLine = style.Render("  " + prefix + file)
		}
		fileList += renderedLine + "\n"
	}
	// --- Viewport ---
	viewportContent := theme.ViewportContent.Render(m.viewport.View())

	// --- Left Panel (input + file list) ---
	leftPanel := lipgloss.JoinVertical(
		lipgloss.Left,
		m.textInput.View(),
		fileList,
	)

	// --- Assemble Layout ---
	var mainContent string
	if m.isVertical {
		// In vertical mode, skip Preview title to save space
		mainContent = lipgloss.JoinVertical(
			lipgloss.Left,
			leftPanel,
			viewportContent,
		)
	} else {
		const leftPanelWidth = 50
		const leftPanelPadding = 2
		viewportTitle := theme.TitleAccent.Render("Preview")
		viewportFull := lipgloss.JoinVertical(lipgloss.Left, viewportTitle, viewportContent)
		mainContent = lipgloss.JoinHorizontal(
			lipgloss.Top,
			lipgloss.NewStyle().Width(leftPanelWidth).PaddingRight(leftPanelPadding).Render(leftPanel),
			lipgloss.NewStyle().Render(viewportFull),
		)
	}

	// --- Header ---
	header := theme.TitleAccent.Render("yapi")

	// --- Final Layout ---
	var content string
	if m.isVertical {
		// Compact layout: small margin after header, no footer
		content = lipgloss.JoinVertical(
			lipgloss.Left,
			header,
			"",
			mainContent,
		)
	} else {
		content = lipgloss.JoinVertical(
			lipgloss.Left,
			header,
			lipgloss.NewStyle().MarginTop(1).Render(mainContent),
			theme.Footer.Render("↑/↓ move | type to filter | space select | enter accept | esc quit"),
		)
	}
	return theme.App.Render(content)
}

// SelectedList returns the list of selected file paths.
func (m Model) SelectedList() []string {
	out := make([]string, 0, len(m.selectedSet))
	for f := range m.selectedSet {
		out = append(out, f)
	}
	return out
}



#########################
### internal/tui/theme/theme.go
// Package theme defines colors and styles for the TUI.
package theme

import "github.com/charmbracelet/lipgloss"

// Shared Color Palette (extracted from webapp/tailwind.config.js)
var (
	Bg         = lipgloss.Color("#1a1b26")
	BgElevated = lipgloss.Color("#2a2d3b")
	Fg         = lipgloss.Color("#a9b1d6")
	FgMuted    = lipgloss.Color("#565f89")
	Accent     = lipgloss.Color("#ff9e64") // Orange
	Primary    = lipgloss.Color("#7D56F4") // Purple
	Border     = lipgloss.Color("#414868")
	Green      = lipgloss.Color("#69DB7C")
	Red        = lipgloss.Color("#FF6B6B")
	Yellow     = lipgloss.Color("#FFE066")
)

// Shared Styles
var (
	App = lipgloss.NewStyle().
		Padding(1, 2).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(Border)

	Title = lipgloss.NewStyle().
		Bold(true).
		Foreground(lipgloss.Color("#FAFAFA")).
		Background(Primary).
		Padding(0, 1)

	TitleAccent = lipgloss.NewStyle().
			Foreground(Bg).
			Background(Accent).
			Padding(0, 1).
			Bold(true)

	Item = lipgloss.NewStyle().
		PaddingLeft(2)

	SelectedItem = lipgloss.NewStyle().
			PaddingLeft(2).
			Foreground(Accent).
			Bold(true)

	Footer = lipgloss.NewStyle().
		Foreground(FgMuted).
		Padding(0, 1).
		MarginTop(1)

	ViewportContent = lipgloss.NewStyle().
			Padding(1).
			Border(lipgloss.RoundedBorder()).
			BorderForeground(Border)

	Error   = lipgloss.NewStyle().Foreground(Red)
	Success = lipgloss.NewStyle().Foreground(Green)
	Warn    = lipgloss.NewStyle().Foreground(Yellow)
	Info    = lipgloss.NewStyle().Foreground(FgMuted)

	BorderedBox = lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(Primary)

	Help = lipgloss.NewStyle().
		Foreground(FgMuted)
)



#########################
### internal/tui/tui.go
// Package tui provides terminal UI components for yapi.
package tui

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"runtime"
	"sort"
	"strings"

	"yapi.run/cli/internal/tui/selector"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/go-git/go-git/v5"
	"github.com/mattn/go-isatty"
)

// getTTY returns input and output file handles for interactive TUI.
// On Unix, it tries /dev/tty first to work when stdout is piped.
// On Windows, it uses stdin/stdout directly.
// Returns nil, nil if no TTY is available.
func getTTY() (in, out *os.File, cleanup func()) {
	cleanup = func() {} // no-op by default

	// On Unix, try /dev/tty for piped scenarios
	if runtime.GOOS != "windows" {
		tty, err := os.OpenFile("/dev/tty", os.O_RDWR, 0)
		if err == nil {
			return tty, tty, func() { _ = tty.Close() }
		}
	}

	// Fall back to stdin/stdout if they're terminals
	if isatty.IsTerminal(os.Stdin.Fd()) && isatty.IsTerminal(os.Stdout.Fd()) {
		return os.Stdin, os.Stdout, cleanup
	}

	// Also check for Cygwin/MSYS terminals on Windows
	if isatty.IsCygwinTerminal(os.Stdin.Fd()) && isatty.IsCygwinTerminal(os.Stdout.Fd()) {
		return os.Stdin, os.Stdout, cleanup
	}

	return nil, nil, cleanup
}

// yapiFilePattern matches *.yapi.yaml or *.yapi.yml in subdirectories only
var yapiFilePattern = regexp.MustCompile(`^.+/.+\.yapi\.ya?ml$`)

func findFiles() ([]string, error) {
	cwd, err := os.Getwd()
	if err != nil {
		return nil, fmt.Errorf("failed to get current working directory: %w", err)
	}

	// Open the git repository (searches up for .git)
	repo, err := git.PlainOpenWithOptions(cwd, &git.PlainOpenOptions{
		DetectDotGit: true,
	})
	if err != nil {
		return nil, fmt.Errorf("not in a git repository: %w", err)
	}

	// Get worktree to find repo root
	wt, err := repo.Worktree()
	if err != nil {
		return nil, fmt.Errorf("failed to get worktree: %w", err)
	}
	repoRoot := wt.Filesystem.Root()

	// Read the git index (staged files = tracked files)
	idx, err := repo.Storer.Index()
	if err != nil {
		return nil, fmt.Errorf("failed to read git index: %w", err)
	}

	// Calculate relative path from repo root to cwd
	relCwd, err := filepath.Rel(repoRoot, cwd)
	if err != nil {
		return nil, fmt.Errorf("failed to calculate relative path: %w", err)
	}
	if relCwd == "." {
		relCwd = ""
	}

	var configFiles []string
	for _, entry := range idx.Entries {
		path := entry.Name

		// Skip if not under current directory
		if relCwd != "" && !strings.HasPrefix(path, relCwd+"/") {
			continue
		}

		// Get path relative to cwd
		var relPath string
		if relCwd != "" {
			relPath = strings.TrimPrefix(path, relCwd+"/")
		} else {
			relPath = path
		}

		// Must be in a subdirectory and match .yapi.y[a]ml
		if yapiFilePattern.MatchString(relPath) {
			configFiles = append(configFiles, relPath)
		}
	}

	if len(configFiles) == 0 {
		return nil, fmt.Errorf("no .yapi.yaml/.yapi.yml files found in subdirectories")
	}

	sort.Strings(configFiles)
	return configFiles, nil
}

// FindConfigFileSingle prompts the user to select a single config file.
func FindConfigFileSingle() (string, error) {
	files, err := findFiles()
	if err != nil {
		return "", err
	}
	if len(files) == 0 {
		return "", fmt.Errorf("no .yapi.yml files found")
	}

	in, out, cleanup := getTTY()
	defer cleanup()

	if in == nil || out == nil {
		// No TTY at all (CI, cron, etc) -> non-interactive fallback
		return files[0], nil
	}

	// Render TUI to the chosen terminal, not to stdout.
	lipgloss.SetDefaultRenderer(lipgloss.NewRenderer(out))

	p := tea.NewProgram(
		selector.New(files, false),
		tea.WithInput(in),
		tea.WithOutput(out),
		tea.WithAltScreen(),
	)

	m, err := p.Run()
	if err != nil {
		return "", fmt.Errorf("failed to run selector: %w", err)
	}

	model := m.(selector.Model)
	selected := model.SelectedList()
	if len(selected) == 0 {
		return "", fmt.Errorf("no config file selected")
	}

	// The caller still prints the final path(s) to stdout,
	// which can safely be piped to jq, xargs, etc.
	return selected[0], nil
}



#########################
### internal/tui/watch.go
package tui

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"yapi.run/cli/internal/core"
	"yapi.run/cli/internal/output"
	"yapi.run/cli/internal/runner"
	"yapi.run/cli/internal/tui/theme"
	"yapi.run/cli/internal/validation"
)

var httpClient = &http.Client{Timeout: 30 * time.Second}
var engine = core.NewEngine(httpClient)

type watchModel struct {
	filepath    string
	viewport    viewport.Model
	content     string
	lastMod     time.Time
	lastRun     time.Time
	duration    time.Duration
	err         error
	width       int
	height      int
	ready       bool
	status      string
	statusStyle lipgloss.Style
}

type tickMsg time.Time
type fileChangedMsg struct{}
type runResultMsg struct {
	content  string
	err      error
	duration time.Duration
}

func tickCmd() tea.Cmd {
	return tea.Tick(500*time.Millisecond, func(t time.Time) tea.Msg {
		return tickMsg(t)
	})
}

func checkFileCmd(path string, lastMod time.Time) tea.Cmd {
	return func() tea.Msg {
		info, err := os.Stat(path)
		if err != nil {
			return nil
		}
		if info.ModTime().After(lastMod) {
			return fileChangedMsg{}
		}
		return nil
	}
}

func runYapiCmd(path string) tea.Cmd {
	return func() tea.Msg {
		runRes := engine.RunConfig(
			context.Background(),
			path,
			runner.Options{NoColor: false},
		)

		if runRes.Error != nil && runRes.Analysis == nil {
			return runResultMsg{err: runRes.Error}
		}
		if runRes.Analysis == nil {
			return runResultMsg{err: fmt.Errorf("no analysis produced")}
		}

		var b strings.Builder

		// Render warnings/diagnostics in TUI style.
		for _, w := range runRes.Analysis.Warnings {
			fmt.Fprintln(&b, theme.Warn.Render("[WARN] "+w))
		}
		for _, d := range runRes.Analysis.Diagnostics {
			prefix, style := "[INFO]", theme.Info
			if d.Severity == validation.SeverityWarning {
				prefix, style = "[WARN]", theme.Warn
			}
			if d.Severity == validation.SeverityError {
				prefix, style = "[ERROR]", theme.Error
			}
			fmt.Fprintln(&b, style.Render(prefix+" "+d.Message))
		}

		if runRes.Analysis.HasErrors() || runRes.Result == nil {
			return runResultMsg{content: b.String()}
		}

		if b.Len() > 0 {
			b.WriteString("\n")
		}

		out := output.Highlight(runRes.Result.Body, runRes.Result.ContentType, false)
		b.WriteString(out)

		// Add expectation result if present
		if runRes.ExpectRes != nil && (runRes.ExpectRes.AssertionsTotal > 0 || runRes.ExpectRes.StatusChecked) {
			b.WriteString("\n")
			if runRes.ExpectRes.AllPassed() {
				b.WriteString(theme.Success.Render(fmt.Sprintf("assertions: %d/%d passed", runRes.ExpectRes.AssertionsPassed, runRes.ExpectRes.AssertionsTotal)))
			} else {
				b.WriteString(theme.Error.Render(fmt.Sprintf("assertions: %d/%d passed", runRes.ExpectRes.AssertionsPassed, runRes.ExpectRes.AssertionsTotal)))
			}
		}

		// Handle expectation error
		if runRes.Error != nil {
			return runResultMsg{
				content:  b.String(),
				duration: runRes.Result.Duration,
				err:      runRes.Error,
			}
		}

		return runResultMsg{
			content:  b.String(),
			duration: runRes.Result.Duration,
		}
	}
}

// NewWatchModel creates a new watch mode TUI model.
func NewWatchModel(path string) watchModel {
	return watchModel{
		filepath:    path,
		content:     "Loading...",
		status:      "starting",
		statusStyle: theme.Info,
	}
}

func (m watchModel) Init() tea.Cmd {
	return tea.Batch(
		tickCmd(),
		runYapiCmd(m.filepath),
	)
}

func (m watchModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd
	var cmds []tea.Cmd

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c", "esc":
			return m, tea.Quit
		case "r":
			m.status = "running..."
			m.statusStyle = theme.Info
			return m, runYapiCmd(m.filepath)
		}

	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height

		headerHeight := 3
		footerHeight := 2
		verticalMargin := headerHeight + footerHeight

		if !m.ready {
			m.viewport = viewport.New(msg.Width-4, msg.Height-verticalMargin)
			m.viewport.SetContent(m.content)
			m.ready = true
		} else {
			m.viewport.Width = msg.Width - 4
			m.viewport.Height = msg.Height - verticalMargin
		}

	case tickMsg:
		cmds = append(cmds, tickCmd())
		cmds = append(cmds, checkFileCmd(m.filepath, m.lastMod))

	case fileChangedMsg:
		info, _ := os.Stat(m.filepath)
		if info != nil {
			m.lastMod = info.ModTime()
		}
		m.status = "running..."
		m.statusStyle = theme.Info
		cmds = append(cmds, runYapiCmd(m.filepath))

	case runResultMsg:
		m.lastRun = time.Now()
		m.duration = msg.duration
		if msg.err != nil {
			m.err = msg.err
			m.content = theme.Error.Render(msg.err.Error())
			m.status = "error"
			m.statusStyle = theme.Error
		} else {
			m.err = nil
			m.content = msg.content
			m.status = "ok"
			m.statusStyle = theme.Success
		}
		if m.ready {
			m.viewport.SetContent(m.content)
			m.viewport.GotoTop()
		}
	}

	if m.ready {
		m.viewport, cmd = m.viewport.Update(msg)
		cmds = append(cmds, cmd)
	}

	return m, tea.Batch(cmds...)
}

func (m watchModel) View() string {
	if !m.ready {
		return "Initializing..."
	}

	// Header
	filename := filepath.Base(m.filepath)
	title := theme.Title.Render(" 🐑 yapi watch ")
	fileInfo := theme.Info.Render(filename)
	statusText := m.statusStyle.Render(fmt.Sprintf("[%s]", m.status))
	timeText := theme.Info.Render(m.lastRun.Format("15:04:05"))
	durationText := theme.Info.Render(fmt.Sprintf("(%s)", m.duration.Round(time.Millisecond)))

	header := lipgloss.JoinHorizontal(
		lipgloss.Center,
		title,
		"  ",
		fileInfo,
		"  ",
		statusText,
		"  ",
		timeText,
		"  ",
		durationText,
	)

	// Footer
	help := theme.Help.Render("q: quit • r: refresh • ↑/↓: scroll")

	// Content
	content := theme.BorderedBox.Width(m.width - 2).Render(m.viewport.View())

	return lipgloss.JoinVertical(
		lipgloss.Left,
		header,
		"",
		content,
		help,
	)
}

// RunWatch starts watch mode TUI for the given config file.
func RunWatch(path string) error {
	absPath, err := filepath.Abs(path)
	if err != nil {
		return err
	}

	// Get initial mod time
	info, err := os.Stat(absPath)
	if err != nil {
		return err
	}

	model := NewWatchModel(absPath)
	model.lastMod = info.ModTime()

	p := tea.NewProgram(
		model,
		tea.WithAltScreen(),
		tea.WithMouseCellMotion(),
	)

	_, err = p.Run()
	return err
}



#########################
### internal/utils/fn.go
// Package utils provides generic utility functions.
package utils

// Map transforms a slice of T to a slice of U.
func Map[T, U any](ts []T, f func(T) U) []U {
	us := make([]U, len(ts))
	for i, t := range ts {
		us[i] = f(t)
	}
	return us
}

// Coalesce returns the first non-zero value.
func Coalesce[T comparable](vals ...T) T {
	var zero T
	for _, v := range vals {
		if v != zero {
			return v
		}
	}
	return zero
}

// MergeMaps merges src into dst. Keys in src overwrite dst. Returns new map.
func MergeMaps[K comparable, V any](dst, src map[K]V) map[K]V {
	out := make(map[K]V, len(dst)+len(src))
	for k, v := range dst {
		out[k] = v
	}
	for k, v := range src {
		out[k] = v
	}
	return out
}

// DeepCloneMap creates a deep copy of a map[string]any.
func DeepCloneMap(src map[string]any) map[string]any {
	if src == nil {
		return nil
	}
	dst := make(map[string]any, len(src))
	for k, v := range src {
		switch val := v.(type) {
		case map[string]any:
			dst[k] = DeepCloneMap(val)
		case []any:
			dst[k] = DeepCloneSlice(val)
		default:
			dst[k] = v
		}
	}
	return dst
}

// DeepCloneSlice creates a deep copy of a slice of interfaces.
func DeepCloneSlice(src []any) []any {
	if src == nil {
		return nil
	}
	dst := make([]any, len(src))
	for i, v := range src {
		switch val := v.(type) {
		case map[string]any:
			dst[i] = DeepCloneMap(val)
		case []any:
			dst[i] = DeepCloneSlice(val)
		default:
			dst[i] = v
		}
	}
	return dst
}



#########################
### internal/validation/analyzer.go
// Package validation provides config analysis and diagnostics.
package validation

import (
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"

	"gopkg.in/yaml.v3"
	"yapi.run/cli/internal/config"
	"yapi.run/cli/internal/domain"
	"yapi.run/cli/internal/vars"
)

// extractLineFromError attempts to extract a line number from YAML error messages.
// YAML errors often look like "line 22: cannot unmarshal..." - returns 0-indexed line or -1 if not found.
func extractLineFromError(errMsg string) int {
	re := regexp.MustCompile(`line (\d+):`)
	matches := re.FindStringSubmatch(errMsg)
	if len(matches) >= 2 {
		if lineNum, err := strconv.Atoi(matches[1]); err == nil {
			return lineNum - 1 // Convert to 0-indexed
		}
	}
	return -1
}

// Diagnostic is the canonical diagnostic type that both CLI and LSP use.
type Diagnostic struct {
	Severity Severity
	Field    string // "url", "method", "graphql", "jq_filter", etc
	Message  string // human readable message

	// Optional position info. LSP uses it, CLI may ignore.
	Line int // 0-based, -1 if unknown
	Col  int // 0-based, -1 if unknown
}

// Analysis is the shared result type from analyzing a config.
type Analysis struct {
	Request     *domain.Request
	Diagnostics []Diagnostic
	Warnings    []string           // parsed-level warnings like missing yapi: v1
	Chain       []config.ChainStep // Chain steps if this is a chain config
	Base        *config.ConfigV1   // Base config for chain merging
	Expect      config.Expectation // Expectations for single request validation
}

// HasErrors returns true if there are any error-level diagnostics.
func (a *Analysis) HasErrors() bool {
	for _, d := range a.Diagnostics {
		if d.Severity == SeverityError {
			return true
		}
	}
	return false
}

// JSONOutput is the JSON-serializable output for validation results.
type JSONOutput struct {
	Valid       bool             `json:"valid"`
	Diagnostics []JSONDiagnostic `json:"diagnostics"`
	Warnings    []string         `json:"warnings"`
}

// JSONDiagnostic is a JSON-serializable diagnostic.
type JSONDiagnostic struct {
	Severity string `json:"severity"`
	Field    string `json:"field,omitempty"`
	Message  string `json:"message"`
	Line     int    `json:"line"`
	Col      int    `json:"col"`
}

// ToJSON converts the analysis to a JSON-serializable output.
func (a *Analysis) ToJSON() JSONOutput {
	diags := make([]JSONDiagnostic, 0, len(a.Diagnostics))
	for _, d := range a.Diagnostics {
		diags = append(diags, JSONDiagnostic{
			Severity: d.Severity.String(),
			Field:    d.Field,
			Message:  d.Message,
			Line:     d.Line,
			Col:      d.Col,
		})
	}

	warnings := a.Warnings
	if warnings == nil {
		warnings = []string{}
	}

	return JSONOutput{
		Valid:       !a.HasErrors(),
		Diagnostics: diags,
		Warnings:    warnings,
	}
}

// AnalyzeConfigString is the single entrypoint for analyzing YAML config.
// Both CLI and LSP should call this function.
func AnalyzeConfigString(text string) (*Analysis, error) {
	parseRes, err := config.LoadFromString(text)
	if err != nil {
		line := extractLineFromError(err.Error())
		diag := Diagnostic{
			Severity: SeverityError,
			Field:    "",
			Message:  fmt.Sprintf("invalid YAML: %v", err),
			Line:     line,
			Col:      0,
		}
		return &Analysis{Diagnostics: []Diagnostic{diag}}, nil
	}
	return analyzeParsed(text, parseRes), nil
}

// AnalyzeConfigFile loads a file and analyzes it.
func AnalyzeConfigFile(path string) (*Analysis, error) {
	parseRes, err := config.Load(path)
	if err != nil {
		diag := Diagnostic{
			Severity: SeverityError,
			Field:    "",
			Message:  fmt.Sprintf("failed to load config: %v", err),
			Line:     0,
			Col:      0,
		}
		return &Analysis{Diagnostics: []Diagnostic{diag}}, nil
	}

	data, _ := os.ReadFile(path) //nolint:gosec // user-provided config path
	return analyzeParsed(string(data), parseRes), nil
}

// analyzeParsed is the common analysis path for both string and file inputs.
func analyzeParsed(text string, parseRes *config.ParseResult) *Analysis {
	var diags []Diagnostic

	// Chain config
	if len(parseRes.Chain) > 0 {
		diags = append(diags, validateChain(text, parseRes.Base, parseRes.Chain)...)
		diags = append(diags, validateEnvVars(text)...)
		return &Analysis{
			Chain:       parseRes.Chain,
			Base:        parseRes.Base,
			Diagnostics: diags,
			Warnings:    parseRes.Warnings,
		}
	}

	// Single request config
	req := parseRes.Request

	for _, iss := range ValidateRequest(req) {
		diags = append(diags, Diagnostic{
			Severity: iss.Severity,
			Field:    iss.Field,
			Message:  iss.Message,
			Line:     findFieldLine(text, iss.Field),
			Col:      0,
		})
	}

	diags = append(diags, ValidateGraphQLSyntax(text, req)...)
	diags = append(diags, ValidateJQSyntax(text, req)...)
	diags = append(diags, validateUnknownKeys(text)...)
	diags = append(diags, validateEnvVars(text)...)

	if len(parseRes.Expect.Assert) > 0 {
		diags = append(diags, ValidateChainAssertions(text, parseRes.Expect.Assert, "")...)
	}

	return &Analysis{
		Request:     req,
		Diagnostics: diags,
		Warnings:    parseRes.Warnings,
		Expect:      parseRes.Expect,
		Base:        parseRes.Base,
	}
}

// validateUnknownKeys checks for unknown keys in the YAML and returns warnings.
func validateUnknownKeys(text string) []Diagnostic {
	if text == "" {
		return nil
	}

	var raw map[string]any
	if err := yaml.Unmarshal([]byte(text), &raw); err != nil {
		return nil
	}

	unknownKeys := config.FindUnknownKeys(raw)
	var diags []Diagnostic
	for _, key := range unknownKeys {
		diags = append(diags, Diagnostic{
			Severity: SeverityWarning,
			Field:    key,
			Message:  fmt.Sprintf("unknown key '%s' will be ignored", key),
			Line:     findFieldLine(text, key),
			Col:      0,
		})
	}
	return diags
}

// findChainStepLine finds the line number where a chain step with given name starts
func findChainStepLine(text, stepName string) int {
	if text == "" || stepName == "" {
		return -1
	}
	// Look for "- name: stepName" or "name: stepName" pattern
	patterns := []string{
		fmt.Sprintf("- name: %s", stepName),
		fmt.Sprintf("-  name: %s", stepName),
		fmt.Sprintf("name: %s", stepName),
		fmt.Sprintf("- name: \"%s\"", stepName),
		fmt.Sprintf("name: \"%s\"", stepName),
		fmt.Sprintf("- name: '%s'", stepName),
		fmt.Sprintf("name: '%s'", stepName),
	}
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		for _, pattern := range patterns {
			if strings.HasPrefix(trimmed, pattern) {
				return i
			}
		}
	}
	return -1
}

// findValueInText finds the line number where a specific value appears in text
func findValueInText(text, value string) int {
	if text == "" || value == "" {
		return -1
	}
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		if strings.Contains(line, value) {
			return i
		}
	}
	return -1
}

// validateChain validates chain configuration
func validateChain(text string, base *config.ConfigV1, chain []config.ChainStep) []Diagnostic {
	var diags []Diagnostic
	definedSteps := make(map[string]bool)

	for i, step := range chain {
		stepLine := findChainStepLine(text, step.Name)

		// 1. Check name is present
		if step.Name == "" {
			diags = append(diags, Diagnostic{
				Severity: SeverityError,
				Message:  fmt.Sprintf("step #%d missing 'name'", i+1),
				Line:     stepLine,
				Col:      0,
			})
		} else if definedSteps[step.Name] {
			diags = append(diags, Diagnostic{
				Severity: SeverityError,
				Field:    step.Name,
				Message:  fmt.Sprintf("duplicate step name '%s'", step.Name),
				Line:     stepLine,
				Col:      0,
			})
		}

		// 2. Check URL is present (either in step or in base config)
		hasURL := step.URL != "" || (base != nil && base.URL != "")
		if !hasURL {
			diags = append(diags, Diagnostic{
				Severity: SeverityError,
				Field:    step.Name,
				Message:  fmt.Sprintf("step '%s' missing 'url' (not in step or base config)", step.Name),
				Line:     stepLine,
				Col:      0,
			})
		}

		// 3. Check for references to future steps
		diags = append(diags, scanForUndefinedRefs(text, step.URL, definedSteps, step.Name, "url")...)

		// Check Headers
		for _, v := range step.Headers {
			diags = append(diags, scanForUndefinedRefs(text, v, definedSteps, step.Name, "headers")...)
		}

		// Check Body values recursively (handles nested maps like body.params.track_index)
		diags = append(diags, scanBodyForUndefinedRefs(text, step.Body, definedSteps, step.Name, "body")...)

		// Check JSON field
		if step.JSON != "" {
			diags = append(diags, scanForUndefinedRefs(text, step.JSON, definedSteps, step.Name, "json")...)
		}

		// Check Variables
		for k, v := range step.Variables {
			if s, ok := v.(string); ok {
				diags = append(diags, scanForUndefinedRefs(text, s, definedSteps, step.Name, fmt.Sprintf("variables.%s", k))...)
			}
		}

		// 4. Validate JQ assertions
		if len(step.Expect.Assert) > 0 {
			diags = append(diags, ValidateChainAssertions(text, step.Expect.Assert, step.Name)...)
		}

		// 5. Add to defined scope
		if step.Name != "" {
			definedSteps[step.Name] = true
		}
	}
	return diags
}

// scanBodyForUndefinedRefs recursively scans a body map for undefined step references
func scanBodyForUndefinedRefs(text string, body map[string]any, definedSteps map[string]bool, currentStep, path string) []Diagnostic {
	var diags []Diagnostic
	for k, v := range body {
		fieldPath := fmt.Sprintf("%s.%s", path, k)
		switch val := v.(type) {
		case string:
			diags = append(diags, scanForUndefinedRefs(text, val, definedSteps, currentStep, fieldPath)...)
		case map[string]any:
			diags = append(diags, scanBodyForUndefinedRefs(text, val, definedSteps, currentStep, fieldPath)...)
		case []any:
			for i, item := range val {
				itemPath := fmt.Sprintf("%s[%d]", fieldPath, i)
				if s, ok := item.(string); ok {
					diags = append(diags, scanForUndefinedRefs(text, s, definedSteps, currentStep, itemPath)...)
				} else if m, ok := item.(map[string]any); ok {
					diags = append(diags, scanBodyForUndefinedRefs(text, m, definedSteps, currentStep, itemPath)...)
				}
			}
		}
	}
	return diags
}

// scanForUndefinedRefs checks a value string for references to undefined steps
func scanForUndefinedRefs(text, value string, definedSteps map[string]bool, currentStep, fieldName string) []Diagnostic {
	var diags []Diagnostic
	matches := vars.Expansion.FindAllStringSubmatch(value, -1)

	for _, match := range matches {
		var key string
		if strings.HasPrefix(match[0], "${") {
			key = match[1]
		} else {
			key = match[2]
		}

		// Only check chain references (containing dot)
		if strings.Contains(key, ".") {
			parts := strings.Split(key, ".")
			refStep := parts[0]

			if !definedSteps[refStep] {
				msg := fmt.Sprintf("step '%s' references '%s' before it is defined", currentStep, refStep)
				if refStep == currentStep {
					msg = fmt.Sprintf("step '%s' cannot reference itself", currentStep)
				}

				// Find the actual line where this reference appears
				line := findValueInText(text, match[0])

				diags = append(diags, Diagnostic{
					Severity: SeverityError,
					Field:    fmt.Sprintf("%s.%s", currentStep, fieldName),
					Message:  msg,
					Line:     line,
					Col:      0,
				})
			}
		}
	}
	return diags
}

// EnvVarInfo holds information about an env var reference for hover/diagnostics
type EnvVarInfo struct {
	Name       string
	Value      string // Empty if not defined
	IsDefined  bool
	Line       int
	Col        int
	StartIndex int
	EndIndex   int
}

// FindEnvVarRefs finds all environment variable references in text
func FindEnvVarRefs(text string) []EnvVarInfo {
	var refs []EnvVarInfo
	lines := strings.Split(text, "\n")

	// Track if we're inside a graphql block (which uses $var syntax for GraphQL variables)
	inGraphQLBlock := false
	graphqlIndent := 0

	for lineNum, line := range lines {
		trimmed := strings.TrimSpace(line)

		// Check for graphql: field start
		if strings.HasPrefix(trimmed, "graphql:") {
			inGraphQLBlock = true
			// Find the indentation of the graphql key
			graphqlIndent = len(line) - len(strings.TrimLeft(line, " \t"))
			continue
		}

		// If we're in a graphql block, check if we've exited it
		if inGraphQLBlock {
			// Empty lines stay in block
			if trimmed == "" {
				continue
			}
			// Calculate current line's indentation
			currentIndent := len(line) - len(strings.TrimLeft(line, " \t"))
			// If current indentation is <= graphql key's indentation and line has content,
			// we've exited the block (unless it's a continuation like |)
			if currentIndent <= graphqlIndent && !strings.HasPrefix(trimmed, "|") && !strings.HasPrefix(trimmed, ">") {
				inGraphQLBlock = false
			} else {
				// Still in graphql block - skip $var matching (GraphQL variables)
				continue
			}
		}

		matches := vars.EnvOnly.FindAllStringSubmatchIndex(line, -1)
		for _, match := range matches {
			// match[0:2] = full match, match[2:4] = ${VAR} capture, match[4:6] = $VAR capture
			fullStart, fullEnd := match[0], match[1]
			fullMatch := line[fullStart:fullEnd]

			// Skip if this looks like a chain reference (contains a dot after the var name)
			// Check the character after the match
			if fullEnd < len(line) && line[fullEnd] == '.' {
				continue
			}

			var varName string
			if match[2] != -1 {
				// ${VAR} style
				varName = line[match[2]:match[3]]
			} else if match[4] != -1 {
				// $VAR style
				varName = line[match[4]:match[5]]
			}

			if varName == "" {
				continue
			}

			// Check if it's actually an env var (not a chain ref)
			// Chain refs have dots like ${step.field}
			if strings.Contains(fullMatch, ".") {
				continue
			}

			value := os.Getenv(varName)
			refs = append(refs, EnvVarInfo{
				Name:       varName,
				Value:      value,
				IsDefined:  value != "",
				Line:       lineNum,
				Col:        fullStart,
				StartIndex: fullStart,
				EndIndex:   fullEnd,
			})
		}
	}
	return refs
}

// RedactValue redacts a value for display, showing only first/last chars
func RedactValue(value string) string {
	if value == "" {
		return "(empty)"
	}
	if len(value) <= 4 {
		return strings.Repeat("*", len(value))
	}
	return value[:2] + strings.Repeat("*", len(value)-4) + value[len(value)-2:]
}

// validateEnvVars checks for undefined environment variables and returns warnings
func validateEnvVars(text string) []Diagnostic {
	var diags []Diagnostic

	refs := FindEnvVarRefs(text)
	for _, ref := range refs {
		if !ref.IsDefined {
			diags = append(diags, Diagnostic{
				Severity: SeverityWarning,
				Field:    ref.Name,
				Message:  fmt.Sprintf("environment variable '%s' is not defined", ref.Name),
				Line:     ref.Line,
				Col:      ref.Col,
			})
		}
	}

	return diags
}



#########################
### internal/validation/graphql_jq.go
package validation

import (
	"regexp"
	"strings"

	"github.com/graphql-go/graphql/language/parser"
	"github.com/graphql-go/graphql/language/source"
	"github.com/itchyny/gojq"
	"gopkg.in/yaml.v3"
	"yapi.run/cli/internal/domain"
)

// ValidateGraphQLSyntax validates the GraphQL query syntax if present.
func ValidateGraphQLSyntax(fullYaml string, req *domain.Request) []Diagnostic {
	q, ok := req.Metadata["graphql_query"]
	if !ok || q == "" {
		return nil
	}

	src := source.NewSource(&source.Source{
		Body: []byte(q),
		Name: "GraphQL Query",
	})

	_, err := parser.Parse(parser.ParseParams{Source: src})
	if err == nil {
		return nil
	}

	line := findFieldLine(fullYaml, "graphql")
	// GraphQL content typically starts on line after "graphql: |"
	if line >= 0 {
		line++
	}

	return []Diagnostic{{
		Severity: SeverityError,
		Field:    "graphql",
		Message:  "GraphQL syntax error: " + err.Error(),
		Line:     line,
		Col:      0,
	}}
}

// ValidateJQSyntax validates the jq filter syntax if present.
func ValidateJQSyntax(fullYaml string, req *domain.Request) []Diagnostic {
	f, ok := req.Metadata["jq_filter"]
	if !ok || strings.TrimSpace(f) == "" {
		return nil
	}

	_, err := gojq.Parse(f)
	if err == nil {
		return nil
	}

	line := findFieldLine(fullYaml, "jq_filter")

	return []Diagnostic{{
		Severity: SeverityError,
		Field:    "jq_filter",
		Message:  "JQ syntax error: " + err.Error(),
		Line:     line,
		Col:      0,
	}}
}

// findFieldLine finds the line number (0-based) of a YAML field.
// Uses YAML parsing for accurate position, with regex fallback.
// Returns -1 if not found or if text is empty.
func findFieldLine(text, field string) int {
	if field == "" || text == "" {
		return -1
	}

	// Try YAML node parsing first for accuracy
	var node yaml.Node
	if err := yaml.Unmarshal([]byte(text), &node); err == nil {
		if line := findFieldInNode(&node, field); line >= 0 {
			return line
		}
	}

	// Fallback: use regex to match field as a complete word followed by colon
	// This handles cases where YAML parsing succeeds but field is nested differently
	pattern := regexp.MustCompile(`(?m)^\s*` + regexp.QuoteMeta(field) + `\s*:`)
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		if pattern.MatchString(line) {
			return i
		}
	}
	return -1
}

// findFieldInNode recursively searches a YAML node tree for a field name.
func findFieldInNode(node *yaml.Node, field string) int {
	if node == nil {
		return -1
	}

	switch node.Kind {
	case yaml.DocumentNode:
		for _, child := range node.Content {
			if line := findFieldInNode(child, field); line >= 0 {
				return line
			}
		}
	case yaml.MappingNode:
		// Content alternates between keys and values
		for i := 0; i < len(node.Content)-1; i += 2 {
			keyNode := node.Content[i]
			if keyNode.Value == field {
				return keyNode.Line - 1 // yaml.Node lines are 1-based
			}
			// Also search in the value node (for nested fields)
			if line := findFieldInNode(node.Content[i+1], field); line >= 0 {
				return line
			}
		}
	case yaml.SequenceNode:
		for _, child := range node.Content {
			if line := findFieldInNode(child, field); line >= 0 {
				return line
			}
		}
	}
	return -1
}

// ValidateChainAssertions validates JQ syntax for all assertions in chain steps.
func ValidateChainAssertions(text string, assertions []string, stepName string) []Diagnostic {
	var diags []Diagnostic

	for _, assertion := range assertions {
		_, err := gojq.Parse(assertion)
		if err != nil {
			// Find the line where this assertion appears
			line := findValueInTextForAssertion(text, assertion)

			diags = append(diags, Diagnostic{
				Severity: SeverityError,
				Field:    stepName + ".assert",
				Message:  "JQ syntax error: " + err.Error(),
				Line:     line,
				Col:      0,
			})
		}
	}

	return diags
}

// findValueInTextForAssertion finds the line where an assertion string appears
func findValueInTextForAssertion(text, assertion string) int {
	if text == "" || assertion == "" {
		return -1
	}
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		// Check if line contains the assertion (with possible quotes or dashes)
		if strings.Contains(line, assertion) {
			return i
		}
	}
	return -1
}



#########################
### internal/validation/validation.go
package validation

import (
	"fmt"

	"yapi.run/cli/internal/constants"
	"yapi.run/cli/internal/domain"
)

// Severity indicates the level of a validation issue.
type Severity int

// Severity levels for validation issues.
const (
	SeverityInfo Severity = iota
	SeverityWarning
	SeverityError
)

func (s Severity) String() string {
	switch s {
	case SeverityError:
		return "error"
	case SeverityWarning:
		return "warning"
	default:
		return "info"
	}
}

// Issue represents a single validation problem.
type Issue struct {
	Severity Severity
	Field    string // e.g. "url", "method", "service"
	Message  string // human-readable
}

// isGRPCRequest returns true if this is a gRPC request
func isGRPCRequest(req *domain.Request) bool {
	return req.Metadata["transport"] == constants.TransportGRPC
}

// isTCPRequest returns true if this is a TCP request
func isTCPRequest(req *domain.Request) bool {
	return req.Metadata["transport"] == constants.TransportTCP
}

// isHTTPRequest returns true if this is an HTTP request
func isHTTPRequest(req *domain.Request) bool {
	t := req.Metadata["transport"]
	return t == constants.TransportHTTP || t == constants.TransportGraphQL
}

// ValidateRequest performs semantic validation on a domain.Request.
func ValidateRequest(req *domain.Request) []Issue {
	var issues []Issue
	add := func(sev Severity, field, msg string) {
		issues = append(issues, Issue{Severity: sev, Field: field, Message: msg})
	}

	if req.URL == "" {
		add(SeverityError, "url", "missing required field `url`")
	}

	method := constants.CanonicalizeMethod(req.Method)
	if isHTTPRequest(req) && method != "" && !constants.ValidHTTPMethods[method] {
		add(SeverityWarning, "method", fmt.Sprintf("unknown HTTP method `%s`", req.Method))
	}

	if isGRPCRequest(req) {
		if req.Metadata["service"] == "" {
			add(SeverityError, "service", "gRPC config requires `service`")
		}
		if req.Metadata["rpc"] == "" {
			add(SeverityError, "rpc", "gRPC config requires `rpc`")
		}
	}

	if isTCPRequest(req) && req.Metadata["encoding"] != "" && !validEncoding(req.Metadata["encoding"]) {
		add(SeverityError, "encoding",
			fmt.Sprintf("unsupported TCP encoding `%s` (allowed: text, hex, base64)", req.Metadata["encoding"]))
	}

	hasBody := req.Body != nil
	if req.Metadata["graphql_query"] != "" && hasBody {
		field := "body"
		if req.Metadata["body_source"] == "json" {
			field = "json"
		}
		add(SeverityError, field, "`graphql` cannot be used with `body` or `json`")
	}

	return issues
}

func validEncoding(enc string) bool {
	switch enc {
	case "text", "hex", "base64":
		return true
	default:
		return false
	}
}



#########################
### internal/vars/vars.go
// Package vars provides shared regex patterns and utilities for variable expansion.
package vars

import (
	"regexp"
	"strings"
)

// Expansion matches $VAR and ${VAR} patterns, including dots for chain references.
// Group 1: contents inside ${...}
// Group 2: token after $...
var Expansion = regexp.MustCompile(`\$\{([^}]+)\}|\$([a-zA-Z0-9_\-\.]+)`)

// EnvOnly matches $VAR and ${VAR} patterns without dots (environment variables only).
// Group 1: contents inside ${...}
// Group 2: token after $...
var EnvOnly = regexp.MustCompile(`\$\{([A-Za-z_][A-Za-z0-9_]*)\}|\$([A-Za-z_][A-Za-z0-9_]*)`)

// Resolver resolves a variable key to its value.
type Resolver func(key string) (string, error)

// ChainVar matches ${step.field} patterns (contains a dot).
var ChainVar = regexp.MustCompile(`\$\{[^}]*\.[^}]+\}|\$[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-\.]+`)

// HasChainVars returns true if the string contains chain variable references (${step.field}).
func HasChainVars(s string) bool {
	return ChainVar.MatchString(s)
}

// HasEnvVars returns true if the string contains environment variable references ($VAR or ${VAR}).
func HasEnvVars(s string) bool {
	return EnvOnly.MatchString(s)
}

// ExpandString replaces all $VAR and ${VAR} occurrences in input using the resolver.
func ExpandString(input string, resolver Resolver) (string, error) {
	var capturedErr error

	result := Expansion.ReplaceAllStringFunc(input, func(match string) string {
		if capturedErr != nil {
			return match
		}

		var key string
		if strings.HasPrefix(match, "${") {
			// Strict: ${key}
			key = match[2 : len(match)-1]
		} else {
			// Lazy: $key
			key = match[1:]
		}

		val, err := resolver(key)
		if err != nil {
			capturedErr = err
			return match
		}
		return val
	})

	if capturedErr != nil {
		return "", capturedErr
	}
	return result, nil
}


#########################
### Files listed above:
- cmd/yapi/main.go
- internal/cli/color/color.go
- internal/cli/commands/commands.go
- internal/cli/middleware/observability.go
- internal/compiler/compiler.go
- internal/config/loader.go
- internal/config/v1.go
- internal/constants/keywords.go
- internal/core/core.go
- internal/core/stats.go
- internal/domain/domain.go
- internal/executor/executor.go
- internal/executor/graphql.go
- internal/executor/grpc.go
- internal/executor/http.go
- internal/executor/tcp.go
- internal/filter/jq.go
- internal/langserver/langserver.go
- internal/observability/client.go
- internal/observability/file_logger.go
- internal/observability/observability.go
- internal/output/highlight.go
- internal/runner/context.go
- internal/runner/runner.go
- internal/share/encoding.go
- internal/tui/selector/selector.go
- internal/tui/theme/theme.go
- internal/tui/tui.go
- internal/tui/watch.go
- internal/utils/fn.go
- internal/validation/analyzer.go
- internal/validation/graphql_jq.go
- internal/validation/validation.go
- internal/vars/vars.go
