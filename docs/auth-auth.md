---
title: Auth
---

## mimeeqAuth.mountLogin()

This function renders login modal which handles full authentication flow out of the box.

#### Parameters

| Name           | Type     | Default | Output        | Description                           |
| -------------- | -------- | ------- | ------------- | ------------------------------------- |
| onLoginSuccess | function |         | `User` object | Callback fired on successful sign in. |
| locale         | string   | en      |               | Country Code                          |

#### Usage

```js
mimeeqAuth.mountLogin({
  onLoginSuccess: (res) => {
    window.location.reload()
  },
})
```

## mimeeqAuth.authorization.signIn()

You can use this method to log in programmatically using a fully custom UI.

#### Usage

```js
mimeeqAuth.authorization.signIn(email, password)
```

This method returns `Promise` with `User` object, or thrown an error in case of failure.

## mimeeqAuth.authorization.signOut()

Logs out current user.

#### Usage

```js
mimeeqAuth.authorization.signOut().then(() => {
  window.location.reload()
})
```
