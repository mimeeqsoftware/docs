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
      // Interface
      "header3d.finish": "Finish", // modular product
      "historymodule.panelmenufooter.finish": "Finish", // 2d/3d product
      "historymodule.panelmenufooter.addToCart": "Add to Cart", // 2d/3d product when basket mode
      "optiongroupmenu.selectoptions": "Select Options", // header of Options panel menu
      "modular.summary.relatedProducts": "Related Products", // Tab name of Related Products at Modular summary modal
      "relatedproducts.relatedproducts": "Related Products", // Header over Related Products section at 2d and 3d products

      // prices
      "pricing.info.amountInfo": "Total price includes one time extras of {amount}", // info appearing when price contain one time extra

      // basket
      "addToCart.saving": "Saving...", // Text on Add to Cart button while loader is visible
      "toast.error.required": "Some required fields are missing", // shown if there is some missing required fields
      "toast.basket.adding": "Please wait until we prepare your product and put it into your cart", // shown while adding to cart
      "toast.basket.adding.title": "Adding to Cart" // title of adding to cart toast

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
      "validator.invalidRegex": "Invalid regex",
  
      // AR
      "ar.button": "View in your room",
      "ar.generating": "Generating...",
  
      // AR Desktop modal
      "ar.modal.title": "View in your room",
      "ar.modal.desktopText": "Oops! It looks like you are using a desktop.",
      "ar.modal.desktopScanText": "Please, scan the QR code with the camera app on your mobile device to see the product in AR.",
      "ar.modal.desktopScanText2": "your mobile device to see the product in AR.",
      "ar.modal.copied": "Copied",
      "ar.modal.copyUrl": "Copy Url",
      "ar.modal.desktopText": "Oops! It looks like you are using a desktop.",
      "ar.modal.desktopScanText": "Please, scan the QR code with the camera app on your mobile device to see the product in AR.",
      "ar.modal.close": "Close",
 
      // AR Landing Page
      "ar.landingpage.header": "Beautiful! And now?",
      "ar.landingpage.description": "Click view in room below and see this product come to life",
      "ar.landingpage.button.text": "View in Room",
      "ar.landingpage.button.loading.text": "Loading AR...",
      "ar.landingpage.button.generating.text": "Generating...",
      "ar.landingpage.button.createAnother.text": "Create another",
      "ar.landingpage.image.placeholder.text": "We are generating your AR experience...",
      "ar.landingpage.button.text.goBack": "Go back",
      
      // AR Incompatible Page
      "ar.landingpage.header.incompatible": "Incompatible device",
      "ar.landingpage.description.incompatible": "Look like your device is not AR compatible, {devicesSupported} for a list of devices supported",
      "ar.landingpage.description.devicesSupported": "click here",
  
      // Delivery Info
      "summarypanel.delivery": "<b>Delivery</b>: {valueType, select, number {{type, select, week {{weeks, plural, one {# Week} other {# Weeks}}} month {{months, plural, one {# Month} other {# Months}}} year {{years, plural, one {# Year} other {# Years}}} other {{days, plural, one {# Working Day} other {# Working Days}}} }} other {{days}}}"

  }
</script>
```

### Handling multiple languages

```html
<script>
  window.mimeeqCustomMessages = {
    en: {
      "header3d.finish": "Next",
      "historymodule.panelmenufooter.finish": "Next",
    },
    pl: {
      "header3d.finish": "Dalej",
      "historymodule.panelmenufooter.finish": "Dalej",
    },
  }
</script>
```

### Using HTML in translations

While working with the translations you may want to ocasinally apply some additional styling in text or add url. To allow that we support custom HTML/XML tags in translations thanks to which you can have even more control over you text.

#### Available tags

```html
<b>TEXT</b> - it will bold nested text
<i>TEXT</i> - it will use italics to display nested text
<c>TEXT</c> - nested text will be displayed in Customer accent color
<a>https://example.com|click it</a> - it will add link for text. Make sure to use proper markup for this. While specifying links you should first provide URL at the beggining and then follow it with `|` and link text. In case you want to display url as text you may skip providing label. Then it will use url eg. `<a>https://google.com</a>`. You can pass any of the following values as URL
  - An absolute URL - points to another web site (like `<a>http://www.example.com/default.html</a>`)
  - A relative URL - points to a file within a web site (like `<a>default.htm</a>`)
  - Link to an element with a specified id within the page (like `<a>#section2</a>`)
  - Other protocols (like https://, ftp://, mailto:, file:, etc..)
  - A script (like `<a>javascript:alert('Hello');</a>`)
```

#### Usage
```html
<script>
  window.mimeeqCustomMessages = {
    en: {
      "toast.basket.adding": "<i>Please wait until we prepare your product and put it into your cart</i>", // this will display whole line in italics
      "confirmdelete.user.text1": "To confirm you wish to delete your profile from from type <b>DELETE</b> in the box provided, this action cannot be undone", // DELETE will be bolded
      "pricing.info.amountInfo": "Total price includes one time extras of <c>{amount}</c>", // this will display amount using customer accent color
      "toast.basket.adding": "Please wait until we prepare your product and put it into your <a>https://example.com/cart|cart</a>" // this will add link pointing to cart page.
    }
  }
</script>
```
