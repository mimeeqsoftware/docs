---
id: "mimeeqApp._mimeeq.Iterator"
title: "Interface: Iterator<T, TReturn, TNext>"
sidebar_label: "mimeeqApp.@mimeeq.Iterator"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Methods

### next

▸ **next**(...`args`): [`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../namespaces/mimeeqApp._mimeeq.md#iteratorresult)<`T`, `TReturn`\>
