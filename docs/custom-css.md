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
