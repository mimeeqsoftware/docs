---
title: Utilities
---

## Image Generation

Method: mimeeqApp.utils.takeScreenshot()

You can use this method to get screenshot of current scene state.

#### Parameters

| Name             | Type                              | Default | Description                                                                                                                                                                          |
| ---------------- | --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| extension        | string                            | png     | Extension of file. Based on that image has set proper MimeType. Accepts only png, jpg and jpeg.                                                                                      |
| size             | number                            | 3072    | Width of image. Height will be set automatically based on canvas aspect ratio. On iOS powered mobiles it may cause reloads if size is bigger then 2k. We recommend 1k for ecommerce. |
| backgroundColor  | string                            | #FFFFFF | If provided, will be used for background on jpeg file. Accepts only hex and hexa format.                                                                                             |
| customDimensions | { width: number, height: number } |         | If provided, it will overwrite size and/or automatically calculated height.                                                                                                          |

#### Usage

```js
mimeeqApp.utils
    .takeScreenshot(fileName, extension, size, backgroundColor, customDimensions)
    .then((base64) => {
        console.log("Image:", base64)
    })
```

This method returns `Promise` with base64 string with image, or thrown an error in case of failure.
