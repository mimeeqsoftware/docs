---
id: "mimeeqApp._mimeeq.PricingObservers"
title: "Interface: PricingObservers"
sidebar_label: "mimeeqApp.@mimeeq.PricingObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).PricingObservers

## Properties

### dealers

• **dealers**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`Dealer`](mimeeqApp._mimeeq.Dealer.md)[]\>

List of available dealers for current user. Not available for tier2

___

### isPriceLoading

• **isPriceLoading**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If `true`, price is being loaded. Can be used to display loader.

___

### maximumFractionDigits

• **maximumFractionDigits**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`number`\>

Maximum number of fraction digits to be shown at prices

___

### minimumFractionDigits

• **minimumFractionDigits**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`number`\>

Minimum number of fraction digits to be shown at prices

___

### modularPrices

• **modularPrices**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ModularPrices`](mimeeqApp._mimeeq.ModularPrices.md)\>

Map of prices for all unique configurations. Used at modular.

___

### priceOptions

• **priceOptions**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`PriceOptions`](../namespaces/mimeeqApp._mimeeq.md#priceoptions)\>

List of available price types for current customer

___

### priceType

• **priceType**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`PriceType`](mimeeqApp._mimeeq.PriceType.md)\>

Currently selected price type data

___

### prices

• **prices**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`PriceData`](mimeeqApp._mimeeq.PriceData.md)\>

Price data for current configuration. Applicable only for regular products.

___

### quantity

• **quantity**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`number`\>

Currently selected quantity

___

### selectedDealer

• **selectedDealer**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`Dealer`](mimeeqApp._mimeeq.Dealer.md)\>

Selected dealer entry

___

### totalPriceModular

• **totalPriceModular**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`number`\>

Total price for whole modular product
