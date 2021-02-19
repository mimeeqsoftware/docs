---
title: Introduction
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
