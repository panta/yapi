# yapi 🐏

Tired of `curl` commands long enough to be a novel? Sick of waiting for Postman to load just to send one. simple. request?

**Stop the madness.**

**yapi** is a tiny script that runs API requests from clean, simple YAML files. It's the fast, no-bloat, terminal-native alternative you've been dreaming of.

-----

## What's the Big Idea?

Instead of this mess:

```bash
curl -X POST 'https://httpbin.org/post' \
-H 'Content-Type: application/json' \
-d '{"title":"Testing yapi","description":"This is a test","userId":123,"isPublished":true,"tags":["testing","api","yaml"]}'
```

You write this in `create-post.yapi.yml`:

```yaml
# yaml-language-server: $schema=https://pond.audio/yapi/schema
url: https://httpbin.org
path: /post
method: POST
content_type: application/json

body:
  title: "Testing yapi"
  description: "This is a test"
  userId: 123
  isPublished: true
  tags: [testing, api, yaml]
```

And just run:

```bash
yapi -c create-post.yapi.yml
```

`yapi` builds the `curl` command, runs it, and pretty-prints the JSON response. ✨

-----

## Features (The Good Stuff)

  * **Sane Requests:** Define `url`, `path`, `method`, and `body` in lovely YAML.
  * **No-Click UI:** An optional `fzf` menu lets you pick a request file.
  * **YAML \> JSON Magic:** Writes your request `body:` in YAML, it handles the ugly JSON conversion.
  * **JSON Literal? Fine:** Got raw JSON? Dump it under the `json:` key.
  * **Schema Support:** Get free autocomplete and validation in your editor with `yapi.schema.json`.
  * **Fast.** Did we mention it's not a 500MB Electron app?

-----

## What You'll Need

1.  **`curl`**: Obviously.
2.  **`yq`**: For shredding YAML.
3.  **`fzf`**: (Optional) For the sweet interactive menu.
4.  **`zsh`**: It's a Zsh script.

-----

## How to Use It

```bash
# Run a specific file
./yapi.sh -c examples/create-post.yapi.yml

# Run against a different server (e.g., staging)
./yapi.sh -c examples/create-post.yapi.yml -u http://localhost:3000

# Run with no args for the fzf-powered menu
./yapi.sh
```
