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

:::note

This method works only for regular products. In case of modular Short Code is returned as part of _mimeeq-add-to-cart_ event.

:::

#### Parameters

| Name              | Type                              | Default | Description                                                                                                                                                                          |
| ----------------- | --------------------------------- | ------- | ----------------------------------------------- |
| productId         | string                            |         | Id of product                                   |
| configurationCode | string                            |         | Selected configuration code string              |

#### Usage Shortcode

```js
mimeeqApp.utils
    .getShortcode(productId, configurationCode)
    .then((shortCode) => {
        console.log("Short code:", shortCode)
    })
```

This method returns `Promise` with generated short code, or thrown an error in case of failure.

## Set price

Method: mimeeqApp.utils.setPrice(pricing)

Use this method to set price, currency and delivery time in days (note delivery time only works if product is using MCP for pricing with the paremter enabled in the product admin panel). It accepts price object from API. It should be used in conjunction with __"Use Custom Pricing"__ enabled at embed snippet.



:::note

We recoomend listening for this event **mimeeq-price-change** [Events](https://docs.mimeeq.com/events#generic-events) so you know when to request the price from our API end point.  Addtionally we reccomend using the price field loader to indicate when prices are being changed, see [Events from Host Site](https://docs.mimeeq.com/events#events-that-can-be-triggered-by-the-host-site)

:::

```
data-mimeeq-use-custom-pricing
```

:::caution

Currently our modular product configurator does not accept price for components. You can only set the total price.

:::

#### Parameters

| Name              | Type                              | Default | Description                                                                                                                                                                          |
| ----------------- | --------------------------------- | ------- | ----------------------------------------------- |
| pricing           | [ProductPriceResponse](https://docs.mimeeq.com/api-reference#model-ProductPriceResponse)  |         | Mimeeq Pricing data                             |

#### Usage Set Price

```js
mimeeqApp.utils
    .setPrice(pricing)
```

##### To set only price and currency

```js
mimeeqApp.utils
         .setPrice({
  "price": 5318,
  "unitPrice": 5318,
  "currency": "EUR"
})
```

##### To also set delivery data

```js
mimeeqApp.utils
         .setPrice({
  "price": 5318,
  "unitPrice": 5318,
  "currency": "PLN",
  "deliveryTime": 7
})
```

##### In case you are using quantity breaks it may looks like this

```js
mimeeqApp.utils
         .setPrice({
  "price": 338,
  "unitPrice": 338,
  "currency": "EUR",
  "deliveryTime": 25,
  "levels": [
    {
      "quantityMin": "1",
      "quantityMax": 4,
      "discount": 0,
      "price": 338,
      "pricePart": 0
    },
    {
      "quantityMin": "5",
      "quantityMax": 9,
      "discount": 0.2,
      "price": 270,
      "pricePart": 0
    },
    {
      "quantityMin": "10",
      "discount": 0.27,
      "price": 248,
      "pricePart": 0
    }
  ]
});
```

## Set pricing settings

Method: mimeeqApp.utils.setPricingSettings(minimumFractionDigits, maximumFractionDigits)
This allows you to set the decimal places in the mimeeq configurator

#### Parameters

| Name                  | Type                              | Default | Description                                                                                                                                                                          |
| --------------------- | --------------------------------- | ------- | ----------------------------------------------- |
| minimumFractionDigits | number                            | 2       | Minimum number of decimal places                |
| maximumFractionDigits | number                            | 2       | Selected configuration code string              |

#### Usage

```js
mimeeqApp.utils
    .setPricingSettings(minimumFractionDigits, maximumFractionDigits)
```
