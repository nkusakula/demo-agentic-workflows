# API Reference

## Installation

```bash
npm install @example/demo-api
```

## Quick start

### Create a user

```js
const { createUser } = require("@example/demo-api");

const user = await createUser({ name: "Ada Lovelace", email: "ada@example.com" });
console.log(user.id, user.email);
```

`createUser(payload)` creates an account and returns a `{ id, name, email, role, createdAt }` record.
`payload.role` defaults to `"member"`; pass `"admin"` to create an admin account.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser({ name, email, role? })` | `{ id, name, email, role, createdAt }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v0.9** — initial release with `createUser(name, email)`.
- **v1.0** — `createUser` refactored to accept a single payload object `{ name, email, role? }`; return value now includes `role`.
