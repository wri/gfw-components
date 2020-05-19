Appends the required global css to the head of your application. Contains css reset, basic semantic styles for text, inputs and buttons, and fallback responsive media styles to support SSR responsive layouts.

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