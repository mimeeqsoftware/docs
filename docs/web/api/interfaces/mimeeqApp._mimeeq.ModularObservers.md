---
id: "mimeeqApp._mimeeq.ModularObservers"
title: "Interface: ModularObservers"
sidebar_label: "mimeeqApp.@mimeeq.ModularObservers"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).ModularObservers

## Properties

### allSelected

• **allSelected**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If `true` it means all models on the scene are selected

___

### chosenProductId

• **chosenProductId**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

Id of product selected for adding

___

### currentElement

• **currentElement**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string` \| `string`[]\>

Instance id (or ids if multiselect) of currently selected element

___

### elementAction

• **elementAction**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ElementAction`](mimeeqApp._mimeeq.ElementAction.md)\>

Currently active action data

___

### favSceneShortcode

• **favSceneShortcode**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`string`\>

ID of currently loaded Favourite Scene

___

### hasProducts

• **hasProducts**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

Information if there are any products on the scene.

___

### isDimensionsActive

• **isDimensionsActive**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If true, scene will display dimensions

___

### sceneSetup

• **sceneSetup**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`SceneSetup`](mimeeqApp._mimeeq.SceneSetup.md)\>

Scene setup options

___

### selectMode

• **selectMode**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`SelectMode`](../enums/mimeeqApp._mimeeq.SelectMode.md)\>

Current selection mode

___

### showCollisionWarning

• **showCollisionWarning**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<`boolean`\>

If true, Collision Warning should be presented to user

___

### slideIds

• **slideIds**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ActiveSlides`](mimeeqApp._mimeeq.ActiveSlides.md)\>

Ids of elements with slide activated

___

### snapError

• **snapError**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ModularWarning`](mimeeqApp._mimeeq.ModularWarning.md)\>

Information about Snap point warning modal

___

### toolbarData

• **toolbarData**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`ToolbarData`](mimeeqApp._mimeeq.ToolbarData.md)\>

Information about possible actions and names for currently selected models

___

### variantCodes

• **variantCodes**: [`Observable`](../namespaces/mimeeqApp._mimeeq.md#observable)<[`VariantCodes`](mimeeqApp._mimeeq.VariantCodes.md)\>

Map of instance id and variant codes for all elements on scene.
