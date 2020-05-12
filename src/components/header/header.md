```js
import ContactUsModal from 'components/modals/contact-us';

const [open, setIsOpen] = React.useState(false);

<div>
  <Header openContactUsModal={() => setIsOpen(true)} />
  <ContactUsModal open={open}  onRequestClose={() => setIsOpen(false)} />
</div>
```