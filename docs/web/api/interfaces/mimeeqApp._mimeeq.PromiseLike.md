---
id: "mimeeqApp._mimeeq.PromiseLike"
title: "Interface: PromiseLike<T>"
sidebar_label: "mimeeqApp.@mimeeq.PromiseLike"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).PromiseLike

## Type parameters

| Name |
| :------ |
| `T` |

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`TResult1` \| `TResult2`\>

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

[`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.
