```js
import Button from '../../button';

const [open, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(true)}>Open modal</Button>
  <Modal title="Demo modal" open={open} onRequestClose={() => setIsOpen(false)}>
    <p>
      With some demo content
    </p>
  </Modal>
</div>
```