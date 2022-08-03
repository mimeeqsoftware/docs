---
id: "mimeeqApp._mimeeq.Actions"
title: "Interface: Actions"
sidebar_label: "mimeeqApp.@mimeeq.Actions"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Actions

Configurator related actions. You can trigger them to either interact with scene or configuration or get/process some data from observers

## Basket Properties

### prepareCartImage

• **prepareCartImage**: [`PrepareCartImage`](../namespaces/mimeeqApp._mimeeq.md#preparecartimage)

Get s3 url for cart product image

**`Param`**

Base64 of image

**`Param`**

Cart id

**`Param`**

Cart item id

___

## Camera Properties

### decreaseZoom

• **decreaseZoom**: [`DecreaseZoom`](../namespaces/mimeeqApp._mimeeq.md#decreasezoom)

Decrease camera zoom

**`Param`**

Step size

___

### increaseZoom

• **increaseZoom**: [`IncreaseZoom`](../namespaces/mimeeqApp._mimeeq.md#increasezoom)

Increase camera zoom

**`Param`**

Step size

___

### setZoom

• **setZoom**: [`SetZoom`](../namespaces/mimeeqApp._mimeeq.md#setzoom)

Set specific zoom

**`Param`**

New zoom value

___

### zoomOut

• **zoomOut**: [`ZoomOut`](../namespaces/mimeeqApp._mimeeq.md#zoomout)

Zoom out scene to see whole product

**`Fires`**

@mimeeq#mimeeq-3d-zoom-out-scene

___

## Canvas Properties

### freezeCanvasScrolling

• **freezeCanvasScrolling**: [`FreezeCanvasScrolling`](../namespaces/mimeeqApp._mimeeq.md#freezecanvasscrolling)

Disable scrolling on canvas. In case you want to change camera zoom please use increaseZoom, decreaseZoom or setZoom methods.

___

### registerSceneCanvasView

• **registerSceneCanvasView**: [`RegisterSceneCanvasView`](../namespaces/mimeeqApp._mimeeq.md#registerscenecanvasview)

Register new canvas to babylon scene views. It will be using the same camera as primary canvas.

**`Param`**

Canvas element to be registered

___

### setSceneInputCanvas

• **setSceneInputCanvas**: [`SetSceneInputCanvas`](../namespaces/mimeeqApp._mimeeq.md#setsceneinputcanvas)

Use this to set new canvas as target for all interactions. You can only manipulate one canvas at a time so this should be your primary canvas in most cases.

**`Param`**

Canvas element to attach events to

___

### unfreezeCanvasScrolling

• **unfreezeCanvasScrolling**: [`UnfreezeCanvasScrolling`](../namespaces/mimeeqApp._mimeeq.md#unfreezecanvasscrolling)

Enable scrolling on canvas.

___

### unregisterSceneCanvasView

• **unregisterSceneCanvasView**: [`UnregisterSceneCanvasView`](../namespaces/mimeeqApp._mimeeq.md#unregisterscenecanvasview)

Unregister canvas from babylon scene views

**`Param`**

Canvas to be removed from views

___

## Custom UI Properties

### openLookboard

• **openLookboard**: [`OpenLookboard`](../namespaces/mimeeqApp._mimeeq.md#openlookboard)

Open lookboard modal. If selected it will update image as well.

___

## Exporters Properties

### exportGlb

• **exportGlb**: [`ExportGLB`](../namespaces/mimeeqApp._mimeeq.md#exportglb)

Export scene to glb

**`Fires`**

@mimeeq#mimeeq-3d-before-export-scene

**`Fires`**

@mimeeq#mimeeq-3d-after-export-scene

___

### exportObj

• **exportObj**: [`ExportOBJ`](../namespaces/mimeeqApp._mimeeq.md#exportobj)

Export scene to obj

**`Fires`**

@mimeeq#mimeeq-3d-before-export-scene

**`Fires`**

@mimeeq#mimeeq-3d-after-export-scene

___

### saveImage

• **saveImage**: [`SaveImage`](../namespaces/mimeeqApp._mimeeq.md#saveimage)

Trigger current scene screenshot download

**`Fires`**

@mimeeq#mimeeq-3d-after-export-image

**`Fires`**

@mimeeq#mimeeq-3d-before-export-image

**`Param`**

Extension to save image with

**`Param`**

Expected image width in pixels. Height will prevail current canvas ratio

___

### showExportImageModal

• **showExportImageModal**: [`ShowExportImageModal`](../namespaces/mimeeqApp._mimeeq.md#showexportimagemodal)

Open image export modal

___

### showExportModal

• **showExportModal**: [`ShowExportModal`](../namespaces/mimeeqApp._mimeeq.md#showexportmodal)

Open model export modal

___

### showExportPDF

• **showExportPDF**: [`ShowExportPDF`](../namespaces/mimeeqApp._mimeeq.md#showexportpdf)

Open PDF generator modal

___

## Favourites Properties

### createFavouriteCollection

• **createFavouriteCollection**: [`CreateFavouriteCollection`](../namespaces/mimeeqApp._mimeeq.md#createfavouritecollection)

Create new favourite collection

**`Param`**

Name of the collection

**`Param`**

Type of the collection

**`Fires`**

@mimeeq#mimeeq-favourites-add-collection

___

### getFavouriteCollections

• **getFavouriteCollections**: [`GetFavouriteCollections`](../namespaces/mimeeqApp._mimeeq.md#getfavouritecollections)

Returns list of all available/existing favourite collections for current user

___

### getFavouriteItems

• **getFavouriteItems**: [`GetFavouriteItems`](../namespaces/mimeeqApp._mimeeq.md#getfavouriteitems)

Returns list of all items in favourites for current user (private and public)

___

### openSaveSceneAs

• **openSaveSceneAs**: [`OpenSaveSceneAs`](../namespaces/mimeeqApp._mimeeq.md#opensavesceneas)

Trigger to open Save Scene as modal on modular product

___

### saveFavouriteConfiguration

• **saveFavouriteConfiguration**: [`SaveFavouriteConfiguration`](../namespaces/mimeeqApp._mimeeq.md#savefavouriteconfiguration)

Update favourite configuration (only for regular products).

**`Param`**

Configuration code to update

**`Param`**

Favourite collection ids

**`Fires`**

@mimeeq#mimeeq-favourites-remove-product

**`Fires`**

@mimeeq#mimeeq-favourites-add-product

___

### saveFavouriteScene

• **saveFavouriteScene**: [`SaveFavouriteScene`](../namespaces/mimeeqApp._mimeeq.md#savefavouritescene)

Update actually loaded scene with current state

**`Fires`**

@mimeeq#mimeeq-modular-save-scene

___

### saveFavouriteSceneAs

• **saveFavouriteSceneAs**: [`SaveFavouriteSceneAs`](../namespaces/mimeeqApp._mimeeq.md#savefavouritesceneas)

Save current scene under new name

**`Param`**

Scene name

**`Param`**

Favourite collection ids

**`Fires`**

@mimeeq#mimeeq-modular-save-scene

___

## History Properties

### goBack

• **goBack**: [`HistoryGoBack`](../namespaces/mimeeqApp._mimeeq.md#historygoback)

Revert last change

**`Fires`**

@mimeeq#mimeeq-history-go-back

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

### redo

• **redo**: [`HistoryRedo`](../namespaces/mimeeqApp._mimeeq.md#historyredo)

Redo next history action

**`Fires`**

@mimeeq#mimeeq-history-go-forward

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

### reset

• **reset**: [`HistoryReset`](../namespaces/mimeeqApp._mimeeq.md#historyreset)

Go back to initial configuration

**`Fires`**

@mimeeq#mimeeq-app-url-change

**`Fires`**

@mimeeq#mimeeq-history-reset

___

## Miscellaneous Properties

### showAR

• **showAR**: [`ShowAR`](../namespaces/mimeeqApp._mimeeq.md#showar)

Open current scene in AR

___

### showAddToQuote

• **showAddToQuote**: [`ShowAddToQuote`](../namespaces/mimeeqApp._mimeeq.md#showaddtoquote)

Open add to quote modal. Available only for signed-in users

___

## Modular Properties

### cancelOperations

• **cancelOperations**: [`CancelOperations`](../namespaces/mimeeqApp._mimeeq.md#canceloperations)

Cancel all active operations on models like adding new, clone or move.

**`Fires`**

@mimeeq#mimeeq-modular-abort-adding

___

### clearScene

• **clearScene**: [`ClearScene`](../namespaces/mimeeqApp._mimeeq.md#clearscene)

Remove all resources from scene and start from the scratch

**`Fires`**

@mimeeq#mimeeq-modular-clear-scene

___

### enableClone

• **enableClone**: [`EnableClone`](../namespaces/mimeeqApp._mimeeq.md#enableclone)

Enable clone of currently selected model. Only one product can have active clone at once so activating it for new model will deactivate it for other.

**`Fires`**

@mimeeq#mimeeq-modular-set-clone

___

### enableMove

• **enableMove**: [`EnableMove`](../namespaces/mimeeqApp._mimeeq.md#enablemove)

Enable move of currently selected model. Only one product can have active move at once so activating it for new model will deactivate it for other.

**`Fires`**

@mimeeq#mimeeq-modular-set-move

___

### flipProduct

• **flipProduct**: [`FlipProduct`](../namespaces/mimeeqApp._mimeeq.md#flipproduct)

Flip/rotate selected product to use different snapping point connection

**`Fires`**

@mimeeq#mimeeq-modular-flip-product

___

### markOptionModular

• **markOptionModular**: [`MarkOptionModular`](../namespaces/mimeeqApp._mimeeq.md#markoptionmodular)

Select option at modular on currently selected product(s).

**`Fires`**

@mimeeq#mimeeq-modular-select-option-multiple

**`Fires`**

@mimeeq#mimeeq-modular-select-option

**`Param`**

Option object to select

**`Param`**

Id of block

**`Param`**

Type of widget the block is using

**`Param`**

If `true` it will try to match selected option in other blocks within this block group

**`Param`**

Block name, it's used to run autosync rule

___

### openAddProductModal

• **openAddProductModal**: [`OpenAddProductModal`](../namespaces/mimeeqApp._mimeeq.md#openaddproductmodal)

Trigger this to open product list to select products to show at scene.

___

### openFinishModal

• **openFinishModal**: [`OpenFinishModal`](../namespaces/mimeeqApp._mimeeq.md#openfinishmodal)

Call it to open list of all elements on scene and tabs

**`Fires`**

@mimeeq#mimeeq-show-modular-summary

___

### openLoadSceneModal

• **openLoadSceneModal**: [`OpenLoadSceneModal`](../namespaces/mimeeqApp._mimeeq.md#openloadscenemodal)

Trigger this to open Scene picker

___

### removeSelected

• **removeSelected**: [`RemoveProducts`](../namespaces/mimeeqApp._mimeeq.md#removeproducts)

Remove all selected products from scene

**`Fires`**

@mimeeq#mimeeq-modular-remove-product

___

### selectAll

• **selectAll**: [`SelectAll`](../namespaces/mimeeqApp._mimeeq.md#selectall)

Select (or deselect) all models on the scene

**`Fires`**

@mimeeq#mimeeq-modular-unselect-all

**`Fires`**

@mimeeq#mimeeq-modular-select-all

___

### setSelectMode

• **setSelectMode**: [`SetSelectMode`](../namespaces/mimeeqApp._mimeeq.md#setselectmode)

Set select mode for modular

**`Fires`**

@mimeeq#mimeeq-modular-toggle-select-mode

**`Param`**

New select mode. It can be either single or multi.

___

### showHelp

• **showHelp**: [`ShowHelp`](../namespaces/mimeeqApp._mimeeq.md#showhelp)

Trigger this to show help modal

___

### toggleGrid

• **toggleGrid**: [`ToggleGrid`](../namespaces/mimeeqApp._mimeeq.md#togglegrid)

Toggle grid on scene.

**`Fires`**

@mimeeq#mimeeq-modular-show-grid

**`Fires`**

@mimeeq#mimeeq-modular-hide-grid

___

### toggleSelectMode

• **toggleSelectMode**: [`ToggleSelectMode`](../namespaces/mimeeqApp._mimeeq.md#toggleselectmode)

Toggle type of select at modular. It can be either singular or multi

**`Fires`**

@mimeeq#mimeeq-modular-toggle-select-mode

___

### toggleSlide

• **toggleSlide**: [`ToggleSlide`](../namespaces/mimeeqApp._mimeeq.md#toggleslide)

Activate/deactivate slide for currently selected product. Take a note not all products has slide available.

**`Fires`**

@mimeeq#mimeeq-modular-set-slide

___

## Options Properties

### filterOptions

• **filterOptions**: [`FilterOptions`](../namespaces/mimeeqApp._mimeeq.md#filteroptions)

Filter list of options agains selected filters

**`Param`**

List of block options

**`Param`**

List of selected filters

___

### markOption

• **markOption**: [`MarkOption`](../namespaces/mimeeqApp._mimeeq.md#markoption)

Select single option

**`Param`**

Option object to select

**`Param`**

Id of block

**`Param`**

Type of widget the block is using

**`Param`**

If `true` it will try to mactch selected option in other blocks within this block group

**`Fires`**

@mimeeq#mimeeq-select-option

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

### markOptionByBlockNameAndOptionCode

• **markOptionByBlockNameAndOptionCode**: [`MarkOptionByBlockNameAndOptionCode`](../namespaces/mimeeqApp._mimeeq.md#markoptionbyblocknameandoptioncode)

Marks option by block name and option code.

**`Param`**

Block name of block which option is a part of

**`Param`**

Code of option to be selected

**`Fires`**

@mimeeq#mimeeq-select-option

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

### markOptionModular

• **markOptionModular**: [`MarkOptionModular`](../namespaces/mimeeqApp._mimeeq.md#markoptionmodular)

Select option at modular on currently selected product(s).

**`Fires`**

@mimeeq#mimeeq-modular-select-option-multiple

**`Fires`**

@mimeeq#mimeeq-modular-select-option

**`Param`**

Option object to select

**`Param`**

Id of block

**`Param`**

Type of widget the block is using

**`Param`**

If `true` it will try to match selected option in other blocks within this block group

**`Param`**

Block name, it's used to run autosync rule

___

### prepareFilterOptions

• **prepareFilterOptions**: [`PrepareFilterOptions`](../namespaces/mimeeqApp._mimeeq.md#preparefilteroptions)

Prepare list of available filters with count of affected options

**`Param`**

List of all filters configured for customer

**`Param`**

List of available options

**`Param`**

List of currently selected filters

___

## Pricing Properties

### setDealer

• **setDealer**: [`SetDealer`](../namespaces/mimeeqApp._mimeeq.md#setdealer)

Call to change currently selected dealer. Dealers are used to fetch price for authenticated users. Price can be different for various dealers.

**`Param`**

Id of dealer to select

___

### setPriceType

• **setPriceType**: [`SetPriceType`](../namespaces/mimeeqApp._mimeeq.md#setpricetype)

Changes price type used for price calculations.

**`Param`**

Price type to be selected

___

### setQuantity

• **setQuantity**: [`SetQuantity`](../namespaces/mimeeqApp._mimeeq.md#setquantity)

Set product quantity

**`Param`**

New quantity to be set

___

## Product Properties

### getProductCarouselImages

• **getProductCarouselImages**: [`GetProductCarouselImages`](../namespaces/mimeeqApp._mimeeq.md#getproductcarouselimages)

Get list of 2d images for current product on selected options

**`Since`**

6.0.0

___

### setCarouselView

• **setCarouselView**: [`SetCarouselView`](../namespaces/mimeeqApp._mimeeq.md#setcarouselview)

Change currently visible view on canvas/2d

**`Param`**

id of the view to show. In case of 3d pass empty value

___

## Product Tabs Properties

### getTabFiles

• **getTabFiles**: [`GetTabFiles`](../namespaces/mimeeqApp._mimeeq.md#gettabfiles)

Get list of available files on Files tab. Some files are added based on configuration code, so it's advised to call this after each configuration code change (unless only static files are used).

**`Since`**

6.0.0

**`Param`**

Id of the tab

___

### getTabFinishes

• **getTabFinishes**: [`GetTabFinishes`](../namespaces/mimeeqApp._mimeeq.md#gettabfinishes)

Get data for all passed finishes

**`Since`**

6.0.0

**`Param`**

List of finishes from tab

___

### getTabGallery

• **getTabGallery**: [`GetTabGallery`](../namespaces/mimeeqApp._mimeeq.md#gettabgallery)

Get list of images for provided galleryId.

**`Since`**

6.0.0

**`Param`**

Id of the gallery

___

### getTabPopular

• **getTabPopular**: [`GetTabPopular`](../namespaces/mimeeqApp._mimeeq.md#gettabpopular)

Get data about provided popular configurations. It also filters out all broken configurations

**`Since`**

6.0.0

**`Param`**

List of popular configurations

**`Param`**

Custom background color to be used on dynamic images

___

### selectPopularConfig

• **selectPopularConfig**: [`SelectPopularConfig`](../namespaces/mimeeqApp._mimeeq.md#selectpopularconfig)

Trigger it to select popular configuration

**`Since`**

6.0.0

**`Param`**

Popular configuration item data

**`Fires`**

@mimeeq#mimeeq-select-popular-variant

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

## Related Products Properties

### getRelatedDynamicData

• **getRelatedDynamicData**: [`GetRelatedDynamicData`](../namespaces/mimeeqApp._mimeeq.md#getrelateddynamicdata)

Get list of related items with matched image and options based on currently selected options

**`Since`**

6.0.0

**`Param`**

Raw list of related products

**`Param`**

Custom background color to be used on dynamically created 2d images

___

### getRelatedProducts

• **getRelatedProducts**: [`GetRelatedProducts`](../namespaces/mimeeqApp._mimeeq.md#getrelatedproducts)

Get list of related products for current product

**`Since`**

6.0.0

___

### selectRelatedProduct

• **selectRelatedProduct**: [`SelectRelatedProduct`](../namespaces/mimeeqApp._mimeeq.md#selectrelatedproduct)

Call it to select product from related list

**`Since`**

6.0.0

**`Param`**

Id of related product

**`Param`**

Variant code of related product

**`Fires`**

@mimeeq#mimeeq-open-related-product

**`Fires`**

@mimeeq#mimeeq-app-url-change

___

## Scene Properties

### toggleDimensions

• **toggleDimensions**: [`ToggleDimensions`](../namespaces/mimeeqApp._mimeeq.md#toggledimensions)

Toggle dimensions on scene

**`Fires`**

@mimeeq#mimeeq-hide-dimensions

**`Fires`**

@mimeeq#mimeeq-show-dimensions

___

## Storage Properties

### downloadFile

• **downloadFile**: [`DownloadFile`](../namespaces/mimeeqApp._mimeeq.md#downloadfile)

Calling this method will trigger file download

**`Since`**

6.0.0

**`Param`**

Relative path to file

**`Param`**

Name to be set to file during download

___

## Widgets Properties

### imageWidgetAddNewImages

• **imageWidgetAddNewImages**: [`ImageWidgetAddNewImages`](../namespaces/mimeeqApp._mimeeq.md#imagewidgetaddnewimages)

Add new images to image widget library.

**`Param`**

List of files to upload

**`Param`**

Block data of block to upload image(s) for

___

### imageWidgetSelectImage

• **imageWidgetSelectImage**: [`ImageWidgetSelectImage`](../namespaces/mimeeqApp._mimeeq.md#imagewidgetselectimage)

Select new image for active widget

**`Param`**

Id of image to select

___

### setImageWidgetActiveBlock

• **setImageWidgetActiveBlock**: [`SetImageWidgetActiveBlock`](../namespaces/mimeeqApp._mimeeq.md#setimagewidgetactiveblock)

Set active block for image widget. Changing active block triggers close/open rules for product.

**`Param`**

___

### setImageWidgetLibraryState

• **setImageWidgetLibraryState**: [`SetImageWidgetLibraryState`](../namespaces/mimeeqApp._mimeeq.md#setimagewidgetlibrarystate)

Use this to open/close image upload widget for active block.

**`Param`**
