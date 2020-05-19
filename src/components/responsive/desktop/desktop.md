A convenience component for showing content on desktop.

```jsx static
import { MediaContextProvider, Desktop } from 'gfw-components';

<MediaContextProvider>
  <Desktop>
    <p>Content that will only show on screens greater than or equal to 768px.</p>
  </Desktop>
</MediaContextProvider>
```