---
id: "mimeeqApp._mimeeq.EmbedPayloadPartial"
title: "Interface: EmbedPayloadPartial"
sidebar_label: "mimeeqApp.@mimeeq.EmbedPayloadPartial"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).EmbedPayloadPartial

## Hierarchy

- **`EmbedPayloadPartial`**

  ↳ [`MountConfiguratorPayload`](mimeeqApp._mimeeq.MountConfiguratorPayload.md)

## Properties

### CDNPath

• `Optional` **CDNPath**: `string`

URL to storage/CDN

___

### apiPricingUrl

• `Optional` **apiPricingUrl**: `string`

New Pricing URL

___

### baseURL

• `Optional` **baseURL**: `string`

URL to page API

___

### customerId

• **customerId**: `string`

Id of current customer from witch fetch data

___

### elementId

• `Optional` **elementId**: `string`

**`Deprecated`**

Id of HTML element on which mount tree

___

### enableNewPricing

• `Optional` **enableNewPricing**: `string`

If `true` use new pricing

___

### locale

• **locale**: `string`

Code of current locale

___

### onEventDispatch

• `Optional` **onEventDispatch**: [`EventDispatchCallback`](../namespaces/mimeeqApp._mimeeq.md#eventdispatchcallback)<`any`\>

Custom events callback

___

### uid

• **uid**: `string`

Embed instance unique id. Typically, embed shortcode. If passed app will try to mount into html element with data-mimmeq-shortcode set to this value and use env for this id

___

### withWatcher

• `Optional` **withWatcher**: `boolean`

If true will assign "sandbox" logic to components
