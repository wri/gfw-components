```js
import Button from '../button';

const [open, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(true)}>Open modal</Button>
  <Modal open={open} onRequestClose={() => setIsOpen(false)} />
</div>
```