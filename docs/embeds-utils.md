---
title: Utils
---

## Image Generation

Method: mimeeqApp.utils.takeScreenshot()

You can use this method to generate an image from the current canvas state, method is called screenshot but you are able to control the size of the image and the type, png or jpg.

#### Parameters

| Name             | Type                              | Default | Description                                                                                                                                                                          |
| ---------------- | --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| extension        | string                            | png     | Extension of file. Based on that image has set proper MimeType. Accepts only png, jpg and jpeg.                                                                                      |
| size             | number                            | 3072    | Width of image. Height will be set automatically based on canvas aspect ratio. On iOS powered mobiles it may cause reloads if size is bigger then 2k. We recommend 1k for ecommerce. |
| backgroundColor  | string                            | #FFFFFF | If provided, will be used for background on jpeg file. Accepts only hex and hexa format.                                                                                             |
| customDimensions | { width: number, height: number } |         | If provided, it will overwrite size and/or automatically calculated height.                                                                                                          |
| autozoom         | boolean                           | false   | If `true`, it will do zoom out on canvas to make sure product if fully visible.                                                                                                      |
| cameraReset      | boolean                           | false   | If `true`, it will reset camera to initial position (position from 1st camera at scene settings).                                                                                    |

#### Usage

```js
mimeeqApp.utils
    .takeScreenshot(fileName, extension, size, backgroundColor, customDimensions, autozoom)
    .then((base64) => {
        console.log("Image:", base64)
    })
```

This method returns `Promise` with base64 string with image, or thrown an error in case of failure.


## Short Code Generation

Method: mimeeqApp.utils.getShortcode(productId, configurationCode)

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
