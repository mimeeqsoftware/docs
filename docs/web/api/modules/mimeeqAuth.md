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

▸ **initialize**(`cognitoConfig`, `s3Config`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

Initialize Auth and bucket with configuration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cognitoConfig` | [`AuthOptions`](../interfaces/mimeeqApp._mimeeq.AuthOptions.md) | Auth instance options |
| `s3Config` | [`Record`](../namespaces/mimeeqApp._mimeeq.md#record)<`string`, `string`\> | S3 configuration |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

___

### mountLogin

▸ **mountLogin**(`payload`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

Renders login modal. Provides forgotten password form as well

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountLoginPayload`](../interfaces/mimeeqApp._mimeeq.MountLoginPayload.md) |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

___

### mountUserProfile

▸ **mountUserProfile**(`payload`): [`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>

Renders login modal. Provides forgotten password form as well

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MountUserProfilePayload`](../interfaces/mimeeqApp._mimeeq.MountUserProfilePayload.md) |

#### Returns

[`Promise`](../namespaces/mimeeqApp._mimeeq.md#promise)<`void`\>
