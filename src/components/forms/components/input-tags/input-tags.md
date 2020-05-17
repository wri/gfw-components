```js
import { Form } from 'react-final-form';

<Form onSubmit={() => {}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <InputTags
        name="input"
        label="Tags input"
        required
      />
    </form>
  )}
</Form>
```