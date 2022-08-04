---
title: Custom CSS
---

By default we are using dynamically created CSS classes for all elements so it's not possible to easily apply custom styles. But in case of few elements we also set fixed CSS class so these elements could be customized.

### Usage

Below we list all available clases with example styles

```html
<style>  
  .mmq-embed-block-name {
    // styles for options block label
    text-transform: capitalize;
    color: rgba(36, 51, 64);
  }
  .mmq-embed-number-inc {
    // for increase number button
    background-color: rgba(36, 51, 64);
  }
  
  .mmq-embed-number-dec {
    // for decrease number button
    background-color: rgba(36, 51, 64);
  }
</style>
```

## Mimeeq cart z-indexes

You can control Mimeeq cart z-index by using CSS variables. We expose following variables

```html
<style>  
  :root {
   // backdrop
   --mmq-basket-z-index: 10000;
   // basket panel
   --mmq-basket-panel-z-index: 100001;
  // basket button
   --mmq-basket-btn-z-index: 100000;
  }
</style>
```
