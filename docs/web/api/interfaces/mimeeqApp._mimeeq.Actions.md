---
id: "mimeeqApp._mimeeq.Actions"
title: "Interface: Actions"
sidebar_label: "mimeeqApp.@mimeeq.Actions"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).Actions

Configurator related actions. You can trigger them to either interact with scene or configuration or get/process some data from observers

## Properties

### cancelOperations

• **cancelOperations**: [`CancelOperations`](../namespaces/mimeeqApp._mimeeq.md#canceloperations)

Cancel all active operations on models like adding new, clone or move.

**`fires`** @mimeeq#mimeeq-modular-abort-adding

___

### clearScene

• **clearScene**: [`ClearScene`](../namespaces/mimeeqApp._mimeeq.md#clearscene)

Remove all resources from scene and start from the scratch

**`fires`** @mimeeq#mimeeq-modular-clear-scene

___

### decreaseZoom

• **decreaseZoom**: [`DecreaseZoom`](../namespaces/mimeeqApp._mimeeq.md#decreasezoom)

Decrease camera zoom

**`param`** Step size

___

### downloadFile

• **downloadFile**: [`DownloadFile`](../namespaces/mimeeqApp._mimeeq.md#downloadfile)

Calling this method will trigger file download

**`since`** 6.0.0

**`param`** Relative path to file

**`param`** Name to be set to file during download

___

### enableClone

• **enableClone**: [`EnableClone`](../namespaces/mimeeqApp._mimeeq.md#enableclone)

Enable clone of currently selected model. Only one product can have active clone at once so activating it for new model will deactivate it for other.

**`fires`** @mimeeq#mimeeq-modular-set-clone

___

### enableMove

• **enableMove**: [`EnableMove`](../namespaces/mimeeqApp._mimeeq.md#enablemove)

Enable move of currently selected model. Only one product can have active move at once so activating it for new model will deactivate it for other.

**`fires`** @mimeeq#mimeeq-modular-set-move

___

### exportGlb

• **exportGlb**: [`ExportGLB`](../namespaces/mimeeqApp._mimeeq.md#exportglb)

Export scene to glb

**`fires`** @mimeeq#mimeeq-3d-before-export-scene

**`fires`** @mimeeq#mimeeq-3d-after-export-scene

___

### exportObj

• **exportObj**: [`ExportOBJ`](../namespaces/mimeeqApp._mimeeq.md#exportobj)

Export scene to obj

**`fires`** @mimeeq#mimeeq-3d-before-export-scene

**`fires`** @mimeeq#mimeeq-3d-after-export-scene

___

### filterOptions

• **filterOptions**: [`FilterOptions`](../namespaces/mimeeqApp._mimeeq.md#filteroptions)

Filter list of options agains selected filters

**`param`** List of block options

**`param`** List of selected filters

**`returns`** List of filtered options

___

### flipProduct

• **flipProduct**: [`FlipProduct`](../namespaces/mimeeqApp._mimeeq.md#flipproduct)

Flip/rotate selected product to use different snapping point connection

**`fires`** @mimeeq#mimeeq-modular-flip-product

___

### getProductCarouselImages

• **getProductCarouselImages**: [`GetProductCarouselImages`](../namespaces/mimeeqApp._mimeeq.md#getproductcarouselimages)

Get list of 2d images for current product on selected options

**`since`** 6.0.0

**`returns`** List of urls

___

### getRelatedDynamicData

• **getRelatedDynamicData**: [`GetRelatedDynamicData`](../namespaces/mimeeqApp._mimeeq.md#getrelateddynamicdata)

Get list of related items with matched image and options based on currently selected options

**`since`** 6.0.0

**`param`** Raw list of related products

**`param`** Custom background color to be used on dynamically created 2d images

**`returns`** List of related products with dynamic data generated

___

### getRelatedProducts

• **getRelatedProducts**: [`GetRelatedProducts`](../namespaces/mimeeqApp._mimeeq.md#getrelatedproducts)

Get list of related products for current product

**`since`** 6.0.0

**`returns`** Raw list of related products

___

### getTabFiles

• **getTabFiles**: [`GetTabFiles`](../namespaces/mimeeqApp._mimeeq.md#gettabfiles)

Get list of available files on Files tab. Some files are added based on configuration code, so it's advised to call this after each configuration code change (unless only static files are used).

**`since`** 6.0.0

**`param`** Id of the tab

**`returns`** List of available files

___

### getTabFinishes

• **getTabFinishes**: [`GetTabFinishes`](../namespaces/mimeeqApp._mimeeq.md#gettabfinishes)

Get data for all passed finishes

**`since`** 6.0.0

**`param`** List of finishes from tab

**`returns`** Data for all (if found) finishes from provided list

___

### getTabGallery

• **getTabGallery**: [`GetTabGallery`](../namespaces/mimeeqApp._mimeeq.md#gettabgallery)

Get list of images for provided galleryId.

**`since`** 6.0.0

**`param`** Id of the gallery

**`returns`** Record with data about number of columns and list of items at the gallery

___

### getTabPopular

• **getTabPopular**: [`GetTabPopular`](../namespaces/mimeeqApp._mimeeq.md#gettabpopular)

Get data about provided popular configurations. It also filters out all broken configurations

**`since`** 6.0.0

**`param`** List of popular configurations

**`param`** Custom background color to be used on dynamic images

**`returns`** List of popular configurations

___

### goBack

• **goBack**: [`HistoryGoBack`](../namespaces/mimeeqApp._mimeeq.md#historygoback)

Revert last change

**`fires`** @mimeeq#mimeeq-history-go-back

**`fires`** @mimeeq#mimeeq-app-url-change

___

### increaseZoom

• **increaseZoom**: [`IncreaseZoom`](../namespaces/mimeeqApp._mimeeq.md#increasezoom)

Increase camera zoom

**`param`** Step size

___

### markOption

• **markOption**: [`MarkOption`](../namespaces/mimeeqApp._mimeeq.md#markoption)

Select single option

**`param`** Option object to select

**`param`** Id of block

**`param`** Type of widget the block is using

**`param`** If `true` it will try to mactch selected option in other blocks within this block group

**`fires`** @mimeeq#mimeeq-select-option

**`fires`** @mimeeq#mimeeq-app-url-change

___

### markOptionByBlockNameAndOptionCode

• **markOptionByBlockNameAndOptionCode**: [`MarkOptionByBlockNameAndOptionCode`](../namespaces/mimeeqApp._mimeeq.md#markoptionbyblocknameandoptioncode)

Marks option by block name and option code.

**`param`** Block name of block which option is a part of

**`param`** Code of option to be selected

**`fires`** @mimeeq#mimeeq-select-option

**`fires`** @mimeeq#mimeeq-app-url-change

___

### markOptionModular

• **markOptionModular**: [`MarkOptionModular`](../namespaces/mimeeqApp._mimeeq.md#markoptionmodular)

Select option at modular on currently selected product(s).

**`fires`** @mimeeq#mimeeq-modular-select-option-multiple

**`fires`** @mimeeq#mimeeq-modular-select-option

**`param`** Option object to select

**`param`** Id of block

**`param`** Type of widget the block is using

**`param`** If `true` it will try to match selected option in other blocks within this block group

**`param`** Block name, it's used to run autosync rule

___

### openAddProductModal

• **openAddProductModal**: [`OpenAddProductModal`](../namespaces/mimeeqApp._mimeeq.md#openaddproductmodal)

Trigger this to open product list to select products to show at scene.

___

### openFinishModal

• **openFinishModal**: [`OpenFinishModal`](../namespaces/mimeeqApp._mimeeq.md#openfinishmodal)

Call it to open list of all elements on scene and tabs

**`fires`** @mimeeq#mimeeq-show-modular-summary

___

### openLoadSceneModal

• **openLoadSceneModal**: [`OpenLoadSceneModal`](../namespaces/mimeeqApp._mimeeq.md#openloadscenemodal)

Trigger this to open Scene picker

___

### prepareFilterOptions

• **prepareFilterOptions**: [`PrepareFilterOptions`](../namespaces/mimeeqApp._mimeeq.md#preparefilteroptions)

Prepare list of available filters with count of affected options

**`param`** List of all filters configured for customer

**`param`** List of available options

**`param`** List of currently selected filters

**`returns`** Map of possible filters

___

### redo

• **redo**: [`HistoryRedo`](../namespaces/mimeeqApp._mimeeq.md#historyredo)

Redo next history action

**`fires`** @mimeeq#mimeeq-history-go-forward

**`fires`** @mimeeq#mimeeq-app-url-change

___

### removeSelected

• **removeSelected**: [`RemoveProducts`](../namespaces/mimeeqApp._mimeeq.md#removeproducts)

Remove all selected products from scene

**`fires`** @mimeeq#mimeeq-modular-remove-product

___

### reset

• **reset**: [`HistoryReset`](../namespaces/mimeeqApp._mimeeq.md#historyreset)

Go back to initial configuration

**`fires`** @mimeeq#mimeeq-app-url-change

**`fires`** @mimeeq#mimeeq-history-reset

___

### saveImage

• **saveImage**: [`SaveImage`](../namespaces/mimeeqApp._mimeeq.md#saveimage)

Trigger current scene screenshot download

**`fires`** @mimeeq#mimeeq-3d-after-export-image

**`fires`** @mimeeq#mimeeq-3d-before-export-image

**`param`** Extension to save image with

**`param`** Expected image width in pixels. Height will prevail current canvas ratio

___

### selectAll

• **selectAll**: [`SelectAll`](../namespaces/mimeeqApp._mimeeq.md#selectall)

Select (or deselect) all models on the scene

**`fires`** @mimeeq#mimeeq-modular-unselect-all

**`fires`** @mimeeq#mimeeq-modular-select-all

___

### selectPopularConfig

• **selectPopularConfig**: [`SelectPopularConfig`](../namespaces/mimeeqApp._mimeeq.md#selectpopularconfig)

Trigger it to select popular configuration

**`since`** 6.0.0

**`param`** Popular configuration item data

**`fires`** @mimeeq#mimeeq-select-popular-variant

**`fires`** @mimeeq#mimeeq-app-url-change

___

### selectRelatedProduct

• **selectRelatedProduct**: [`SelectRelatedProduct`](../namespaces/mimeeqApp._mimeeq.md#selectrelatedproduct)

Call it to select product from related list

**`since`** 6.0.0

**`param`** Id of related product

**`param`** Variant code of related product

**`fires`** @mimeeq#mimeeq-open-related-product

**`fires`** @mimeeq#mimeeq-app-url-change

___

### setCarouselView

• **setCarouselView**: [`SetCarouselView`](../namespaces/mimeeqApp._mimeeq.md#setcarouselview)

Change currently visible view on canvas/2d

**`param`** id of the view to show. In case of 3d pass empty value

___

### setQuantity

• **setQuantity**: [`SetQuantity`](../namespaces/mimeeqApp._mimeeq.md#setquantity)

Set product quantity

**`param`** New quantity to be set

___

### setSelectMode

• **setSelectMode**: [`SetSelectMode`](../namespaces/mimeeqApp._mimeeq.md#setselectmode)

Set select mode for modular

**`fires`** @mimeeq#mimeeq-modular-toggle-select-mode

**`param`** New select mode. It can be either single or multi.

___

### setZoom

• **setZoom**: [`SetZoom`](../namespaces/mimeeqApp._mimeeq.md#setzoom)

Set specific zoom

**`param`** New zoom value

___

### showAR

• **showAR**: [`ShowAR`](../namespaces/mimeeqApp._mimeeq.md#showar)

Open current scene in AR

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

### showHelp

• **showHelp**: [`ShowHelp`](../namespaces/mimeeqApp._mimeeq.md#showhelp)

Trigger this to show help modal

___

### toggleDimensions

• **toggleDimensions**: [`ToggleDimensions`](../namespaces/mimeeqApp._mimeeq.md#toggledimensions)

Toggle dimensions on scene

**`fires`** @mimeeq#mimeeq-hide-dimensions

**`fires`** @mimeeq#mimeeq-show-dimensions

___

### toggleGrid

• **toggleGrid**: [`ToggleGrid`](../namespaces/mimeeqApp._mimeeq.md#togglegrid)

Toggle grid on scene.

**`fires`** @mimeeq#mimeeq-modular-show-grid

**`fires`** @mimeeq#mimeeq-modular-hide-grid

___

### toggleSelectMode

• **toggleSelectMode**: [`ToggleSelectMode`](../namespaces/mimeeqApp._mimeeq.md#toggleselectmode)

Toggle type of select at modular. It can be either singular or multi

**`fires`** @mimeeq#mimeeq-modular-toggle-select-mode

___

### toggleSlide

• **toggleSlide**: [`ToggleSlide`](../namespaces/mimeeqApp._mimeeq.md#toggleslide)

Activate/deactivate slide for currently selected product. Take a note not all products has slide available.

**`fires`** @mimeeq#mimeeq-modular-set-slide

___

### zoomOut

• **zoomOut**: [`ZoomOut`](../namespaces/mimeeqApp._mimeeq.md#zoomout)

Zoom out scene to see whole product

**`fires`** @mimeeq#mimeeq-3d-zoom-out-scene
