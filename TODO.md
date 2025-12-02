- record videos to put on website
- record videos for gifs for readme

- add real lsp to playground (maybe over http, maybe wasm, local)

- vscode extension
- jetbrains extension
- maybe interactive history?

- fix nvim extension to make it easier to browse, etc, like in nvim!
- make non-pretty watch, skill kinda pretty, ascii logo, sheep?



- add expect for status codes, headers, json schema, etc
```yapi
yapi: v1
url: foobar.com
method: GET

validate_response:
  status_code: 200
  headers:
    Content-Type: application/json
  json_schema:
    type: object
    properties:
      id:
        type: integer
      name:
        type: string
    required:
      - id
      - name

```



