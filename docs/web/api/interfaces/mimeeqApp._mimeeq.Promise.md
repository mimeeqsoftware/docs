---
id: "mimeeqApp._mimeeq.Promise"
title: "Interface: Promise<T>"
sidebar_label: "mimeeqApp.@mimeeq.Promise"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Promise

Represents the completion of an asynchronous operation

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | (`reason`: `any`) => `TResult` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T` \| `TResult`\>

A Promise for the completion of the callback.

___

### finally

▸ **finally**(`onfinally?`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

A Promise for the completion of the callback.

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.
