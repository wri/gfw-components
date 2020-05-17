<br />

```jsx static
import { MediaContextProvider, Media } from 'gfw-components';
```

If you want to rendering or hidding components in your layouts, you have a few utility components you can use to handle this with full SSR support. For this we use [fresnel](https://github.com/artsy/fresnel).

First you must wrap your layout with the `<MediaContextProvider />` so that the `<Media />` component can access the breakpoints via react context. You can then define at which breakpoint you would like to render the component. For more info see the [fresnel API](https://github.com/artsy/fresnel#media).

```jsx static
breakpoints = {
  small: '768px'
  medium: '860px'
  large: '1024px'
  xlarge: '1080px'
}
```

<br />
<br />