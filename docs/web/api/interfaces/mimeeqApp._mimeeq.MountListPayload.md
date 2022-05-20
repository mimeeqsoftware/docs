---
id: "mimeeqApp._mimeeq.MountListPayload"
title: "Interface: MountListPayload"
sidebar_label: "mimeeqApp.@mimeeq.MountListPayload"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).MountListPayload

## Hierarchy

- [`EmbedPayloadPartial`](mimeeqApp._mimeeq.EmbedPayloadPartial.md)

  ↳ **`MountListPayload`**

## Properties

### CDNPath

• `Optional` **CDNPath**: `string`

URL to storage/CDN

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[CDNPath](mimeeqApp._mimeeq.EmbedPayloadPartial.md#cdnpath)

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

### category

• `Optional` **category**: `string`

Current category path

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

### favourite

• `Optional` **favourite**: `string`

Currently selected favourite collection

___

### isFavourite

• `Optional` **isFavourite**: `boolean`

If current view is favourite

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

### manualSort

• `Optional` **manualSort**: `boolean`

If product group should use manual sort

___

### onEventDispatch

• `Optional` **onEventDispatch**: [`EventDispatchCallback`](../namespaces/mimeeqApp._mimeeq.md#eventdispatchcallback)<`any`\>

Custom events callback

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[onEventDispatch](mimeeqApp._mimeeq.EmbedPayloadPartial.md#oneventdispatch)

___

### productGroupId

• `Optional` **productGroupId**: `string`

Id of product group to show. If provided then there are only products from that group.

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

Variant of product list. Can be 'standard', 'modal' or 'listonly'. Standard - render full product list. Modal - same as Standard. Only difference is that it handles scroll of container not window. Listonly generates only list of products with no menu or header.

___

### withWatcher

• `Optional` **withWatcher**: `boolean`

If true will assign "sandbox" logic to components

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[withWatcher](mimeeqApp._mimeeq.EmbedPayloadPartial.md#withwatcher)
