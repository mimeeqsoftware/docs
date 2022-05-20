---
id: "mimeeqApp._mimeeq.MountConfiguratorPayload"
title: "Interface: MountConfiguratorPayload"
sidebar_label: "mimeeqApp.@mimeeq.MountConfiguratorPayload"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).MountConfiguratorPayload

## Hierarchy

- [`EmbedPayloadPartial`](mimeeqApp._mimeeq.EmbedPayloadPartial.md)

  ↳ **`MountConfiguratorPayload`**

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

### finishScreen

• `Optional` **finishScreen**: `boolean`

If `true` modular will display Finish Screen on load

___

### hash

• `Optional` **hash**: `string`

Currently showed tab hash. Used only to control product tabs through history. It's mostly needed for initial render.

___

### isFavourite

• `Optional` **isFavourite**: `boolean`

If `true` Favourites will be available

___

### isModular

• `Optional` **isModular**: `boolean`

If `true` then render modular configurator

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

### renderOnMount

• `Optional` **renderOnMount**: `boolean`

If `true` embed will be rendered into DOM on mount

___

### shortCode

• `Optional` **shortCode**: `string`

Modular scene short code

___

### uid

• **uid**: `string`

Embed instance unique id. Typically, embed shortcode. If passed app will try to mount into html element with data-mimmeq-shortcode set to this value and use env for this id

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[uid](mimeeqApp._mimeeq.EmbedPayloadPartial.md#uid)

___

### variant

• `Optional` **variant**: `string`

Variant of configurator. Following values are available: Standard - full version of configurator, preview - shows in preview mode (it allows for inactive products), selector - Instead of summary screen it allows to provide callback function to be called, iframe - renders in iframe. Some functionality is blocked in this mode.
Possible values are 'standard'|'preview'|'selector'|'iframe'|'configuratorOnly'

___

### variantCode

• **variantCode**: `string`

Configuration to load

___

### withBackButton

• `Optional` **withBackButton**: `boolean`

If `true` configurator will display back button on header

___

### withWatcher

• `Optional` **withWatcher**: `boolean`

If true will assign "sandbox" logic to components

#### Inherited from

[EmbedPayloadPartial](mimeeqApp._mimeeq.EmbedPayloadPartial.md).[withWatcher](mimeeqApp._mimeeq.EmbedPayloadPartial.md#withwatcher)
