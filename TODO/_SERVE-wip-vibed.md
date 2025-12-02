# yapi serve - mock api from definitions

## idea

run a mock server based on yapi files:

```bash
yapi serve ./api/*.yapi --port 8080
```

## how it works

yapi file defines both the request and expected response - flip it to serve:

```yaml
yapi: v1
url: https://api.example.com/users/1
method: GET

expect:
  status: 200
  headers:
    Content-Type: application/json
  body:
    id: 1
    name: John
```

becomes:

```
GET /users/1 -> { "id": 1, "name": "John" }
```

## path matching

```yaml
# users.yapi
yapi: v1
url: https://api.example.com/users/${id}
method: GET

expect:
  status: 200
  body:
    id: ${id}
    name: "User ${id}"
```

```bash
$ curl localhost:8080/users/42
{ "id": 42, "name": "User 42" }
```

## chain as workflow

```yaml
chain:
  - name: login
    url: https://api.com/auth
    method: POST
    body:
      email: ${email}
      password: ${password}
    expect:
      status: 200
      body:
        token: "mock-token-${email}"

  - name: profile
    url: https://api.com/me
    headers:
      Authorization: Bearer ${login.token}
    expect:
      status: 200
      body:
        email: ${email}
```

mock server validates the flow - login must happen before profile works.

## cli

```bash
yapi serve ./api/           # serve all .yapi files in dir
yapi serve --port 3000      # custom port
yapi serve --delay 200      # add latency (ms)
yapi serve --chaos          # random 5xx errors
```
