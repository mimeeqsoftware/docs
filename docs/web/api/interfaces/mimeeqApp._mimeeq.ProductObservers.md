---
id: "mimeeqApp._mimeeq.ProductObservers"
title: "Interface: ProductObservers"
sidebar_label: "mimeeqApp.@mimeeq.ProductObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).ProductObservers

## Properties

### configurationCode

• **configurationCode**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

Current configuration code. Only for regular products. Empty at Modular. Please use modular.variantCodes for modular

___

### currentViewId

• **currentViewId**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

Id of currently displayed view. In case of 3d empty value indicates 3d model

___

### hotSpot

• **hotSpot**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`HotSpotInfo`](mimeeqApp._mimeeq.HotSpotInfo.md)\>

Data and location for currently selected hot spot

___

### isLoading

• **isLoading**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If true, main product is being loaded

___

### loader

• **loader**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`Loader`](mimeeqApp._mimeeq.Loader.md)\>

Loader information for 3d scene.

___

### mainProductData

• **mainProductData**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`SimpleProduct`](mimeeqApp._mimeeq.SimpleProduct.md)\>

Data of currently selected product

___

### sku

• **sku**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

sku of current product.
