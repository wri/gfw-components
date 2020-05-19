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