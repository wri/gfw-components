```js
import { Form } from 'react-final-form';

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