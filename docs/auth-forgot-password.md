---
title: Forgot Password
---

## mimeeqAuth.mountForgotPassword()

This methods renders modal required for password recovery flow. This functionality requires
available element in the DOM that contains `data-mimeeq-forgot-password` attribute to
render within it.

#### Parameters

| Name           | Type              | Default | Description                                                                                                     |
| -------------- | ----------------- | -------  | --------------------------------------------------------------------------------------------------------------- |
| onSubmit       | function            | en     | Callback when user successfully triggers the recovery process.                                                                                          |

#### Usage

```html
<div data-mimeeq-forgot-password></div>
<script>
  document.addEventListener('mimeeq-auth-loaded', () => {
    mimeeqAuth.mountForgotPassword({
      onSubmit: () => {},
    })
  })
</script>
```

## mimeeqAuth.authorization.forgotPassword(email)

This method executes forgot password procedure by sending email to the customer containing
verification code and fallback URL to set the new password within the application.

#### Parameters

| Name           | Type              | Default | Description                                                                                                     |
| -------------- | ----------------- | -------  | --------------------------------------------------------------------------------------------------------------- |
| email          | string (required) |          | Username or email                                                                                  |

#### Response

Mimeeq returns to `{ success: true }` when the password has been updated successfully.
In case of errors, you will receive self-explaining message about the issue alongside with
error code.

## mimeeqAuth.authorization.forgotPasswordSubmit(email, password, code)

When your user already have verification code, he can provide it along with new password
that should be set.

#### Parameters

| Name           | Type              | Default | Description                                                                                                     |
| -------------- | ----------------- | -------  | --------------------------------------------------------------------------------------------------------------- |
| email          | string (required) |          | Username or email                                                                                  |
| password       | string (required) |          | New password that will be set for the user                                                                                  |
| code           | string (required) |          | Verification code from the email triggered by forgotPassword method                                                                               |

#### Response

Mimeeq returns to `{ success: true }` when the password has been updated successfully. 
In case of errors, you will receive self-explaining message about the issue alongside with
error code.
