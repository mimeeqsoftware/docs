---
id: "mimeeqApp._mimeeq.PricingObservers"
title: "Interface: PricingObservers"
sidebar_label: "mimeeqApp.@mimeeq.PricingObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).PricingObservers

## Properties

### isPriceLoading

• **isPriceLoading**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

If `true`, price is being loaded. Can be used to display loader.

___

### maximumFractionDigits

• **maximumFractionDigits**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`number`\>

Maximum number of fraction digits to be shown at prices

___

### minimumFractionDigits

• **minimumFractionDigits**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`number`\>

Minimum number of fraction digits to be shown at prices

___

### modularPrices

• **modularPrices**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`ModularPrices`](mimeeqApp._mimeeq.ModularPrices.md)\>

Map of prices for all unique configurations. Used at modular.

___

### priceOptions

• **priceOptions**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`PriceOptions`](../namespaces/mimeeqApp._mimeeq.md#priceoptions)\>

List of available price types for current customer

___

### priceType

• **priceType**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`PriceType`](mimeeqApp._mimeeq.PriceType.md)\>

Currently selected price type data

___

### prices

• **prices**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`PriceData`](mimeeqApp._mimeeq.PriceData.md)\>

Price data for current configuration. Applicable only for regular products.

___

### quantity

• **quantity**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`number`\>

Currently selected quantity

___

### totalPriceModular

• **totalPriceModular**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`number`\>

Total price for whole modular product
