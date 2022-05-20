---
id: "mimeeqApp._mimeeq.Observer"
title: "Interface: Observer<T>"
sidebar_label: "mimeeqApp.@mimeeq.Observer"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Observer

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Subscriber`](../classes/mimeeqApp._mimeeq.Subscriber.md)

## Methods

### complete

▸ **complete**(): `void`

#### Returns

`void`

___

### error

▸ **error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

___

### next

▸ **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`
