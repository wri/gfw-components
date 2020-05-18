```js
import { Form } from 'gfw-components';

<Form onSubmit={() => {}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Input
        name="Input"
        label="Input"
        required
      />
    </form>
  )}
</Form>
```