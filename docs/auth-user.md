---
title: User
---

## mimeeqAuth.mountUserProfile()

This methods display modal with user details, including password and other credentials
management.

#### Parameters

| Name           | Type              | Default | Description                                                                                                     |
| -------------- | ----------------- | -------  | --------------------------------------------------------------------------------------------------------------- |
| locale         | string            | en      | Country Code                                                                                          |

## mimeeqAuth.authorization.getUserData()

Use this method to get information about currently logged in user. This is useful for
reading current state of authentication or accessing current user details.

#### Usage

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

#### Response

This method returns `User` object.

| Key       | Data Type | Example |
| --------- | --------- | -------  | 
| firstName | string    | John     | 
| lastName  | string    | Doe  | 
| email     | string    | john@example.com |
