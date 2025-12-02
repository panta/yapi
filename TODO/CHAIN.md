# yapi chaining syntax design

## single file, multiple requests

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

  - name: get_profile
    url: https://api.example.com/me
    headers:
      Authorization: Bearer ${login.access_token}

  - name: update_bio
    url: https://api.example.com/me
    method: PATCH
    content_type: application/json
    headers:
      Authorization: Bearer ${login.access_token}
    body:
      bio: "hello from yapi"
```

## variable passing

previous response bodies are accessible via `${step_name.json_path}`:

```yaml
chain:
  - name: auth
    url: https://api.com/login
    # response: { "token": "abc123", "user": { "id": 42 } }

  - name: fetch
    url: https://api.com/users/${auth.user.id}
    headers:
      Authorization: Bearer ${auth.token}
```

## backwards compat

single request files stay the same (no `chain` key):

```yaml
yapi: v1
url: https://api.com/health
```
