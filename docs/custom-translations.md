---
title: Custom Translations
---

You can overwrite some of the default messages for your website or specific language.
To do this, you need to define `window.mimeeqCustomMessages` object with translations
in the end of your `<head>` section.

### Usage

This example includes all available keys for translation and usage.

```html
<script>
window.mimeeqCustomMessages = {
    // finish button
    "header3d.finish": "Finish", // modular product
    "historymodule.panelmenufooter.finish": "Finish", // 2d/3d product

    // Sign in modal
    "modallogin.header.login": "Sign in", // modal title
    "signinPage.title": "Log in to your account" // modal subtitle
    "signinPage.description": "", // modal description
    "signinPage.form.email": "Email Address", // email field label
    "signinPage.form.forgotPassword": "Forgot?", // forgot password button
    "signinPage.form.password": "Password", // password field label
    "signinPage.form.submitBtn": "Log in", // submit button
    "signinPage.form.submitting": "Submitting...", // info during submitting/logging

    // forgot password modal
    "modallogin.header.forgot": "Forgot password", // modal title
    "forgotPasswordPage.description": "Enter your email address and we will send you a code to enter on the next screen", // description above the form
    "forgotPasswordPage.form.email": "Email Address", // email field label
    "forgotPasswordPage.form.submitBtn": "Reset Password", // submit button text
    "forgotPasswordPage.form.submitting": "Submitting...", // submitting text
    "forgotPasswordPage.title": "Forgot password?", // Forgot password modal subtitle

    // new password form
    "NewPasswordRequired": "New password required", // New password modal subtitle
    "newPasswordForgotPage.description": "An email is sent with a security code to enter below", // description above the form 
    "newPasswordForgotPage.form.code": "Code",
    "newPasswordForgotPage.form.code.hint": "Check your email",// New password form hint for code fields
    "newPasswordForgotPage.form.username": "Username",

    // resend verification link button
    "resendconfirm.modal.close": "Close",
    "resendconfirm.modal.confirmation": "Your code has been resent. Please check your email",
    "signupSuccessPage.resendEmail.link": "Resend email link", // resend button text

    // User Profile Modal
    "editprofile.modal.title": "Profile", // title
    "editprofile.modal.form.email": "Email",
    "editprofile.modal.form.firstName": "First name",
    "editprofile.modal.form.lastName": "Last name",
    "editprofile.modal.form.password": "Password",
    "editprofile.modal.form.phoneNumber": "Phone number",
    "editprofile.modal.form.defaultuserlang": "Default user language",
    "editprofile.modal.removeAccount": "Delete my profile", // remove account button text
    "settings.language.symbol": "Symbol",
    "settings.language.symbol.en": "English",
    "settings.language.symbol.pl": "Polish",
    "settings.language.symbol.de": "Deutsch",
    "settings.language.symbol.en-US": "English US",
    "settings.language.symbol.en-us": "English US",

    // Change password form
    "changePasswordPage.form.submitBtn": "Change password",
    "changepassword.modal.form.header.currentPassword": "Current password",
    "changepassword.modal.form.header.newPassword": "New password",
    "changepassword.modal.form.password": "Password",
    "changepassword.modal.form.repeatPassword": "Repeat Password",
    "changepassword.modal.save": "Save",
    "changepassword.modal.title": "Change password",

    // delete accout modal
    "confirmdelete.user.title": "Are you sure", // title
    "confirmdelete.user.text1": "To confirm you wish to delete your profile from from type DELETE in the box provided, this action cannot be undone", // subtitle

    // Authentication errors
    "CodeMismatch": "Invalid verification code provided, please try again.", // displayed when wrong verification code entered at new password form
    "IncorrectEmail": "Old password is incorrect",
    "IncorrectEmailOrPassword": "Email or password is incorrect",
    "InvalidCaptcha": "Invalid captcha",
    "InvalidPassword": "Invalid password",
    "LimitExceeded": "Attempt limit exceeded, please try after some time.",
    "NoAccess": "You have no access",
    "UsedPassword": "Password has to be different than 10 previous passwords",
    "UserIsDisabled": "You Account is Blocked, please contact your administrator",
    "UserNotConfirmed": "Email is not verified",
    "UserNotFound": "User not found",
    "UsernameExists": "An account with the given email already exists",
    "error.code.NotAuthorizedException": "Password is incorrect",
    "error.code.UsernameExistsException": "This email already exists",
    "error.code.forbidden": "Access denied/forbidden",

    // validation errors
    "validation.confirmPassword": "Passwords are different",
    "validation.email": "This is not correct email",
    "validation.required": "Required",
    "validator.invalidLength": "Password should have at least 8 chars",
    "validator.invalidPasswordRegex": "Password should contain 1 lowercase, 1 uppercase, 1 number and 1 special char",
    "validator.invalidRegex": "Invalid regex"
}
</script>
```

### Handling multiple languages

```html
<script>
window.mimeeqCustomMessages = {
    "en": {
        "header3d.finish": "Next",
        "historymodule.panelmenufooter.finish": "Next"
    },
    "pl": {
        "header3d.finish": "Dalej",
        "historymodule.panelmenufooter.finish": "Dalej"
    },
}
</script>
```
