# GFW components

A [React](https://reactjs.org/) component library for the [Global Forest Watch](https://github.com/Vizzuality/gfw) project built with [Emotion](https://emotion.sh/docs/introduction) CSS in JS styled components. All features have support for Server Side Rendering (SSR), the latest two versions of evergreen browsers and IE>=11. All designs for these components are based on the [Global Forest Watch UI kit](https://invis.io/82QPKXD964H).
<br />

## Installation

The library can be installed in two ways:
<br />

### 1. As a module

Install the package

```bash
npm install @worldresources/gfw-components
```

or with yarn

```bash
yarn add @worldresources/gfw-components
```

import and add the global styles component to the root of your app

```jsx static
import React from 'react'

import { GlobalStyles } from '@worldresources/gfw-components'

export const App = () => (
  <>
    <GlobalStyles />
    <Main />
  </>
)
```

add the font to your html document

```html
<link
  href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
  rel="stylesheet"
/>
```

then import components and add them to your layout

```jsx static
import React from 'react'

import { Header, Footer } from '@worldresources/gfw-components'

export const MyPage = () => (
  <div className='l-page'>
    <Header />
    <div className='content'>
      <h1>My page</h1>
    </div>
    <Footer />
  </div>
)
```

### Requirements

If you are using `@worldresources/gfw-components` as a npm module there are some external requirments:

- `react >= 16.8`
- `react-dom >= 16.8`

### 2. As a static script

The static build serves as a minimum requirement for the library providing only the global styles, header, footer, and contact us modal such that is can be injected into your site without the need for a react application. The bundle is passed through the same webpack `production` environment build to optimize for performance and minimization.

Add the following script tag and font to the head of your app.

```html
<script
  type="text/javascript"
  src="https://gfw-assets.s3.amazonaws.com/static/gfw-assets.latest.js"
  preconnect
></script>
<link
  href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
  rel="stylesheet"
/>
```

And then place inside the html docment tags with the following ids:

```html
<!-- place where you want the header -->
<div id="headerGfw"></div>
<!-- place where you want the footer -->
<div id="footerGfw"></div>
<!-- place at the bottom of your html document -->
<div id="contactGfw"></div>
```

You can pass props to the `<Header />` using the `window`

```js
window.gfwHeader = {
  languages,
  afterLangSelect,
  customLogo
}
```

## Development

Once you have cloned the repo, install the dependancies and start the styleguide.

```bash
yarn && yarn start
```

If you are using `yarn link` to develop with the component directly inside your app you can use the development of the bundle. This comes with source maps to help with debugging.

```bash
yarn dev
```

## Deployment

To deploy a new version of the library follow these steps:

1. Semver from master locally and follow the bash intructions for documenting the release.

```bash
release [major|minor|patch]
```

2. Deploy the new released version to Github pages (styleguide) and to AWS bucket (static scripts).

```bash
yarn deploy
```

2. Deploy the new released version to NPM.

```bash
npm publish
```

NOTE: for AWS you will need to have the creds present in your `.env` file.

## i18n

The `<Header />` comes with a default language dropdown component with built in support for Transifex or your choice of translation method. To use the default language selector make sure you add the [Transifex Live](https://docs.transifex.com/live/installing-the-javascript-snippet) snippets to the head of your site. If you are using the static script you must add the Transifex script to translate your site.
