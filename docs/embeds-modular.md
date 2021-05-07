---
title: Modular Configurator
---

## Get started

Generate code snippet under Admin Panel -> Product -> Copy Embed Code (button).

## Usage

This embed is available in modal-only view, which means that you need to enable it. There are two possible ways to achieve this.

1. By using `data-mimeeq-render-at-mount` attribute on `data-mimeeq` element. This will enable modal immediately after page load.
2. By firing `mimeeq-show-modular` event on your `document`. This allows you to enable it on demand but requires a bit of coding on host site. You can find full example [here](/guides-modular).

## Parameters

When you generate the code snippet, you can customize things like:

- disabling UI elements
- changing localization
- customizing brand colors
- customizing font
- customizing display style

## Example code

```html
<div
  data-mimeeq
  data-mimeeq-short-code="E3AN1J"
  data-withhistory
  data-locale="en"
></div>
<script
  src="https://jrdgrq09nk.execute-api.eu-central-1.amazonaws.com/api/cpq/get-embed-short-code-data?shortCode=E3AN1J&html=1"
  rel="script"
  type="application/javascript"
  async
></script>
```
