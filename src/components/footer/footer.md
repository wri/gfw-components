The GFW footer component. No customization available. This component contains a link to open the `<ContactUsModal />` as a dependancy.

```js
import { ContactUsModal } from 'gfw-components';

const [open, setIsOpen] = React.useState(false);

<div>
  <Footer openContactUsModal={() => setIsOpen(true)} />
  <ContactUsModal open={open}  onRequestClose={() => setIsOpen(false)} />
</div>
```