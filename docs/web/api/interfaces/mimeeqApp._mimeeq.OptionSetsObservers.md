---
id: "mimeeqApp._mimeeq.OptionSetsObservers"
title: "Interface: OptionSetsObservers"
sidebar_label: "mimeeqApp.@mimeeq.OptionSetsObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).OptionSetsObservers

## Properties

### blockGroups

• **blockGroups**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`BlockGroupWithStatus`](mimeeqApp._mimeeq.BlockGroupWithStatus.md)[]\>

List of all block groups with added info about actually selected options

___

### blocks

• **blocks**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`PreparedBlock`](mimeeqApp._mimeeq.PreparedBlock.md)[]\>

List of blocks for currently selected product. Should be used for regular products and if only 1 product selected at modular. All hidden options are filtered out

___

### imageWidgetActiveBlock

• **imageWidgetActiveBlock**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ImageWidgetBlock`](mimeeqApp._mimeeq.ImageWidgetBlock.md)\>

Active/opened Image/Texture Upload widget data. Used to differentiate to which block selected images from library should be applied.

___

### imageWidgetImages

• **imageWidgetImages**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ImageWidgetImage`](mimeeqApp._mimeeq.ImageWidgetImage.md)[]\>

List of images at library for current customer/product

___

### imageWidgetIsLibraryOpen

• **imageWidgetIsLibraryOpen**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If `true` Image/Texture Upload widget Library modal is opened

___

### imageWidgetSelectedImage

• **imageWidgetSelectedImage**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

ID of selected image for currently active block (if any)

___

### multiBlocks

• **multiBlocks**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`MultiBlocks`](mimeeqApp._mimeeq.MultiBlocks.md)\>

List of shared blocks for all selected products. Should be used if more than 1 product selected at modular.

___

### selectedOptions

• **selectedOptions**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`Record`<`string`, [`SelectedOptions`](../namespaces/mimeeqApp._mimeeq.md#selectedoptions)\>\>

List of actually selected options
