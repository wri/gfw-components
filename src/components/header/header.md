The GFW header component. Logo, navigation menu, and languages are all customizable. This component contains a link to open the `<ContactUsModal />` as a dependancy.

```js
import { ContactUsModal } from 'gfw-components';

const [open, setIsOpen] = React.useState(false);

<div style={{ minHeight: '80px' }}>
  <Header openContactUsModal={() => setIsOpen(true)} />
  <ContactUsModal open={open}  onRequestClose={() => setIsOpen(false)} />
</div>
```