---
id: "mimeeqApp._mimeeq.Subscription"
title: "Class: Subscription"
sidebar_label: "mimeeqApp.@mimeeq.Subscription"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Subscription

Represents a disposable resource, such as the execution of an Observable. A
Subscription has one important method, `unsubscribe`, that takes no argument
and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()`
method, which will attach a child Subscription to the current Subscription.
When a Subscription is unsubscribed, all its children (and its grandchildren)
will be unsubscribed as well.

## Hierarchy

- **`Subscription`**

  ↳ [`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)

## Implements

- [`SubscriptionLike`](../interfaces/mimeeqApp._mimeeq.SubscriptionLike.md)

## Constructors

### constructor

• **new Subscription**(`initialTeardown?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialTeardown?` | () => `void` | A function executed first as part of the finalization process that is kicked off when {@link #unsubscribe} is called. |

## Properties

### \_addParent

• `Private` **\_addParent**: `any`

Adds a parent to this subscription so it can be removed from the parent if it
unsubscribes on it's own.

NOTE: THIS ASSUMES THAT [_hasParent](mimeeqApp._mimeeq.Subscription.md#_hasparent) HAS ALREADY BEEN CHECKED.

**`param`** The parent subscription to add

___

### \_finalizers

• `Private` **\_finalizers**: `any`

The list of registered finalizers to execute upon unsubscription. Adding and removing from this
list occurs in the {@link #add} and {@link #remove} methods.

___

### \_hasParent

• `Private` **\_hasParent**: `any`

Checks to see if a this subscription already has a particular parent.
This will signal that this subscription has already been added to the parent in question.

**`param`** the parent to check for

___

### \_parentage

• `Private` **\_parentage**: `any`

___

### \_removeParent

• `Private` **\_removeParent**: `any`

Called on a child when it is removed via {@link #remove}.

**`param`** The parent to remove

___

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Implementation of

[SubscriptionLike](../interfaces/mimeeqApp._mimeeq.SubscriptionLike.md).[closed](../interfaces/mimeeqApp._mimeeq.SubscriptionLike.md#closed)

___

### initialTeardown

• `Private` `Optional` **initialTeardown**: `any`

___

### EMPTY

▪ `Static` **EMPTY**: [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

**`nocollapse`**

## Methods

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

___

### unsubscribe

▸ **unsubscribe**(): `void`

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

#### Returns

`void`

#### Implementation of

[SubscriptionLike](../interfaces/mimeeqApp._mimeeq.SubscriptionLike.md).[unsubscribe](../interfaces/mimeeqApp._mimeeq.SubscriptionLike.md#unsubscribe)
