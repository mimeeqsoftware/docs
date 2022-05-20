---
id: "mimeeqApp._mimeeq.ProductObservers"
title: "Interface: ProductObservers"
sidebar_label: "mimeeqApp.@mimeeq.ProductObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).ProductObservers

## Properties

### configurationCode

• **configurationCode**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`string`\>

Current configuration code. Only for regular products. Empty at Modular. Please use modular.variantCodes for modular

___

### currentViewId

• **currentViewId**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`string`\>

Id of currently visible 2d view.

___

### hotSpot

• **hotSpot**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`HotSpotInfo`](mimeeqApp._mimeeq.HotSpotInfo.md)\>

Data and location for currently selected hot spot

___

### isLoading

• **isLoading**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

If true, main product is being loaded

___

### loader

• **loader**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`MimeeqLoader`](mimeeqApp._mimeeq.MimeeqLoader.md)\>

Loader information for 3d scene.

___

### mainProductData

• **mainProductData**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`SimpleProduct`](mimeeqApp._mimeeq.SimpleProduct.md)\>

Data of currently selected product

___

### sku

• **sku**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`string`\>

sku of current product.
