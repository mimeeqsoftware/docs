---
id: "mimeeqApp._mimeeq.Authorization"
title: "Interface: Authorization"
sidebar_label: "mimeeqApp.@mimeeq.Authorization"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Authorization

Authorization related utils

## Properties

### forgotPassword

• **forgotPassword**: [`ForgotPassword`](../namespaces/mimeeqApp._mimeeq.md#forgotpassword)

Initialize forgot password procedure for email

**`param`** User email

**`returns`**

___

### forgotPasswordSubmit

• **forgotPasswordSubmit**: [`ForgotPasswordSubmit`](../namespaces/mimeeqApp._mimeeq.md#forgotpasswordsubmit)

Submit new password for account

**`param`** User email

**`param`** New password

**`param`** Forget password confirmation code from email

**`returns`** Promise<SuccessResponse | AuthError>

___

### getUserData

• **getUserData**: [`GetUserData`](../namespaces/mimeeqApp._mimeeq.md#getuserdata)

Get current user's data or if not exists current session

**`returns`** A promise resolves to user data or session object if success

___

### resendSignUp

• **resendSignUp**: [`ResendSignUp`](../namespaces/mimeeqApp._mimeeq.md#resendsignup)

Resend SignUp confirmation email

**`param`** User email

**`fires`** @mimeeq#mimeeq-resend-signup-confirm-code

**`returns`** Promise<SuccessResponse | AuthError>

___

### signIn

• **signIn**: [`SignIn`](../namespaces/mimeeqApp._mimeeq.md#signin)

Sign in to Mimeeq account

**`param`** The username (email) to be signed in

**`param`** The password of the username

**`param`** Id of customer we want to sing in

**`returns`** A promise resolves the CognitoUser or error object in case of failure

**`fires`** @mimeeq#mimeeq-user-signed-in

___

### signOut

• **signOut**: [`SignOut`](../namespaces/mimeeqApp._mimeeq.md#signout)

Sign out from Mimeeq

**`fires`** @mimeeq#mimeeq-user-signed-out

**`returns`** A promise resolved if success. On success it return boolean if failure object with error data
