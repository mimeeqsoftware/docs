---
title: Localization
---

The language has to be passed for each embed separately, by defining `data-locale` attribute on
every `data-mimeeq` element. If no language is specified, English will be used by default.

### Currently supported languages (and codes)

- English: **en**
- English (US): **en-US**
- Polish: **pl**

## Example

Following example uses Polish instead of English for following configurator.

```html
<div data-mimeeq data-mimeeq-short-code="F95SNI" data-withhistory data-locale="pl"></div>
<script src="https://jrdgrq09nk.execute-api.eu-central-1.amazonaws.com/api/cpq/get-embed-short-code-data?shortCode=F95SNI&html=1" rel="script" type="application/javascript" async></script>
```
