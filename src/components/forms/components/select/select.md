```js
import { Form } from 'gfw-components';

<Form onSubmit={() => {}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Select
        name="select"
        label="Select"
        options={[
          {
            label: 'option 1',
            value: 1
          },
          {
            label: 'option 2',
            value: 2
          }
        ]}
        placeholder="Select an option"
        required
      />
    </form>
  )}
</Form>
```