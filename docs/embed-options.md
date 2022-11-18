---
title: Embed Options
---

Each embed can be configured with number of options. Below list of all available once. You can also use Mimeeq App snippet to generate proper HTML code automatically.

## Properties


### Theme

| Name                             | Attribute                              | Description                                                                          | Type                |
|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------|---------------------|
| Accent Color                     | `data-mimeeq-button-color`             | Custom accent color                                                                  | `string`            |
| Accent Color Text                | `data-mimeeq-button-text-color`        | Custom text color on controls with accent color as background                        | `string`            |
| Background color                 | `data-mimeeq-background-color`         | Custom background color                                                              | `string`            |

### UI elements visibility

| Name                             | Attribute                              | Description                                                                          | Type                |
|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------|---------------------|
| Hide text when loader visible    | `data-mimeeq-cart-loader-only`         | If `true`, hide text on buttons when displaying loader                               | `boolean`           |
| Hide AR icon                     | `data-mimeeq-ui-ar-icon`               | If `true`, hide View in AR button                                                    | `boolean`           |
| Hide collection name             | `data-mimeeq-ui-collection-name`       | If `true`, hide collection name above product name                                   | `boolean`           |
| Hide whole configurator          | `data-mimeeq-ui-configurator`          | If `true`, hide whole configurator. Leaves only tabs and related                     | `boolean`           |
| Hide all controls                | `data-mimeeq-ui-controls`              | If `true`, hide all controls on configurator                                         | `boolean`           |
| Hide delivery info               | `data-mimeeq-ui-delivery`              | If `true`, hide delivery information                                                 | `boolean`           |
| Hide dimensions button           | `data-mimeeq-ui-dimensions`            | If `true`, hide Show Dimensions button                                               | `boolean`           |
| Hide export model button         | `data-mimeeq-ui-export`                | If `true`, hide export model button                                                  | `boolean`           |
| Hide export image button         | `data-mimeeq-ui-export-image`          | If `true`, hide export image button                                                  | `boolean`           |
| Hide favourites                  | `data-mimeeq-ui-favourites`            | If `true`, hide favourites button on canvas                                          | `boolean`           |
| Hide favourites button           | `data-mimeeq-ui-favourites-button`     | If `true`, hide favourites button on configurator                                    | `boolean`           |
| Hide finish button               | `data-mimeeq-ui-finish`                | If `true`, hide finish/add to cart button                                            | `boolean`           |
| Hide summary screen              | `data-mimeeq-ui-finish-screen`         | If `true`, hide finish screen                                                        | `boolean`           |
| Hide footer                      | `data-mimeeq-ui-footer`                | If `true`, hide configurator canvas footer                                           | `boolean`           |
| Hide full screen button          | `data-mimeeq-ui-full-screen`           | If `true`, hide full screen button                                                   | `boolean`           |
| Hide header                      | `data-mimeeq-ui-header`                | If `true`, hide configurator header                                                  | `boolean`           |
| Hide history buttons             | `data-mimeeq-ui-history`               | If `true`, hide all history related buttons                                          | `boolean`           |
| Hide 3d information              | `data-mimeeq-ui-hot-spots`             | If `true`, hide 3d Information on 3d canvas for products with these configured       | `boolean`           |
| Hide option panel                | `data-mimeeq-ui-option-panel`          | If `true`, hide whole option panel                                                   | `boolean`           |
| Hide export PDF on canvas        | `data-mimeeq-ui-pdf-on-canvas`         | If `true`, hide export PDF button on canvas                                          | `boolean`           |
| Hide export PDF on finish        | `data-mimeeq-ui-pdf-on-finish`         | If `true`, hide export PDF button on finish screen                                   | `boolean`           |
| Hide price                       | `data-mimeeq-ui-price`                 | If `true`, hide all prices                                                           | `boolean`           |
| Hide product name                | `data-mimeeq-ui-product-name`          | If `true`, hide product name                                                         | `boolean`           |
| Hide quantity box                | `data-mimeeq-ui-qty`                   | If `true`, hide qty buttons                                                          | `boolean`           |
| Hide redo button                 | `data-mimeeq-ui-redo`                  | If `true`, hide redo button                                                          | `boolean`           |
| Hide Related Products            | `data-mimeeq-ui-related`               | If `true`, hide related products section                                             | `boolean`           |
| Hide reset button                | `data-mimeeq-ui-reset`                 | If `true`, hide history reset button                                                 | `boolean`           |
| Hide share on canvas             | `data-mimeeq-ui-share-on-canvas`       | If `true`, hide share button on canvas                                               | `boolean`           |
| Hide share on summary            | `data-mimeeq-ui-share-on-finish`       | If `true`, hide share button on finish screen                                        | `boolean`           |
| Hide tabs                        | `data-mimeeq-ui-tabs`                  | If `true`, hide tabs section                                                         | `boolean`           |
| Hide undo button                 | `data-mimeeq-ui-undo`                  | If `true`, hide undo button                                                          | `boolean`           |
| Hide warning 3d                  | `data-mimeeq-ui-warning-3d`            | If `true`, hide 3d warning icon                                                      | `boolean`           |
| Hide warning icons               | `data-mimeeq-ui-warning-icons`         | If `true`, hide warning icons on modular canvas                                      | `boolean`           |
| Hide zoom button                 | `data-mimeeq-ui-zoom`                  | If `true`, hide zoom out button                                                      | `boolean`           |
| Show menu controls               | `data-mimeeq-ui-show-menu-controls`    | If `true`, it will display menu controls on Product Group list                       | `boolean`           |

### Presentation

| Name                             | Attribute                              | Description                                                                          | Type                |
|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------|---------------------|
| Adjust to Container              | `data-mimeeq-ui-adjust-to-container`   | If `true`, adjust configurator to container rather then use predefined min/max sizes | `boolean`           |
| Display configurator in modal    | `data-mimeeq-modal`                    | If `true`, render configurator in mimeeq modal                                       | `boolean`           |
| Configurator modal class name    | `data-mimeeq-modal-class-name`         | Standard product configurator modal custom class name(s)                             | `string`            |
| Configurator modal height        | `data-mimeeq-modal-height`             | Standard product configurator modal height                                           | `string`            |
| Configurator modal overflow type | `data-mimeeq-modal-overflow`           | Type of configurator modal overflowing                                               | `ModalOverflowType  |
| Configurator modal width         | `data-mimeeq-modal-width`              | Standard product configurator modal width                                            | `string`            |
| Display product list in modal    | `data-mimeeq-list-modal`               | If `true`, render product list in mimeeq modal                                       | `boolean`           |
| List modal class name            | `data-mimeeq-list-modal-class-name`    | Product list modal custom class name(s)                                              | `string`            |
| List modal height                | `data-mimeeq-list-modal-height`        | Product list modal height                                                            | `string`            |
| List modal overflow type         | `data-mimeeq-list-modal-overflow`      | Type of product list modal overflowing                                               | `ModalOverflowType  |
| List modal width                 | `data-mimeeq-list-modal-width`         | Product list modal width                                                             | `string`            |
| Display modular in modal         | `data-mimeeq-modular-modal`            | If `true`, render modular configurator in mimeeq modal                               | `boolean`           |
| Modular modal class name         | `data-mimeeq-modular-modal-class-name` | Modular product configurator modal custom class name(s)                              | `string`            |
| Modular modal overflow type      | `data-mimeeq-modular-modal-overflow`   | Type of modular configurator modal overflowing                                       | `ModalOverflowType  |
| Use parent page font             | `data-mimeeq-use-page-font`            | If `true`, use website font family                                                   | `boolean`           |

### E-commerce

| Name                             | Attribute                              | Description                                                                          | Type                |
|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------|---------------------|
| Ecommerce mode                   | `data-mimeeq-basket`                   | If `true`, configurator will be rendered with basket support                         | `boolean`           |
| Add to Cart placement            | `data-mimeeq-cart-at`                  | Where to display Add to Cart button                                                  | `AddToCartPlacement |
| Add to Cart placement - modular  | `data-mimeeq-cart-at-modular`          | Where to display Add to Cart button On modular product only.                         | `AddToCartPlacement |
| Basket explore products location | `data-mimeeq-explore-products`         | When using Mimeeq Basket, location to take user after clicking Explore button        | `string`            |
| Use custom pricing               | `data-mimeeq-use-custom-pricing`       | If `true`, embed will enter custom pricing mode                                      | `boolean`           |
| Mimeeq Cart                      | `data-mimeeq-cart`                     | If `true`, enable and show Mimeeq Basket                                             | `boolean`           |

### Miscellaneous

| Name                             | Attribute                              | Description                                                                          | Type                |
|----------------------------------|----------------------------------------|--------------------------------------------------------------------------------------|---------------------|
| Default configuration code       | `data-mimeeq-configuration`            | Default configuration code to be used in single product embed                        | `string`            |
| Language code                    | `data-locale`                          | Locale code                                                                          | `string`            |
| Render configurator at mount     | `data-mimeeq-render-at-mount`          | If `true`, renders configurator after mounting                                       | `boolean`           |
| Embed shortcode to render here   | `data-mimeeq-short-code`               | Embed shortcode                                                                      | `string`            |
| Use history navigation           | `data-withhistory`                     | If `true`, use history navigation and add current state information to URL           | `boolean`           |
| Configurator root element        | `data-mimeeq`                          | It's pointing on which element configurator should mount on.                         | `boolean`           |
| Auth root element                | `data-mimeeq-auth`                     | It's pointing on which element auth embed should mount on.                           | `boolean`           |
