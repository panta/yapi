- record videos to put on website
- record videos for gifs for readme

- add real lsp to playground (maybe over http, maybe wasm, local)

- vscode extension
- jetbrains extension
- maybe interactive history?

- fix nvim extension to make it easier to browse, etc, like in nvim!



- add expect for status codes, headers, json schema, etc
```yapi
yapi: v1
url: foobar.com
method: GET
expect:
   # can we use jq to validate what we get back?
   jq_schema: |
      {
         "type": "object",
         "properties": {
            "id": { "type": "integer" },
            "name": { "type": "string" }
         },
         "required": ["id", "name"]
      }

```



