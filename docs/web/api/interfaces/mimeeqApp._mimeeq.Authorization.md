---
id: "mimeeqApp._mimeeq.Authorization"
title: "Interface: Authorization"
sidebar_label: "mimeeqApp.@mimeeq.Authorization"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Authorization

Authorization related utils

## Authentication Properties

### forgotPassword

• **forgotPassword**: [`ForgotPassword`](../namespaces/mimeeqApp._mimeeq.md#forgotpassword)

Initialize forgot password procedure for email

**`Param`**

User email

___

### forgotPasswordSubmit

• **forgotPasswordSubmit**: [`ForgotPasswordSubmit`](../namespaces/mimeeqApp._mimeeq.md#forgotpasswordsubmit)

Submit new password for account

**`Param`**

User email

**`Param`**

New password

**`Param`**

Forget password confirmation code from email

___

### getToken

• **getToken**: [`GetToken`](../namespaces/mimeeqApp._mimeeq.md#gettoken)

If authorized, get user's JWT Token string.

___

### getUserData

• **getUserData**: [`GetUserData`](../namespaces/mimeeqApp._mimeeq.md#getuserdata)

Get current user's data or if not exists current session.
Use this method to get information about currently logged in user. This is useful for
reading current state of authentication or accessing current user details.

#### Usage

```js
mimeeqAuth.authorization
  .getUserData()
  .then((user) => {
    if (user) {
      // logged in
      console.log(user);
    } else {
      // logged out
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

___

### resendSignUp

• **resendSignUp**: [`ResendSignUp`](../namespaces/mimeeqApp._mimeeq.md#resendsignup)

Resend SignUp confirmation email

**`Param`**

User email

**`Fires`**

@mimeeq#mimeeq-resend-signup-confirm-code

___

### signIn

• **signIn**: [`SignIn`](../namespaces/mimeeqApp._mimeeq.md#signin)

Sign in to Mimeeq account

**`Param`**

The username (email) to be signed in

**`Param`**

The password of the username

**`Param`**

Id of customer we want to sing in

**`Fires`**

@mimeeq#mimeeq-user-signed-in

___

### signOut

• **signOut**: [`SignOut`](../namespaces/mimeeqApp._mimeeq.md#signout)

Sign out from Mimeeq

#### Usage

```js
mimeeqAuth.authorization.signOut().then(() => {
  window.location.reload();
});
```

**`Fires`**

@mimeeq#mimeeq-user-signed-out
