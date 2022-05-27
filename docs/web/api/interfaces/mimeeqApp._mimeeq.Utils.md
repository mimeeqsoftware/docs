---
id: "mimeeqApp._mimeeq.Utils"
title: "Interface: Utils"
sidebar_label: "mimeeqApp.@mimeeq.Utils"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Utils

Set of simple tools for manipulating configurator and obtaining simple data from

## Properties

### addToCart

• **addToCart**: [`AddToCart`](../namespaces/mimeeqApp._mimeeq.md#addtocart)

Calling this method will run add to cart or finish logic.

**`fires`** @mimeeq#mimeeq-add-to-cart

___

### closeConfigurator

• **closeConfigurator**: [`CloseConfigurator`](../namespaces/mimeeqApp._mimeeq.md#closeconfigurator)

Calling this method will close and unmount from DOM tree first occurrence of Mimeeq configurator. It works for all types of configurator.

___

### getShortcode

• **getShortcode**: [`GetShortcode`](../namespaces/mimeeqApp._mimeeq.md#getshortcode)

When called it will generate unique shortcode for given productId-configurationCode pair. For the same pair shortcode is always the same.

```
This method works only for regular products. In case of modular Short Code is returned as part of `mimeeq-add-to-cart` event.
```

**`param`** Id of the product

**`param`** Selected configuration code string

**`returns`** Generated short code

___

### setPrice

• **setPrice**: [`SetPrice`](../namespaces/mimeeqApp._mimeeq.md#setprice)

Use this method to set price, currency and delivery time in days (note delivery time only works if product is using MCP for pricing with the paremter enabled in the product admin panel). It accepts price object from API. It should be used in conjunction with `Use Custom Pricing` enabled at embed snippet.
```
We recommend listening for this event mimeeq-price-change Events, so you know when to request the price from our API end point. Addtionally we reccomend using the price field loader to indicate when prices are being changed, see Events from Host Site
```
```data-mimmeq-use-custom-pricing```
```Currently our modular product configurator does not accept price for components. You can only set the total price.```

**`param`** Mimeeq pricing data

___

### setPricingSettings

• **setPricingSettings**: [`SetPricingSettings`](../namespaces/mimeeqApp._mimeeq.md#setpricingsettings)

This allows you to set the decimal places in the Mimeeq configurator

**`param`** Minimum number of decimal places

**`param`** Maximum number of decimal places

___

### showConfigurator

• **showConfigurator**: [`ShowConfigurator`](../namespaces/mimeeqApp._mimeeq.md#showconfigurator)

Calling this method will mount and render regular configurator. It may be used while you use single configurator with option `Render at page load` disabled while generating code snippet.

___

### showModular

• **showModular**: [`ShowModular`](../namespaces/mimeeqApp._mimeeq.md#showmodular)

Calling this method will mount and render modular configurator. It may be used while you use single Modular configurator with option `Render at page load` disabled while generating code snippet.

___

### takeScreenshot

• **takeScreenshot**: [`TakeScreenshot`](../namespaces/mimeeqApp._mimeeq.md#takescreenshot)

You can use this method to generate an image from the current canvas state, method is called screenshot, but you are able to control the size of the image and the type, png or jpg.

**`param`** Extension of file. Based on that image has set proper MimeType. Accepts only png, jpg and jpeg.

**`param`** Width of image. Height will be set automatically based on canvas aspect ratio. On iOS powered mobiles it may cause reloads if size is bigger than 2k. We recommend 1k for ecommerce.

**`param`** If provided, will be used for background on jpeg file. Accepts only hex and hexa format.

**`param`** If provided, it will overwrite size and/or automatically calculated height.

**`param`** If `true`, it will do zoom out on canvas to make sure product if fully visible.

**`param`** If `true`, it will reset camera to initial position (position from 1st camera at scene settings).

**`param`** JSON string with custom camera position eg. `{"position":{"x":-1.4827425522188151,"y":1.7029008083897266,"z":-5.265221131049244},"alpha":4.4378873110317825,"beta":1.3718508759876076,"target":{"x":0,"y":0.600077748298645,"z":0},"radius":5.580080441792618}`

**`returns`** Base64 image string
