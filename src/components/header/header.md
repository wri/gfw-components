The GFW header component. Logo, navigation menu, and languages are all customizable. This component contains a link to open the `<ContactUsModal />` as a dependancy. To use the default language selector make sure you add the [Transifex Live](https://docs.transifex.com/live/installing-the-javascript-snippet) snippet. If you want to handle translations through another method you can use the `afterLangSelect` prop, alongside passing in your own custom `languages` options.

```js
import { ContactUsModal } from 'gfw-components';

const [open, setIsOpen] = React.useState(false);

<div style={{ minHeight: '80px' }}>
  <Header openContactUsModal={() => setIsOpen(true)} fullScreen />
  <ContactUsModal open={open}  onRequestClose={() => setIsOpen(false)} />
</div>
```