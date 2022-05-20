---
id: "mimeeqApp._mimeeq.Observable"
title: "Class: Observable<T>"
sidebar_label: "mimeeqApp.@mimeeq.Observable"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Observable

A representation of any set of values over any amount of time. This is the most basic building block
of RxJS.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Subscribable`](../interfaces/mimeeqApp._mimeeq.Subscribable.md)<`T`\>

## Constructors

### constructor

• **new Observable**<`T`\>(`subscribe?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscribe?` | (`this`: [`Observable`](mimeeqApp._mimeeq.Observable.md)<`T`\>, `subscriber`: [`Subscriber`](mimeeqApp._mimeeq.Subscriber.md)<`T`\>) => [`TeardownLogic`](../namespaces/mimeeqApp._mimeeq.md#teardownlogic) | the function that is called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify of a successful completion. |

## Properties

### operator

• **operator**: [`Operator`](../interfaces/mimeeqApp._mimeeq.Operator.md)<`any`, `T`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### source

• **source**: [`Observable`](mimeeqApp._mimeeq.Observable.md)<`any`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### create

▪ `Static` **create**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

Creates a new Observable by calling the Observable constructor

**`owner`** Observable

**`method`** create

**`nocollapse`**

**`deprecated`** Use `new Observable()` instead. Will be removed in v8.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

a new observable

## Methods

### forEach

▸ **forEach**(`next`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

Used as a NON-CANCELLABLE means of subscribing to an observable, for use with
APIs that expect promises, like `async/await`. You cannot unsubscribe from this.

**WARNING**: Only use this with observables you *know* will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like {@link timeout}, {@link take},
{@link takeWhile}, or {@link takeUntil} amongst others.

## Example

```ts
import { interval, take } from 'rxjs';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
  let total = 0;

  await source$.forEach(value => {
    total += value;
    console.log('observable -> ' + value);
  });

  return total;
}

getTotal().then(
  total => console.log('Total: ' + total)
);

// Expected:
// 'observable -> 0'
// 'observable -> 1'
// 'observable -> 2'
// 'observable -> 3'
// 'Total: 6'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | a handler for each value emitted by the observable |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

a promise that either resolves on observable completion or
 rejects with the handled error

▸ **forEach**(`next`, `promiseCtor`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

**`deprecated`** Passing a Promise constructor will no longer be available
in upcoming versions of RxJS. This is because it adds weight to the library, for very
little benefit. If you need this functionality, it is recommended that you either
polyfill Promise, or you create an adapter to convert the returned native promise
to whatever promise implementation you wanted. Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | a handler for each value emitted by the observable |
| `promiseCtor` | [`PromiseConstructorLike`](../namespaces/mimeeqApp._mimeeq.md#promiseconstructorlike) | a constructor function used to instantiate the Promise |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

a promise that either resolves on observable completion or
 rejects with the handled error

___

### lift

▸ **lift**<`R`\>(`operator?`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`R`\>

Creates a new Observable, with this Observable instance as the source, and the passed
operator defined as the new observable's operator.

**`method`** lift

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
If you have implemented an operator using `lift`, it is recommended that you create an
operator by simply returning `new Observable()` directly. See "Creating new operators from
scratch" section here: https://rxjs.dev/guide/operators

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator?` | [`Operator`](../interfaces/mimeeqApp._mimeeq.Operator.md)<`T`, `R`\> | the operator defining the operation to take on the observable |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`R`\>

a new observable with the Operator applied

___

### pipe

▸ **pipe**(): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`T`\>

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`T`\>

▸ **pipe**<`A`\>(`op1`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`A`\>

▸ **pipe**<`A`, `B`\>(`op1`, `op2`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`B`\>

▸ **pipe**<`A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`C`\>

▸ **pipe**<`A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`D`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`E`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`E`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`E`, `F`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`F`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`G`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`F`, `G`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`G`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`H`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`G`, `H`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`H`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`I`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`H`, `I`\> |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`I`\>

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, ...`operations`): [`Observable`](mimeeqApp._mimeeq.Observable.md)<`unknown`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`H`, `I`\> |
| `...operations` | [`OperatorFunction`](../interfaces/mimeeqApp._mimeeq.OperatorFunction.md)<`any`, `any`\>[] |

#### Returns

[`Observable`](mimeeqApp._mimeeq.Observable.md)<`unknown`\>

___

### subscribe

▸ **subscribe**(`observer?`): [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer?` | [`Partial`](../namespaces/mimeeqApp._mimeeq.md#partial)<[`Observer`](../interfaces/mimeeqApp._mimeeq.Observer.md)<`T`\>\> |

#### Returns

[`Subscription`](mimeeqApp._mimeeq.Subscription.md)

#### Implementation of

[Subscribable](../interfaces/mimeeqApp._mimeeq.Subscribable.md).[subscribe](../interfaces/mimeeqApp._mimeeq.Subscribable.md#subscribe)

▸ **subscribe**(`next`): [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`value`: `T`) => `void` |

#### Returns

[`Subscription`](mimeeqApp._mimeeq.Subscription.md)

#### Implementation of

Subscribable.subscribe

▸ **subscribe**(`next?`, `error?`, `complete?`): [`Subscription`](mimeeqApp._mimeeq.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next?` | (`value`: `T`) => `void` |
| `error?` | (`error`: `any`) => `void` |
| `complete?` | () => `void` |

#### Returns

[`Subscription`](mimeeqApp._mimeeq.Subscription.md)

#### Implementation of

Subscribable.subscribe

___

### toPromise

▸ **toPromise**(): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

**`deprecated`** Replaced with {@link firstValueFrom} and {@link lastValueFrom}. Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

▸ **toPromise**(`PromiseCtor`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

**`deprecated`** Replaced with {@link firstValueFrom} and {@link lastValueFrom}. Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | [`PromiseConstructor`](../interfaces/mimeeqApp._mimeeq.PromiseConstructor.md) |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

▸ **toPromise**(`PromiseCtor`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>

**`deprecated`** Replaced with {@link firstValueFrom} and {@link lastValueFrom}. Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | [`PromiseConstructorLike`](../namespaces/mimeeqApp._mimeeq.md#promiseconstructorlike) |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`T`\>
