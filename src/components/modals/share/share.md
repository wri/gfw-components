```js
import Button from '../../button';

const [open, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(true)}>Open share modal</Button>
  <ShareModal open={open} onRequestClose={() => setIsOpen(false)} embed />
</div>
```