```js
import Button from '../../button';

const [open, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(true)}>Open contact us modal</Button>
  <ContactUsModal open={open} onRequestClose={() => setIsOpen(false)} />
</div>
```