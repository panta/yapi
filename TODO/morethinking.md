# RFC: Yapi Validation & Chaining Engine (Contract Testing)

**Status:** Draft / For Review
**Target:** Transform `yapi` from a request runner into a stateful integration testing tool.

## 1\. Summary

This proposal introduces two major features to `yapi`: **Validation** (`expect` blocks) and **Chaining** (stateful multi-step requests).

By treating configuration files as Directed Acyclic Graphs (DAGs), `yapi` will evolve into a robust **Contract Testing Tool**. A key innovation is **Implicit Type Assertions**: the way you reference data (e.g., `${step.json.id}` vs `${step.text}`) automatically enforces content-type validation.

## 2\. Motivation

Currently, `yapi` excels at executing single requests. However, complex integration testing has friction points:

1.  **Verification:** Users currently verify success by "eyeballing" the output. We need automated assertions.
2.  **Dynamic State Propagation:** Testing a flow where Step A *generates* the token used by Step B currently requires external scripting.
3.  **Workflow Automation:** There is no way to define a full user journey (Setup -\> Action -\> Teardown) in a single configuration.

## 3\. Proposed Design: Validation (`expect`)

We introduce an optional `expect` block. The specific key used inside `expect` dictates the assertion logic.

### 3.1 Syntax

```yaml
expect:
  status: 200

  # 1. Structural JSON Matching
  # Implies assertion: Response body is valid JSON
  json:
    role: "admin"
    settings:
      notifications: true

  # 2. Plain Text Matching
  # Implies assertion: Response body matches string exactly
  text: "Success"

  # 3. Header Matching
  headers:
    Content-Type: application/json
```

-----

## 4\. Proposed Design: Chaining & State

We introduce a `chain` list. Steps are executed sequentially.

### 4.1 Type-Safe Accessors (Implicit Assertions)

Variables are accessed via `${step_name.format.path}`. The `format` used dictates the implicit assertion.

| Accessor Syntax | Implicit Assertion (Pipefail) | Data Returned |
| :--- | :--- | :--- |
| `${login.json.token}` | 1. Body MUST be valid JSON<br>2. Field `token` MUST exist | The value of the field |
| `${login.text}` | 1. Body MUST be readable text | The raw string body |
| `${login.headers.Key}` | 1. Header `Key` MUST exist | The header value |

### 4.2 Syntax Example

```yaml
yapi: v1
vars:
  BASE: https://api.ex.com

chain:
  # STEP 1: Producer
  - name: login
    method: POST
    url: ${BASE}/auth
    # Input: defining 'json' sets Content-Type to app/json automatically
    json:
      user: ${ENV.USER}
    expect:
      status: 200

  # STEP 2: Consumer
  - name: profile
    method: GET
    # REFERENCE: Accessing .json.id asserts Step 1 returned JSON
    url: ${BASE}/users/${login.json.id}
    headers:
      Authorization: Bearer ${login.json.token}
    expect:
      status: 200
      # ASSERTION: Accessing .email checks value against Step 1
      json:
        email: ${login.json.email}
```

### 4.3 The "Pipefail" Guarantee

We enforce **Implicit Expectations** based on usage.

  * **Scenario:** Step 1 returns a `500 Internal Server Error` (HTML body).
  * **Reference:** Step 2 tries to use `${login.json.token}`.
  * **Result:** `yapi` halts immediately before Step 2.
      * *Error:* "Dependency Failure: Step 'login' output accessed via '.json', but response was not valid JSON."

-----

## 5\. Technical Implementation

### 5.1 Architecture: The "Chain of 1"

To maintain a clean codebase, the internal domain model will treat **everything as a chain**.

  * **Old Config:** A root-level request is parsed as a `Chain` containing 1 anonymous step.
  * **New Config:** A `chain` list is parsed as a `Chain` of N steps.

### 5.2 Runtime Expansion Logic

We defer variable expansion to **Runtime**. The `ExecutionContext` is responsible for the type logic.

```go
// Psuedocode for context.Resolve(variable)
func (c *Context) Resolve(stepName, format, path string) (string, error) {
    result := c.Results[stepName]

    if format == "json" {
        if !isValidJSON(result.Body) {
             return "", fmt.Errorf("step '%s' is not JSON", stepName)
        }
        val := jsonPath(result.Body, path)
        if val == nil {
             return "", fmt.Errorf("field '%s' missing in '%s'", path, stepName)
        }
        return val, nil
    }

    if format == "text" {
        return result.Body, nil
    }

    // ...
}
```

### 5.3 Static Analysis (Pre-flight)

Before execution, we run a static analysis pass to build the dependency graph.

**We check for:**

1.  **Forward References:** Step 1 cannot reference Step 2.
2.  **Unknown References:** Step 1 cannot reference Step `undefined`.

## 6\. Backwards Compatibility

  * **Existing Files:** Fully supported. The loader detects root-level `url` and creates a single-step chain.
  * **Output:** Single requests look the same. Chains output a summarized pass/fail log per step.

## 7\. FAQ

**Q: Can I access XML responses?**
A: In the future, yes. We can simply add a `${step.xml.xpath}` accessor.

**Q: What implies `Content-Type: application/json` in the request?**
A: Using the `json:` key in the request block automatically sets the header. Using `body:` (generic) does not, requiring manual header setting.

**Q: Can I verify a field exists without checking its value?**
A: Yes. You don't need an `expect` block for that. Just referencing it in a subsequent step (e.g. implicitly) or using a JQ assertion `${step.json.field} != null` covers it.

