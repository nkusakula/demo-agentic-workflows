# API Reference

## Installation

```bash
npm install @example/demo-api
```

## Quick start

### Create a user

```js
const { createUser } = require("@example/demo-api");

const user = await createUser("Ada Lovelace", "ada@example.com");
console.log(user.id, user.email);
```

`createUser(name, email)` creates an account and returns a `{ id, name, email, createdAt }` record.

### Look up a user

```js
const { getUser } = require("@example/demo-api");

const user = await getUser("abc123");
```

## API reference

| Function | Signature | Returns |
|----------|-----------|---------|
| `createUser` | `createUser(name, email)` | `{ id, name, email, createdAt }` |
| `getUser`    | `getUser(id)`             | `user \| null` |

## Changelog

- **v0.9** — initial release with `createUser(name, email)`.
