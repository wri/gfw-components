A convenience component for showing content on mobile.

```jsx static
import { MediaContextProvider, Mobile } from 'gfw-components';

<MediaContextProvider>
  <Mobile>
    <p>Content that will only show on screens less than 768px.</p>
  </Mobile>
</MediaContextProvider>
```