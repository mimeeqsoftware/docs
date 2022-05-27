---
id: "mimeeqApp._mimeeq.MountFavouritesPayload"
title: "Interface: MountFavouritesPayload"
sidebar_label: "mimeeqApp.@mimeeq.MountFavouritesPayload"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).MountFavouritesPayload

## Hierarchy

- [`EmbedPayloadPartial`](mimeeqApp._mimeeq.EmbedPayloadPartial.md)

  ↳ **`MountFavouritesPayload`**

## Properties

### CDNPath

• `Optional` **CDNPath**: `string`

URL to storage/CDN

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[CDNPath](mimeeqApp._mimeeq.EmbedPayloadPartial.md#cdnpath)

___

### apiPricingUrl

• `Optional` **apiPricingUrl**: `string`

New Pricing URL

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[apiPricingUrl](mimeeqApp._mimeeq.EmbedPayloadPartial.md#apipricingurl)

___

### appUrl

• `Optional` **appUrl**: `string`

App url for AR return path

___

### baseURL

• `Optional` **baseURL**: `string`

URL to page API

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[baseURL](mimeeqApp._mimeeq.EmbedPayloadPartial.md#baseurl)

___

### customerId

• **customerId**: `string`

Id of current customer from witch fetch data

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[customerId](mimeeqApp._mimeeq.EmbedPayloadPartial.md#customerid)

___

### elementId

• `Optional` **elementId**: `string`

**`deprecated`**
Id of HTML element on which mount tree

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[elementId](mimeeqApp._mimeeq.EmbedPayloadPartial.md#elementid)

___

### enableNewPricing

• `Optional` **enableNewPricing**: `string`

If `true` use new pricing

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[enableNewPricing](mimeeqApp._mimeeq.EmbedPayloadPartial.md#enablenewpricing)

___

### favourite

• `Optional` **favourite**: `string`

Name of selected favourite collection

___

### legacy

• `Optional` **legacy**: `boolean`

If `true` some parameter will use old default values

___

### locale

• **locale**: `string`

Code of current locale

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[locale](mimeeqApp._mimeeq.EmbedPayloadPartial.md#locale)

___

### onEventDispatch

• `Optional` **onEventDispatch**: [`EventDispatchCallback`](../namespaces/mimeeqApp._mimeeq.md#eventdispatchcallback)<`any`\>

Custom events callback

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[onEventDispatch](mimeeqApp._mimeeq.EmbedPayloadPartial.md#oneventdispatch)

___

### productGroupId

• `Optional` **productGroupId**: `string`

**`deprecated`**
not used anymore

___

### renderOnMount

• **renderOnMount**: `boolean`

If `true` embed will be rendered into DOM on mount

___

### uid

• **uid**: `string`

Embed instance unique id. Typically, embed shortcode. If passed app will try to mount into html element with data-mimmeq-shortcode set to this value and use env for this id

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[uid](mimeeqApp._mimeeq.EmbedPayloadPartial.md#uid)

___

### variant

• `Optional` **variant**: `string`

Variant of list. Can be 'standard', 'modal' or 'listonly'. Standard - render full product list. Modal - same as Standard. Only difference is that it handles scroll of container not window. Listonly generates only list of products with no menu or header.

___

### withWatcher

• `Optional` **withWatcher**: `boolean`

If true will assign "sandbox" logic to components

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[withWatcher](mimeeqApp._mimeeq.EmbedPayloadPartial.md#withwatcher)
