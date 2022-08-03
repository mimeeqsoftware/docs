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

## Authorization Functions

- [initialize](mimeeqApp.md#initialize)

## Embed Functions

- [mountConfigurator](mimeeqApp.md#mountconfigurator)

## References

### mountARPage

Renames and re-exports [mountLogin](mimeeqApp.md#mountlogin)

___

### mountFavourites

Renames and re-exports [mountLogin](mimeeqApp.md#mountlogin)

___

### mountList

Renames and re-exports [mountLogin](mimeeqApp.md#mountlogin)

___

### mountUserProfile

Renames and re-exports [mountLogin](mimeeqApp.md#mountlogin)

## Properties

### mountLogin

• **mountLogin**: `any`

## Variables

### actions

• `Const` **actions**: [`Actions`](../interfaces/mimeeqApp._mimeeq.Actions.md)

Configurator related actions

___

### authorization

• `Const` **authorization**: [`Authorization`](../interfaces/mimeeqApp._mimeeq.Authorization.md)

Package of authorization related methods. Calls AWS Cognito internally

___

### observers

• `Const` **observers**: [`Observers`](../interfaces/mimeeqApp._mimeeq.Observers.md)

Configurator data observers

___

### utils

• `Const` **utils**: [`Utils`](../interfaces/mimeeqApp._mimeeq.Utils.md)

Common methods used to interact with configurator

## Authorization Functions

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

## Embed Functions

### mountConfigurator

▸ **mountConfigurator**(`payload`): `Promise`<`void`\>

Mount configurator. Either 2d variant of 3d/modular.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountConfiguratorPayload`](../interfaces/mimeeqApp._mimeeq.MountConfiguratorPayload.md) |

#### Returns

`Promise`<`void`\>
