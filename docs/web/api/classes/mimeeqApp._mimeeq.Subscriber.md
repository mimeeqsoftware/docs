---
id: "mimeeqApp._mimeeq.Subscriber"
title: "Class: Subscriber<T>"
sidebar_label: "mimeeqApp.@mimeeq.Subscriber"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Subscriber

Implements the [Observer](../interfaces/mimeeqApp._mimeeq.Observer.md) interface and extends the
[Subscription](mimeeqApp._mimeeq.Subscription.md) class. While the [Observer](../interfaces/mimeeqApp._mimeeq.Observer.md) is the public API for
consuming the values of an [Observable](mimeeqApp._mimeeq.Observable.md), all Observers get converted to
a Subscriber, in order to provide Subscription-like capabilities such as
`unsubscribe`. Subscriber is a common type in RxJS, and crucial for
implementing operators, but it is rarely used as a public API.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

  ↳ **`Subscriber`**

## Implements

- [`Observer`](../interfaces/mimeeqApp._mimeeq.Observer.md)<`T`\>

## Constructors

### constructor

• **new Subscriber**<`T`\>(`destination?`)

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
There is no reason to directly create an instance of Subscriber. This type is exported for typings reasons.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)<`any`\> \| [`Observer`](../interfaces/mimeeqApp._mimeeq.Observer.md)<`any`\> |

#### Overrides

[Subscription](mimeeqApp._mimeeq.Subscription.md).[constructor](mimeeqApp._mimeeq.Subscription.md#constructor)

## Properties

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Inherited from

[Subscription](mimeeqApp._mimeeq.Subscription.md).[closed](mimeeqApp._mimeeq.Subscription.md#closed)

___

### destination

• `Protected` **destination**: [`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)<`any`\> \| [`Observer`](../interfaces/mimeeqApp._mimeeq.Observer.md)<`any`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### isStopped

• `Protected` **isStopped**: `boolean`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### EMPTY

▪ `Static` **EMPTY**: [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

**`nocollapse`**

#### Inherited from

[Subscription](mimeeqApp._mimeeq.Subscription.md).[EMPTY](mimeeqApp._mimeeq.Subscription.md#empty)

## Methods

### \_complete

▸ `Protected` **_complete**(): `void`

#### Returns

`void`

___

### \_error

▸ `Protected` **_error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

___

### \_next

▸ `Protected` **_next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

___

### add

▸ **add**(`teardown`): `void`

Adds a finalizer to this subscription, so that finalization will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already {@link #closed},
because it has already been unsubscribed, then whatever finalizer is passed to it
will automatically be executed (unless the finalizer itself is also a closed subscription).

Closed Subscriptions cannot be added as finalizers to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and [Unsubscribable](../interfaces/mimeeqApp._mimeeq.Unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`TeardownLogic`](../namespaces/mimeeqApp._mimeeq.md#teardownlogic) | The finalization logic to add to this subscription. |

#### Returns

`void`

#### Inherited from

[Subscription](mimeeqApp._mimeeq.Subscription.md).[add](mimeeqApp._mimeeq.Subscription.md#add)

___

### complete

▸ **complete**(): `void`

The [Observer](../interfaces/mimeeqApp._mimeeq.Observer.md) callback to receive a valueless notification of type
`complete` from the Observable. Notifies the Observer that the Observable
has finished sending push-based notifications.

#### Returns

`void`

#### Implementation of

[Observer](../interfaces/mimeeqApp._mimeeq.Observer.md).[complete](../interfaces/mimeeqApp._mimeeq.Observer.md#complete)

___

### error

▸ **error**(`err?`): `void`

The [Observer](../interfaces/mimeeqApp._mimeeq.Observer.md) callback to receive notifications of type `error` from
the Observable, with an attached `Error`. Notifies the Observer that
the Observable has experienced an error condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `any` |

#### Returns

`void`

#### Implementation of

[Observer](../interfaces/mimeeqApp._mimeeq.Observer.md).[error](../interfaces/mimeeqApp._mimeeq.Observer.md#error)

___

### next

▸ **next**(`value?`): `void`

The [Observer](../interfaces/mimeeqApp._mimeeq.Observer.md) callback to receive notifications of type `next` from
the Observable, with a value. The Observable may call this method 0 or more
times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

#### Returns

`void`

#### Implementation of

[Observer](../interfaces/mimeeqApp._mimeeq.Observer.md).[next](../interfaces/mimeeqApp._mimeeq.Observer.md#next)

___

### remove

▸ **remove**(`teardown`): `void`

Removes a finalizer from this subscription that was previously added with the {@link #add} method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same finalizer instance of a function or an unsubscribable object to a `Subcription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All finalizer instances are removed to free up memory upon unsubscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`Subscription`](mimeeqApp._mimeeq.Subscription.md) \| [`Unsubscribable`](../interfaces/mimeeqApp._mimeeq.Unsubscribable.md) \| () => `void` | The finalizer to remove from this subscription |

#### Returns

`void`

#### Inherited from

[Subscription](mimeeqApp._mimeeq.Subscription.md).[remove](mimeeqApp._mimeeq.Subscription.md#remove)

___

### unsubscribe

▸ **unsubscribe**(): `void`

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

#### Returns

`void`

#### Overrides

[Subscription](mimeeqApp._mimeeq.Subscription.md).[unsubscribe](mimeeqApp._mimeeq.Subscription.md#unsubscribe)

___

### create

▸ `Static` **create**<`T`\>(`next?`, `error?`, `complete?`): [`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)<`T`\>

A static factory for a Subscriber, given a (potentially partial) definition
of an Observer.

**`nocollapse`**

**`deprecated`** Do not use. Will be removed in v8. There is no replacement for this
method, and there is no reason to be creating instances of `Subscriber` directly.
If you have a specific use case, please file an issue.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next?` | (`x?`: `T`) => `void` | The `next` callback of an Observer. |
| `error?` | (`e?`: `any`) => `void` | The `error` callback of an Observer. |
| `complete?` | () => `void` | The `complete` callback of an Observer. |

#### Returns

[`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)<`T`\>

A Subscriber wrapping the (partially defined)
Observer represented by the given arguments.
