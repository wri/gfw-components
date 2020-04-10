```js
import ContactUsModal from 'components/modals/contact-us';

const [open, setIsOpen] = React.useState(false);

<div>
  <Footer openContactUsModal={() => setIsOpen(true)} />
  <ContactUsModal open={open}  onRequestClose={() => setIsOpen(false)} />
</div>
```