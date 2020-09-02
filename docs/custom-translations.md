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
    // Finish Button
    "header3d.finish": "Finish", // modular product
    "historymodule.panelmenufooter.finish": "Finish", // 2d/3d product

    "newPasswordForgotPage.description": "An email is sent with a security code to enter below", // New password description above the form
    "newPasswordForgotPage.form.code.hint": "Check your email", // New password form hint for code fields
    "NewPasswordRequired": "New password required", // New password modal subtitle

    "modallogin.header.forgot": "Forgot password", // Forgot Password/New Password modal title
    "forgotPasswordPage.title": "Forgot password?", // Forgot password modal subtitle
    "forgotPasswordPage.description": "Enter your email address and we will send you a code to enter on the next screen", // Forgot password description above the form

    "modallogin.header.login": "Sign in", // Sign in modal title
    "signinPage.title": "Log in to your account" // Sign in modal subtitle
    "signinPage.description": "", // sign in modal description
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
