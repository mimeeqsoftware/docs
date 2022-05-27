---
id: "mimeeqApp._mimeeq.ModularObservers"
title: "Interface: ModularObservers"
sidebar_label: "mimeeqApp.@mimeeq.ModularObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).ModularObservers

## Properties

### allSelected

• **allSelected**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

If `true` it means all models on the scene are selected

___

### chosenProductId

• **chosenProductId**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`string`\>

Id of product selected for adding

___

### currentElement

• **currentElement**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`string` \| `string`[]\>

Instance id (or ids if multiselect) of currently selected element

___

### elementAction

• **elementAction**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`ElementAction`](mimeeqApp._mimeeq.ElementAction.md)\>

Currently active action data

___

### hasProducts

• **hasProducts**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

Information if there are any products on the scene.

___

### isDimensionsActive

• **isDimensionsActive**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

If true, scene will display dimensions

___

### sceneSetup

• **sceneSetup**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`SceneSetup`](mimeeqApp._mimeeq.SceneSetup.md)\>

Scene setup options

___

### selectMode

• **selectMode**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`SelectMode`](../enums/mimeeqApp._mimeeq.SelectMode.md)\>

Current selection mode

___

### showCollisionWarning

• **showCollisionWarning**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<`boolean`\>

If true, Collision Warning should be presented to user

___

### slideIds

• **slideIds**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`ActiveSlides`](mimeeqApp._mimeeq.ActiveSlides.md)\>

Ids of elements with slide activated

___

### snapError

• **snapError**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`ModularWarning`](mimeeqApp._mimeeq.ModularWarning.md)\>

Information about Snap point warning modal

___

### toolbarData

• **toolbarData**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`ToolbarData`](mimeeqApp._mimeeq.ToolbarData.md)\>

Information about possible actions and names for currently selected models

___

### variantCodes

• **variantCodes**: [`MimeeqObservable`](../namespaces/mimeeqApp._mimeeq.md#mimeeqobservable)<[`VariantCodes`](mimeeqApp._mimeeq.VariantCodes.md)\>

Map of instance id and variant codes for all elements on scene.
