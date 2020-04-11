```js
import Button from '../../button';

const [open, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(true)}>Open contact us modal</Button>
  <MetaModal open={open} onRequestClose={() => setIsOpen(false)} metakey="tsc_drivers" />
</div>
```