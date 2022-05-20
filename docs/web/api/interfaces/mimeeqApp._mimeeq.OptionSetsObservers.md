---
id: "mimeeqApp._mimeeq.OptionSetsObservers"
title: "Interface: OptionSetsObservers"
sidebar_label: "mimeeqApp.@mimeeq.OptionSetsObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).OptionSetsObservers

## Properties

### blockGroups

• **blockGroups**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`MimeeqBlockGroupWithStatus`](mimeeqApp._mimeeq.MimeeqBlockGroupWithStatus.md)[]\>

List of all block groups with added info about actually selected options

___

### blocks

• **blocks**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`MimeeqPreparedBlock`](mimeeqApp._mimeeq.MimeeqPreparedBlock.md)[]\>

List of blocks for currently selected product. Should be used for regular products and if only 1 product selected at modular. All hidden options are filtered out

___

### multiBlocks

• **multiBlocks**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`MultiBlocks`](mimeeqApp._mimeeq.MultiBlocks.md)\>

List of shared blocks for all selected products. Should be used if more than 1 product selected at modular.

___

### selectedOptions

• **selectedOptions**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`MimeeqSelectedOptions`](../namespaces/mimeeqApp._mimeeq.md#mimeeqselectedoptions)\>

List of actually selected options
