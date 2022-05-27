---
id: "mimeeqApp"
title: "Module: mimeeqApp"
sidebar_label: "mimeeqApp"
sidebar_position: 0
custom_edit_url: null
---

Mimeeq Embed module exposing configurator and auth related methods and data

## Namespaces

- [@mimeeq](../namespaces/mimeeqApp._mimeeq.md)

## Variables

### actions

• **actions**: [`Actions`](../interfaces/mimeeqApp._mimeeq.Actions.md)

___

### authorization

• **authorization**: [`Authorization`](../interfaces/mimeeqApp._mimeeq.Authorization.md)

___

### observers

• **observers**: [`Observers`](../interfaces/mimeeqApp._mimeeq.Observers.md)

___

### utils

• **utils**: [`Utils`](../interfaces/mimeeqApp._mimeeq.Utils.md)

## Functions

### initialize

▸ **initialize**(`cognitoConfig`, `s3Config`): `Promise`<`void`\>

Initialize Auth and bucket with configuration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cognitoConfig` | [`AuthOptions`](../interfaces/mimeeqApp._mimeeq.AuthOptions.md) | Auth instance options |
| `s3Config` | `Record`<`string`, `string`\> | S3 configuration |

#### Returns

`Promise`<`void`\>

___

### mountARPage

▸ **mountARPage**(`payload`): `Promise`<`void`\>

Mount AR landing page

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountARPagePayload`](../interfaces/mimeeqApp._mimeeq.MountARPagePayload.md) |

#### Returns

`Promise`<`void`\>

___

### mountConfigurator

▸ **mountConfigurator**(`payload`): `Promise`<`void`\>

Mount configurator. Either 2d variant of 3d/modular.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountConfiguratorPayload`](../interfaces/mimeeqApp._mimeeq.MountConfiguratorPayload.md) |

#### Returns

`Promise`<`void`\>

___

### mountFavourites

▸ **mountFavourites**(`payload`): `Promise`<`void`\>

Mount list of products along with Configurator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountFavouritesPayload`](../interfaces/mimeeqApp._mimeeq.MountFavouritesPayload.md) |

#### Returns

`Promise`<`void`\>

___

### mountList

▸ **mountList**(`payload`): `Promise`<`void`\>

Mount list of products along with Configurator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountListPayload`](../interfaces/mimeeqApp._mimeeq.MountListPayload.md) |

#### Returns

`Promise`<`void`\>

___

### mountLogin

▸ **mountLogin**(`payload`): `Promise`<`void`\>

Renders login modal. Provides forgotten password form as well

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountLoginPayload`](../interfaces/mimeeqApp._mimeeq.MountLoginPayload.md) |

#### Returns

`Promise`<`void`\>

___

### mountUserProfile

▸ **mountUserProfile**(`payload`): `Promise`<`void`\>

Renders login modal. Provides forgotten password form as well

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountUserProfilePayload`](../interfaces/mimeeqApp._mimeeq.MountUserProfilePayload.md) |

#### Returns

`Promise`<`void`\>
