---
title: Introduction
slug: /
---

This documentation is intended for developers who want to understand how to integrate Mimeeq's software into a third party site.
If you would like to find information about using the application, adding products, prices, 3d models and general how to your application interface, please visit our [app knowledge base](https://help.mimeeq.com/).

If you are not sure what you are looking for or need further assistance, reach out to us using live chat.

### What is Mimeeq Configurator

Mimeeq Configurator is a client-side JavaScript embeddable web-experiences for Mimeeq application. It offers a growing library of components and methods addressing most of the requirements for customer needs and eCommerce experiences.  

Learn more about Mimeeq App on [our homepage](https://mimeeq.com/).

### Embed

Mimeeq provides highly customizable embeddable configurator for all customers and products. It comes in multiple variants, like

- standalone product (standard and modular) configurator
- product list with configurator and favourites (optional)
- product group list with configurator
- favourites list with configurator

You can generate any of these from snippet generator at Mimeeq App. It also allows to configure basic UI options like visibility of UI elements, language or
some colors.

For further customization options please consult specific articles

- Set custom translations, [click here](/custom-translations)
- To learn more about settings custom styles, [click here](/custom-css)
- To learn more about available configurator options, [click here](/embed-opttions)

### Auth

Aside from configurator itself we also provide authentication library. You can either use mimeeq provided modals to display sign-in form or user profile or use
exposed API to create you own experience.

Auth library comes with following modal forms

- [Sign in](/auth-auth)
- [Forgot password](/auth-forgot-password)
- [User Profile](/auth-user)

To explore more about it, [click here](/auth-introduction).

In case of simple websites you may take a look on our simple library created to simplify process of integrating our library with your
page, [click here](/library-html-client).

### JS API

`window.mimeeqApp`, `window.mimeeqAuth`

Together with loading Mimeeq Configurator on the page, it will also include configurator JS API.

This API includes a set of useful helpers methods addressing common requirements on web and eCommerce projects.

The API is available on the `window` object of the website as `window.mimeeqApp` for configurator and `window.mimeeqAuth` for authentication embed.

You can explore all the available methods for configurator [here](/web/api/modules/mimeeqApp) and for auth [here](/web/api/modules/mimeeqAuth).

### Data observables

`window.mimeeqApp.observers`

As part of above JS API we also offer data observables. These observables create possibility to subscribe to all data loaded used by configurator for currently
displayed product.

It can be then used to create own configurator UI extensions or whole custom UI with only canvas coming from embed.

To learn more about observables concept, [click here](https://rxjs.dev/guide/observable).

To explore available observables, [click here](/web/api/interfaces/mimeeqApp._mimeeq.Observers)

### Events

Embed provides number of custom events triggered during configurator lifecycle. These can be used to creating more immersive experiences for you users or to get
notice about some important user actions to create eCommerce integration.

Configurator not only triggers events. We also listen for some of them. You can trigger these events to manipulate some UI.

To learn more about events, [click here](/events)

### REST API

In eCommerce world having only client API isn't always the right answer. Especially when one consider security. To solve this issue Mimeeq provides REST API.
You can use this to get product data or fetch prices for your products.

All of exposed methods require authentication. To authenticate you need to generate API Key for your company from Mimeeq App.

To dive deeper into these APIs, [click here](/api-reference)

