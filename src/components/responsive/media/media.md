Component for accessing the `Media` API from fresnel to decide when to render content.

```jsx static
import { MediaContextProvider, Media } from 'gfw-components';

<MediaContextProvider>
  <Media at="small">
    <p>Content visible at a specific breakpoint.</p>
  </Media>
  <Media lessThan="small">
    <p>Content visible at less than breakpoint.</p>
  </Media>
  <Media greaterThan="small">
    <p>Content visible at greater than breakpoint.</p>
  </Media>
  <Media greaterThanOrEqual="small">
    <p>Content visible at greater than or equal to breakpoint.</p>
  </Media>
  <Media between={['small', 'large']}>
    <p>Content visible between two breakpoints.</p>
  </Media>
</MediaContextProvider>
```