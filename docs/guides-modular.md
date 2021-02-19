---
title: Handling state of modular configurator
---

### Open modular configurator on button click

```js
document.getElementById("modularButton").addEventListener("click", () => {
  document.dispatchEvent(new Event("mimeeq-show-modular"))
})
```

### Open modular configurator on page load when using shareable URL

```js
window.onload = () => {
  if (window.location.href.indexOf("variantCode") > -1) {
    document.addEventListener("mimeeq-app-loaded", () => {
      document.dispatchEvent(new Event("mimeeq-show-modular"))
    })
  }
}
```
