# yapi validate/expect syntax design

## basic usage

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

## status code matching

```yaml
expect:
  status: 200          # exact match
  status: 2xx          # any 2xx
  status: [200, 201]   # one of
```

## header matching

```yaml
expect:
  headers:
    Content-Type: application/json           # exact
    Content-Type: application/*              # glob
    Cache-Control: !exists                   # must not exist
    X-Request-Id: exists                     # must exist (any value)
```

## body matching

```yaml
# exact json match
expect:
  body:
    id: 1
    name: John

# partial match (only check these fields)
expect:
  body:
    id: 1
    # other fields ignored

# jq assertion
expect:
  jq:
    - .users | length > 0
    - .users[0].id == 1

# json schema
expect:
  schema:
    type: object
    properties:
      id:
        type: integer
      name:
        type: string
    required: [id, name]
```

## chaining with validation

stop chain if validation fails:

```yaml
yapi: v1

chain:
  - name: login
    url: https://api.example.com/auth
    method: POST
    content_type: application/json
    body:
      email: ${EMAIL}
      password: ${PASSWORD}
    expect:
      status: 200
      body:
        token: exists

  - name: get_profile
    url: https://api.example.com/me
    headers:
      Authorization: Bearer ${login.token}
    expect:
      status: 200
      jq:
        - .email == "${EMAIL}"

  - name: update_bio
    url: https://api.example.com/me
    method: PATCH
    content_type: application/json
    headers:
      Authorization: Bearer ${login.token}
    body:
      bio: "hello from yapi"
    expect:
      status: [200, 204]
```

## cli output

```
$ yapi run user.yapi

{
  "id": 1,
  "name": "John"
}

[PASS] status: 200
[PASS] headers.Content-Type: application/json
[PASS] body.id: 1
[FAIL] body.name: expected "Jane", got "John"
```

## test mode

```bash
yapi test *.yapi           # run all, exit 1 if any fail
yapi test --verbose        # show all assertions
yapi test --bail           # stop on first failure
```
