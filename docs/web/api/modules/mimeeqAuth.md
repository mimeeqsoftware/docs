---
id: "mimeeqAuth"
title: "Module: mimeeqAuth"
sidebar_label: "mimeeqAuth"
sidebar_position: 0
custom_edit_url: null
---

Authorization related methods for Mimeeq Embed

## Variables

### authorization

• **authorization**: [`Authorization`](../interfaces/mimeeqApp._mimeeq.Authorization.md)

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
