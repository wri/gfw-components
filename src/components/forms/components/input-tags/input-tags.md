```js
import { Form } from 'gfw-components';

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