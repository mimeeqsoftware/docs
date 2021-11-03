---
title: Utils
---

## Image Generation

Method: mimeeqApp.utils.takeScreenshot()

You can use this method to generate an image from the current canvas state, method is called screenshot but you are able to control the size of the image and the type, png or jpg.

#### Parameters

| Name                 | Type                              | Default | Description                                                                                                                                                                                                                                                            |
| -------------------- | --------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| extension            | string                            | png     | Extension of file. Based on that image has set proper MimeType. Accepts only png, jpg and jpeg.                                                                                                                                                                        |
| size                 | number                            | 3072    | Width of image. Height will be set automatically based on canvas aspect ratio. On iOS powered mobiles it may cause reloads if size is bigger then 2k. We recommend 1k for ecommerce.                                                                                   |
| backgroundColor      | string                            | #FFFFFF | If provided, will be used for background on jpeg file. Accepts only hex and hexa format.                                                                                                                                                                               |
| customDimensions     | { width: number, height: number } |         | If provided, it will overwrite size and/or automatically calculated height.                                                                                                                                                                                            |
| autozoom             | boolean                           | false   | If `true`, it will do zoom out on canvas to make sure product if fully visible.                                                                                                                                                                                        |
| cameraReset          | boolean                           | false   | If `true`, it will reset camera to initial position (position from 1st camera at scene settings).                                                                                                                                                                      |
| customCameraPosition | string                            |         | JSON string with custom camera position eg. ```{"position":{"x":-1.4827425522188151,"y":1.7029008083897266,"z":-5.265221131049244},"alpha":4.4378873110317825,"beta":1.3718508759876076,"target":{"x":0,"y":0.600077748298645,"z":0},"radius":5.580080441792618}```    |

#### Usage

```js
mimeeqApp.utils
    .takeScreenshot(fileName, extension, size, backgroundColor, customDimensions, autozoom, cameraReset, customCameraPosition)
    .then((base64) => {
        console.log("Image:", base64)
    })
```

This method returns `Promise` with base64 string with image, or thrown an error in case of failure.


## Short Code Generation

Method: mimeeqApp.utils.getShortcode(productId, configurationCode)

When called it will generate unique shortcode for given productId-configurationCode pair. For the same pair shortcode is always the same.

#### Parameters

| Name              | Type                              | Default | Description                                                                                                                                                                          |
| ----------------- | --------------------------------- | ------- | ----------------------------------------------- |
| productId         | string                            |         | Id of product                                   |
| configurationCode | string                            |         | Selected configuration code string              |

#### Usage

```js
mimeeqApp.utils
    .getShortcode(productId, configurationCode)
    .then((shortCode) => {
        console.log("Short code:", shortCode)
    })
```

This method returns `Promise` with generated short code, or thrown an error in case of failure.

## Set price (avaiable from 8th November)

Method: mimeeqApp.utils.setPrice(pricing)

Use this method to set price, currency and delivery time in days (note delivery time only works if product is using MCP for pricing). It accepts price object from API. Should be used with Use Custom Pricing enabled at embed snippet.

NOTE: Currently modular product does not accept price for components. You can only set total price.

#### Parameters

| Name              | Type                              | Default | Description                                                                                                                                                                          |
| ----------------- | --------------------------------- | ------- | ----------------------------------------------- |
| pricing           | [ProductPriceResponse](https://docs.mimeeq.com/api-reference#model-ProductPriceResponse)  |         | Mimeeq Pricing data                             |

## Set pricing settings (avaiable from 8th November)

Method: mimeeqApp.utils.setPricingSettings(minimumFractionDigits, maximumFractionDigits)

#### Parameters

| Name                  | Type                              | Default | Description                                                                                                                                                                          |
| --------------------- | --------------------------------- | ------- | ----------------------------------------------- |
| minimumFractionDigits | number                            | 2       | Minimum number of decimal places                |
| maximumFractionDigits | number                            | 2       | Selected configuration code string              |
