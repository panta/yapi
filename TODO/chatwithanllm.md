This is a strong foundation. You have a Go-based CLI, a TUI, an LSP, and a Next.js playground. You are positioned perfectly to attack the "Postman is too heavy/cloud-forced" market.

To turn `yapi` into a world-class dev tool, we need to pivot from "cool side project" to **"The Standard for Git-Native API Development."**

Here is the strategic plan to get there.

### The Pitch: "Postman for the Git Generation"
Current tools force API collections into proprietary clouds or massive JSON blobs that cause merge conflicts. `yapi` treats API requests as code: versionable, diff-able, and executable anywhere (local, CI, web).

---

### Phase 1: The "Local-First" Wedge (Months 1-2)
*Goal: Make the single-player experience 10x better than Curl and faster than Postman.*

1.  **Implement Request Chaining (Critical)**
    * **Why:** Real APIs require workflows (Login $\to$ Get Token $\to$ Create Resource). Currently, `yapi` is stateless.
    * **Action:** Implement the design in `TODO/CHAIN.md`. This transforms `yapi` from a request runner into an integration testing tool.
2.  **VS Code Extension**
    * **Why:** You have `internal/langserver`, and you have a Neovim plugin. But 70% of web devs use VS Code.
    * **Action:** Wrap your existing LSP in a VS Code extension. Allow users to click "Run" directly inside `.yapi.yml` files (CodeLens).
3.  **Secrets Management**
    * **Why:** Users hate pasting tokens.
    * **Action:** Integrate with `.env` files (already partially done) but add a `yapi login` or `yapi vault` feature to store sensitive keys in the OS keychain, keeping them out of Git.

### Phase 2: The "CI/CD" Wedge (Months 3-4)
*Goal: Become part of the engineering infrastructure.*

1.  **`yapi test` Command**
    * **Why:** If it lives in the repo, it should run in the pipeline.
    * **Action:** Add a `--ci` flag that outputs JUnit XML or TAP format. This allows `yapi` to replace dedicated testing suites like Supertest or Jest for API testing.
2.  **Implicit Validation**
    * **Action:** Enhance the `expect` block (from `TODO/VALIDATE.md`). If a dev defines a schema, enforce it.
    * **Value:** "Contract Testing for free."

### Phase 3: The "Viral" Wedge (Months 4-6)
*Goal: Growth loops.*

1.  **"Run in yapi" Badge**
    * **Action:** Create a Markdown snippet generator. Open source maintainers put this in their README. Clicking it opens your Webapp (`yapi.run`) with the request pre-loaded.
2.  **Import/Export Strategy**
    * **Action:** `yapi import curl` and `yapi import postman`. Lower the friction to switch.
3.  **TUI Polish**
    * **Action:** The TUI is your "screenshotable" feature. Make it look like a hacker dashboard. Add response history and vim-key navigation.

---

### Immediate Technical Roadmap

Based on your repo tree, here are the concrete code changes needed to unlock **Phase 1**.

#### 1. Implement Chaining (The Brains)
We need to modify `internal/runner/runner.go` to handle a `Chain` struct and pass state (variables) between steps.

**Architectural Change:**


[Image of Directed Acyclic Graph]

*Context: We need to visualize the request chain as a dependency graph where outputs of previous requests become inputs of future ones.*

* **Current:** `Runner` takes 1 Request.
* **New:** `Runner` takes a `Context` (map of variables) and a list of Requests.

#### 2. VS Code Extension (The Reach)
Your `internal/langserver` is ready. We just need to wire it up.

**Plan:**
1.  Create `extensions/vscode`.
2.  Use `vscode-languageclient` to spawn `yapi lsp`.
3.  Add `CodeLens` provider to render a "▶ Run" button above `method: GET` lines.

---

### Execution: Next Step

I recommend we start by implementing **Request Chaining**. This is the feature that differentiates you from "just curl" and makes you a "testing platform."

I can generate the Go code to refactor `internal/runner` and `internal/core` to support variable extraction and multi-step execution.

**Would you like me to generate the implementation plan and code for `yapi chain`?**
