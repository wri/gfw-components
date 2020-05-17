The library can be installed in two ways:
<br />

### 1. As a module

Install the package

```bash
npm install gfw-components
```

or with yarn

```bash
yarn add gfw-components
```

import and add the global styles component to the root of your app

```jsx static
import React from "react"

import { GlobalStyles } from 'gfw-components';

export const App = () => (
  <>
    <GlobalStyles />
    <Main />
  </>
);
```

add the font to your html document
```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
```

then import components and add them to your layout

```jsx static
import React from "react"

import { Header, Footer } from 'gfw-components';

export const MyPage = () => (
  <div className="l-page">
    <Header />
    <div className="content">
      <h1>My page</h1>
    </div>
    <Footer />
  </div>
);
```
<br />

### Requirements

If you are using `gfw-components` as a npm module there are some external requirments:
- `react >= 16.8`
- `react-dom >= 16.8`

<br />
<br />

### 2. As a static script
The static build serves as a minimum requirement for the library providing only the global styles, header, footer, and contact us modal such that is can be injected into your site without the need for a react application. The bundle is passed through the same webpack `production` environment build to optimize for performance and minimization.

Add the following script tag and font to the head of your app.

```html
<script type="text/javascript" src="https://gfw-assets.s3.amazonaws.com/static/gfw-assets.latest.js" preconnect></script>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
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
<br />
<br />