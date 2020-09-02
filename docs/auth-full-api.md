---
title: Full API
---

Authentication library exposes a `mimeeqAuth` object accessible globally via `window`. 
This library exposes various methods that can be used to integrate your website with Mimeeq
Authentication in many ways.

:::caution

Please make sure to have authentication library alongside with `data-mimeeq-login` element 
added to your site. None of the methods will work without it. You can find required snippet under
Admin Panel -> Settings -> Login Code (button). 

:::

Library loads asynchronously which means that `mimeeqAuth` object is not available immediately after page load.
To make sure library is loaded when you use it, you need to listen for `mimeeq-auth-loaded` event, for example:

```js
document.addEventListener('mimeeq-auth-loaded', () => {
    mimeeqAuth.authorization.signOut().then(() => {
        window.location.reload()
    })
})
```

## mimeeqAuth.mountLogin()

This function renders login modal which handles full authentication flow out of the box. 

### Parameters

| Name           | Type              | Default | Output | Description                                                                                                     |
| -------------- | ----------------- | ------- | --- | --------------------------------------------------------------------------------------------------------------- |
| onLoginSuccess | function |         | `User` object or `Error`| Callback fired on successful sign in. |
| locale         | string            | en      | | Country Code                                                                                          |

### Usage

```js
mimeeqAuth.mountLogin({
    onLoginSuccess: res => {
        window.location.reload()
    }
})
```
## mimeeqAuth.authorization.signIn()

You can use this method to log in programmatically using a fully custom UI.

### Usage

```js
mimeeqAuth.authorization.signIn(email, password)
```

This method returns `Promise` with `User` object, or thrown an error in case of failure.

## mimeeqAuth.authorization.signOut()

Logs out current user.

### Usage

```js
mimeeqAuth.authorization.signOut().then(() => {
    window.location.reload()
})
```

## mimeeqAuth.mountUserProfile()

This methods display modal with user details, including password and other credentials
management.

### Parameters

| Name           | Type              | Default | Description                                                                                                     |
| -------------- | ----------------- | -------  | --------------------------------------------------------------------------------------------------------------- |
| locale         | string            | en      | Country Code                                                                                          |

## mimeeqAuth.authorization.getUserData()

Use this method to get information about currently logged in user. This is useful for
reading current state of authentication or accessing current user details.

### Usage

```js
mimeeqAuth.authorization.getUserData().then(user => {
    if (user) {
        // logged in
        console.log(user)
    } else {
        // logged out
    }
}).catch(err => {
    console.error(err)
})
```

### Response

This method returns `User` object.

| Key       | Data Type | Example |
| --------- | --------- | -------  | 
| firstName | string    | John     | 
| lastName  | string    | Doe  | 
| email     | string    | john@example.com |
