<br />

```jsx static
import { Row, Column } from 'gfw-components';
```

GFW uses a flexbox grid for rendering layouts, whether responsive or not. You can wrap any layout in a `<Row />` component to provide the correct max width, and a `<Column />` component for padding and responsive layouts. These components are `<Flex />` and `<Box />` components from [reflexbox](https://rebassjs.org/reflexbox/) with strict props for defining the wrapper and gutter padding for desktop and mobile.

The `<Row />` component accepts a `nested` prop for rendering a `<Row />` inside a `<Column />` to offset the outter padding.

The `<Column />` component accepts a single prop `width` that can be passed an array of fractional widths to render the content at.

```jsx static
<Column width={[
  1, // less than 768px
  1/2, // less than 860px
  1/3, // less than 1024px
  1/4 // less than 1080
]}>
```

Below in the `<Column />` component you will find an example of how to make a responsive grid with both components

<br />
<br />