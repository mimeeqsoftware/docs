---
title: Events
---

## Events that can be listened to

### Generic events

| Name                               | Description                                                                                                                                                      | Data                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| mimeeq-app-loaded                  | This event is fired when configurator library was loaded.                                                                                                        |                                                                              |
| mimeeq-3d-after-export-image       | This event is fired when image was generated and saved.                                                                                                          |                                                                              |
| mimeeq-3d-after-export-scene       | This event is fired when archive was generated and saved.                                                                                                        |                                                                              |
| mimeeq-3d-before-export-image      | This event is fired before image export process was started.                                                                                                     |                                                                              |
| mimeeq-3d-before-export-scene      | This event is fired before export process was started.                                                                                                           |                                                                              |
| mimeeq-3d-hide-dimensions          | This event is fired when _Show dimensions_ button was clicked. When active.                                                                                      |                                                                              |
| mimeeq-3d-show-dimensions          | This event is fired when _Show dimensions_ button was clicked. When inactive.                                                                                    |                                                                              |
| mimeeq-3d-zoom-out-scene           | This event is fired when _Zoom Out_ button was clicked.                                                                                                          |                                                                              |
| mimeeq-activate-matching-options   | This event is fired when _Match Options_ button at Option Panel was clicked. If inactive.                                                                        |                                                                              |
| mimeeq-change-quantity             | This event is fired when quantity was changed.                                                                                                                   | { quantity: number }                                                         |
| mimeeq-clear-filters               | This event is fired when _Clear Filters_ button was clicked.                                                                                                     |                                                                              |
| mimeeq-close-export-pdf-modal      | This event is fired when _Generate PDF_ modal was closed.                                                                                                        |                                                                              |
| mimeeq-close-order-modal           | This event is fired when _Make Order_ modal was closed.                                                                                                          |                                                                              |
| mimeeq-close-quote-modal           | This event is fired when _Make Quotation_ modal was closed.                                                                                                      |                                                                              |
| mimeeq-configurator-clear-history  | This event is fired when Close button was clicked on configurator in Modal mode.                                                                                 |                                                                              |
| mimeeq-configurator-go-back        | This event is fired when back arrow in configurator was clicked.                                                                                                 |                                                                              |
| mimeeq-create-quote                | This event is fired when quotation was created.                                                                                                                  | { quotationName: string, quotationId: string }                               |
| mimeeq-products-added-to-quote     | This event is fired when products was added to existing quote.                                                                                                   | { quotationName: string, quotationId: string }                               |
| mimeeq-deactivate-matching-options | This event is fired when _Match Options_ button at Option Panel was clicked. If active.                                                                          |                                                                              |
| mimeeq-download-file               | This event is fired when image at gallery or file at files tab was downloaded.                                                                                   | { fileName: string, href: string }                                           |
| mimeeq-go-back-to-groups           | This event is fired when going back to Option Set Groups view at Option Panel.                                                                                   |                                                                              |
| mimeeq-history-reset               | This event is fired when _Reset_ button at history widget was clicked.                                                                                           |                                                                              |
| mimeeq-open-related-product        | This event is fired when Related Product was clicked.                                                                                                            | { variantCode: string, productId: string, isModular: boolean }               |
| mimeeq-select-company              | This event is fired when Company at Price Selector was changed.                                                                                                  | { companyName: string, companyId: string }                                   |
| mimeeq-select-price-type           | This event is fired when Price Type at Price Selector was changed.                                                                                               | { type: string, name: string, id: string }                                   |
| mimeeq-select-filters              | This event is fired when Filters were changed.                                                                                                                   | { selectedFilters: string[] }                                                |
| mimeeq-select-product              | This event is fired when _Select_ button was clicked. Only if Configurator in _selector_ variant.                                                                | [SelectedConfiguration](#selectedconfiguration)                              |
| mimeeq-add-to-cart                 | This event is fired when _Add to Cart_ button was clicked. Only if Configurator in _basket_ mode.                                                                | [SelectedConfiguration](#selectedconfiguration)                              |
| mimeeq-share-link                  | This event is fired when _Link_ option was clicked at Share popover.                                                                                             | { href: string }                                                             |
| mimeeq-show-export-pdf-modal       | This event is fired when _Generate PDF_ modal was opened.                                                                                                        |                                                                              |
| mimeeq-show-order-modal            | This event is fired when _Make Order_ modal was opened.                                                                                                          |                                                                              |
| mimeeq-show-quote-modal            | This event is fired when _Make Quotation_ modal was opened.                                                                                                      |                                                                              |
| ON_SEND_MESSAGE                    | This event is fired on each change/action related to configurator. **DEPRECATED** Please use specific events for each action                                     |                                                                              |
| mimeeq-select-tab                  | This event is fired when changing Tab.                                                                                                                           | { hash: string, index: number }                                              |
| mimeeq-tree-unmounted              | This event is fired when Embed was unmounted from DOM. It returns type of unmounted embed (configurator, modular, product-list, favourites, login, user-profile) | { type: string }                                                             |
| mimeeq-click-hotspot               | This event is fired when user click on Hotspot                                                                                                                   | { meshId: string, instanceId: string, dimensions: { x: number, y: number } } |
| mimeeq-price-change                | This event is fired just before configurator is going to fetch price. Keep in mind that data is only passed on regular product. There is no payload for Modular. | { variantCode: string, quantity: number }                                    |

### Modular events

| Name                                    | Description                                                                                                                                                        | Data                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| mimeeq-modular-add-product-to-scene     | This event is fired when product was added to the scene.                                                                                                           | { productId: string, productName: string, productUId: string }                                 |
| mimeeq-modular-cancel-adding            | This event is fired when _CancelAdding_ button was clicked.                                                                                                        |                                                                                                |
| mimeeq-modular-clear-scene              | This event is fired when _ClearScene_ button was clicked.                                                                                                          |                                                                                                |
| mimeeq-modular-clone-product            | This event is fired when product was cloned.                                                                                                                       |                                                                                                |
| mimeeq-modular-close-configurator       | This event is fired when Option Panel was closed.                                                                                                                  |                                                                                                |
| mimeeq-modular-close-my-scenes          | This event is fired when _MyScenes_ were left.                                                                                                                     |                                                                                                |
| mimeeq-modular-close-select-scene-modal | This event is fired when _LoadScene_ modal was closed.                                                                                                             |                                                                                                |
| mimeeq-modular-close-summary            | This event is fired when _Summary_ was closed.                                                                                                                     |                                                                                                |
| mimeeq-modular-close-warning            | This event is fired when Warning Modal was closed.                                                                                                                 |                                                                                                |
| mimeeq-modular-closed                   | This event is fired when modular modal was closed.                                                                                                                 |                                                                                                |
| mimeeq-modular-create-new-scene         | This event is fired when new short code was assigned for scene. Triggers after clicking _New Scene_ button, _Clear Scene_ button, entering existing/default scene. | { code: string, productId: string, shortCode: string }                                         |
| mimeeq-modular-enter-product            | This event is fired when modular product was entered.                                                                                                              |                                                                                                |
| mimeeq-modular-flip-product             | This event is fired when _Flip_ button was clicked.                                                                                                                |                                                                                                |
| mimeeq-modular-hide-grid                | This event is fired when Grid was hidden.                                                                                                                          |                                                                                                |
| mimeeq-modular-hide-help-modal          | This event is fired when _Help_ modal was closed.                                                                                                                  |                                                                                                |
| mimeeq-modular-history-go-back          | This event is fired when _Back_ button at history widget was clicked.                                                                                              |                                                                                                |
| mimeeq-modular-history-go-forward       | This event is fired when _Redo_ button at history widget was clicked.                                                                                              |                                                                                                |
| mimeeq-modular-leave-product            | This event is fired when modular product was left.                                                                                                                 |                                                                                                |
| mimeeq-modular-load-scene               | This event is fired when either Default Configuration scene was selected or shared Scene link was entered.                                                         | { code: string, productId: string, shortCode: string }                                         |
| mimeeq-modular-load-scene-success       | This event is fired when saved Scene was loaded.                                                                                                                   |                                                                                                |
| mimeeq-modular-move-product             | This event is fired when product was moved.                                                                                                                        |                                                                                                |
| mimeeq-modular-open-add-product-modal   | This event is fired when _Add Product_ or _Add more_ button was clicked.                                                                                           |                                                                                                |
| mimeeq-modular-open-configurator        | This event is fired when Option Panel was opened.                                                                                                                  |                                                                                                |
| mimeeq-modular-open-my-scenes           | This event is fired when _My Scenes_ were selected.                                                                                                                |                                                                                                |
| mimeeq-modular-open-summary             | This event is fired when _Finish_ button was clicked.                                                                                                              |                                                                                                |
| mimeeq-modular-save-scene               | This event is fired when Favourite Scene was updated or created.                                                                                                   | { shortCode: string, sceneName: string }                                                       |
| mimeeq-modular-select-all               | This event is fired when _Select All_ action was triggered. Either by clicking button or using keyboard shortcut.                                                  |                                                                                                |
| mimeeq-modular-select-option            | This event is fired when Option in Option Panel was selected. Only for single product.                                                                             | { configurationCode: string, groupName: string, option: [Option](#option), productUId: string} |
| mimeeq-modular-select-option-multiple   | This event is fired when Option in Option Panel was selected. Only for multiple products.                                                                          | { selectedIds: string, option: [Option](#option)}                                              |
| mimeeq-modular-select-product-to-add    | This event is fired when Product to add was chosen at Product List modal.                                                                                          | { productId: string, productName: string }                                                     |
| mimeeq-modular-set-clone                | This event is fired when _Clone_ button was clicked.                                                                                                               |                                                                                                |
| mimeeq-modular-set-move                 | This event is fired when _Move_ button was clicked.                                                                                                                |                                                                                                |
| mimeeq-modular-remove-product           | This event is fired when _Remove_ button was clicked.                                                                                                              |                                                                                                |
| mimeeq-modular-set-slide                | This event is fired when _Slide_ button was clicked.                                                                                                               |                                                                                                |
| mimeeq-modular-show-grid                | This event is fired when _Grid_ was activated.                                                                                                                     |                                                                                                |
| mimeeq-modular-show-help-modal          | This event is fired when _Help_ modal was opened.                                                                                                                  |                                                                                                |
| mimeeq-modular-toggle-select-mode       | This event is fired when Select Mode (single/multiple) was toggled.                                                                                                |                                                                                                |
| mimeeq-modular-unselect-all             | This event is fired when Unselect all action was triggered. Either by clicking button or using keyboard shortcut.                                                  |                                                                                                |
| mimeeq-modular-abort-action             | This event is fired when _Clone_ or _Move_ action was aborted by clicking respective button again.                                                                 |                                                                                                |
| mimeeq-modular-abort-adding             | This event is fired when _Cancel Adding_ button was clicked.                                                                                                       |                                                                                                |

### Authentication events

| Name                              | Description                                                              | Data                                                   |
| --------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| mimeeq-auth-loaded                | This event is fired when authentication library was loaded.              |                                                        |
| mimeeq-enter-forgot-password      | This event is fired when _Forgot_ at login form was clicked.             |                                                        |
| mimeeq-leave-forgot-password      | This event is fired when _Forgot Password_ form was closed.              |                                                        |
| mimeeq-login-closed               | This event is fired when _Login_ modal was closed.                       |                                                        |
| mimeeq-profile-closed             | This event is fired when _User Profile_ modal was closed.                |                                                        |
| mimeeq-forgot-password-closed     | This event is fired when _Forgot Password_ modal was unmounted.          |                                                        |
| mimeeq-resend-signup-confirm-code | This event is fired when Resend Sign Up Verification Code was triggered. | { email: string }                                      |
| mimeeq-user-deleted               | This event is fired when Tier2 user deleted own account.                 |                                                        |
| mimeeq-user-signed-in             | This event is fired after signing in.                                    | { firstName: string, lastName: string, email: string } |
| mimeeq-user-signed-out            | This event is fired after signing out.                                   |                                                        |
| mimeeq-user-updated               | This event is fired when user data was updated.                          |

### Product List and Favourites events

| Name                                     | Description                                                                   | Data                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------- |
| mimeeq-close-favourites                  | This event is fired when _Favourites_ at menu on favourites list was clicked. |                                                                |
| mimeeq-favourites-add-collection         | This event is fired when Favourite Collection was created.                    | { favouritesCollectionName: string, type: string }             |
| mimeeq-favourites-copy-to-collection     | This event is fired when items were copied to another Favourite Collections.  | { favouritesCollectionName: string, items: string[] }          |
| mimeeq-favourites-move-to-collection     | This event is fired when items were moved to another Favourites Collections.  | { favouritesCollectionName: string, items: string[] }          |
| mimeeq-favourites-remove-collection      | This event is fired when Favourite Collections were removed.                  |                                                                |
| mimeeq-favourites-remove-from-collection | This event is fired when items were removed from Favourite Collections.       | { items: string[] }                                            |
| mimeeq-favourites-update-collection      | This event is fired when Favourite Collection was updated.                    | { favouritesCollectionName: string, type: string }             |
| mimeeq-open-favourites                   | This event is fired when _Favourites_ in product list was clicked.            |                                                                |
| mimeeq-select-favourites-collection      | This event is fired when Favourite Collection selected from Menu.             | { collectionPath: string }                                     |
| mimeeq-product-list-select-product       | This event is fired when Product was selected.                                | { variantCode: string, productId: string, isModular: boolean } |

### 2d/3d Configurator events

| Name                             | Description                                                           | Data                                                                                     |
| -------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| mimeeq-enter-product             | This event is fired when product was entered.                         | { prefix: string }                                                                       |
| mimeeq-history-go-back           | This event is fired when _Back_ button at history widget was clicked. | { variantCode: string, productId: string, option: [Option](#option) }                    |
| mimeeq-history-go-forward        | This event is fired when _Redo_ button at history widget was clicked. | { variantCode: string, productId: string, option: [Option](#option) }                    |
| mimeeq-history-go-to             | This event is fired when item at history list was clicked.            | { variantCode: string, productId: string, option: [Option](#option) }                    |
| mimeeq-leave-product             | This event is fired when Product Configurator was closed.             | { prefix: string }                                                                       |
| mimeeq-favourites-remove-product | This event is fired when Product was removed from favourites.         | { prefix: string }                                                                       |
| mimeeq-favourites-add-product    | This event is fired when Product was added to favourites.             | { prefix: string }                                                                       |
| mimeeq-select-option             | This event is fired when option at Option Panel was selected.         | { variantCode: string, productId: string, option: [Option](#option), groupName: string } |
| mimeeq-select-popular-variant    | This event is fired when Popular Configurations was clicked.          | { variantCode: string, productId: string, image: string }                                |
| mimeeq-show-summary              | This event is fired when _Finish_ button was clicked.                 | [SelectedConfiguration](#selectedconfiguration)                                          |
| mimeeq-open-option-panel         | This event is fired when Option Panel on mobile is opened             |                                                                                          |
| mimeeq-configurator-closed       | This event is fired when configurator modal was closed.                                                                                                          |                                                                                                |

## Events that can be triggered by the host site

| Name                          | Description                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------ |
| mimeeq-show-modular           | Show (if hidden) modular when Render on Mount disabled                         |
| mimeeq-show-configurator      | Show (if hidden) configurator when Render on Mount disabled                    |
| mimeeq-unmount                | Remove all existing Mimeeq instances from the DOM including in-memory cleanup. |
| mimeeq-hide-basket-loader     | Hide loader at action button next to the price at Option Panel.                |
| mimeeq-show-basket-loader     | Show loader at action button next to the price at Option Panel.                |
| mimeeq-hide-price-loader      | Hide loader in price box at Option Panel.                                      |
| mimeeq-show-price-loader      | Show loader in price box at Option Panel.                                      |
| mimeeq-hide-add-to-cart-toast | Hide toast with information about adding to basket.                            |
| mimeeq-show-add-to-cart-toast | Show toast with information about adding to basket.                            |
| mimeeq-trigger-add-to-cart    | Run add to cart logic or open finish panel at Option Panel                     |

:::info

See [utils](/embeds-utils) section for other controls

:::

## Example

Listening to an event

```js
document.addEventListener("mimeeq-change-quantity", (e, quantity) => {
  console.log(`Quantity has been changed to ${quantity}`)
})
```

Firing an event

```js
document.dispatchEvent(new Event("mimeeq-show-modular"))
```

## Models

### SelectedConfiguration

| Name            | Type    | Description                                                                                                                                                                                                                                                                                                             |
|-----------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| action          | string  | Type of action. Can be _addToCart_ or _select_.                                                                                                                                                                                                                                                                         |
| variantCode     | string  | Actually selected configuration code.                                                                                                                                                                                                                                                                                   |
| productId       | string  | Id of the product.                                                                                                                                                                                                                                                                                                      |
| qty             | number  | Selected qty number.                                                                                                                                                                                                                                                                                                    |
| viewId          | string= | Selected view id. Only 2d.                                                                                                                                                                                                                                                                                              |
| image           | string= | Base64 image. In basket variant it will be jpeg file with width of 1000px. Otherwise 1200px wide png. Only on 3d.                                                                                                                                                                                                       |
| productName     | string  | Product name.                                                                                                                                                                                                                                                                                                           |
| selectedOptions | object  | Map of selected options per each block in current language. Only for regular products.                                                                                                                                                                                                                                  |
| collectionId    | string  | Custom parameter for wix integration.                                                                                                                                                                                                                                                                                   |
| code            | string  | Unique product code.                                                                                                                                                                                                                                                                                                    |
| shortCode       | string  | Before version 6.7.0 scene short code.Returned only for modular product. **<br/>Since version 6.7.0 it's returned for all products. In case of modular product it's still scene short code. For other products it's current configuration short code. Please use this value instead of calling `getShortcode` method.** |
| sku             | string  | Selected configuration SKU. Do not appy to modular product.                                                                                                                                                                                                                                                             |
| embedShortCode  | string  | Product embed short code. Can be used to display product once more.                                                                                                                                                                                                                                                     |
| isModular       | boolean | If `true`, product is modular.                                                                                                                                                                                                                                                                                          |

### Option

| Name          | Type                     | Description                                                                               |
| ------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| id            | string                   | Unique id.                                                                                |
| priceCode     | string                   | Option price code. Used for price calculation.                                            |
| code          | string                   | Option unique code.                                                                       |
| material3dId  | string                   | Id of assigned material.                                                                  |
| src           | string                   | S3 path of thumbnail.                                                                     |
| filters       | object<string, string[]> | Map of filters.                                                                           |
| ordinal       | number                   | Option ordinal. Used in association with letterMapping to create option code.             |
| name          | string                   | Option name.                                                                              |
| optionSetId   | string                   | Id of option set option belongs to.                                                       |
| letterMapping | string                   | Letter assigned to option set option belongs to. Used with ordinal to create option code. |

### HistoryItem

| Name        | Type              | Description                                                                   |
| ----------- | ----------------- | ----------------------------------------------------------------------------- |
| id          | number            | Unique id.                                                                    |
| variantCode | string            | Actually selected configuration code.                                         |
| productId   | string            | Id of the product.                                                            |
| option      | [Option](#option) | Selected option data                                                          |
| groupName   | string            | Name of group selected option belongs to.                                     |
| key         | string            | Unique item key.                                                              |
| resize      | boolean           | If true, image should be resized to smaller size (used internally).           |
| showDraft   | boolean           | If true, product is in draft mode.                                            |
| isRoot      | boolean           | If true, initial entry after opening product. Reset will revert this version. |
