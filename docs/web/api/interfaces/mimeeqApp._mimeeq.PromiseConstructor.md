---
id: "mimeeqApp._mimeeq.PromiseConstructor"
title: "Interface: PromiseConstructor"
sidebar_label: "mimeeqApp.@mimeeq.PromiseConstructor"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).PromiseConstructor

## Constructors

### constructor

• **new PromiseConstructor**<`T`\>(`executor`)

Creates a new Promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` | A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error. |

## Properties

### [species]

• `Readonly` **[species]**: [`PromiseConstructor`](mimeeqApp._mimeeq.PromiseConstructor.md)

___

### prototype

• `Readonly` **prototype**: [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`any`\>

A reference to the prototype.

## Methods

### all

▸ **all**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](mimeeqApp._mimeeq.Iterable.md)<`T` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>[]\>

A new Promise.

▸ **all**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

A new Promise.

___

### allSettled

▸ **allSettled**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

A new Promise.

▸ **allSettled**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`PromiseSettledResult`](../namespaces/mimeeqApp._mimeeq.md#promisesettledresult)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](mimeeqApp._mimeeq.Iterable.md)<`T` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`T`\>\> | An array of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`PromiseSettledResult`](../namespaces/mimeeqApp._mimeeq.md#promisesettledresult)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>\>[]\>

A new Promise.

___

### race

▸ **race**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](mimeeqApp._mimeeq.Iterable.md)<`T` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`\>\>

A new Promise.

▸ **race**<`T`\>(`values`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`[`number`]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<[`Awaited`](../namespaces/mimeeqApp._mimeeq.md#awaited)<`T`[`number`]\>\>

A new Promise.

___

### reject

▸ **reject**<`T`\>(`reason?`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

Creates a new rejected promise for the provided reason.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `any` | The reason the promise was rejected. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

A new rejected Promise.

___

### resolve

▸ **resolve**(): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

Creates a new resolved promise.

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

A resolved promise.

▸ **resolve**<`T`\>(`value`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| [`PromiseLike`](mimeeqApp._mimeeq.PromiseLike.md)<`T`\> | A promise. |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

A promise whose internal state matches the provided promise.
