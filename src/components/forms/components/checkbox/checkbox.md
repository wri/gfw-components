```js
import { Form } from 'gfw-components';

<Form onSubmit={() => {}}>
  {({ handleSubmit, ...props }) => (
    <form onSubmit={handleSubmit}>
      <Checkbox
        name="checkbox"
        label="Choose an option"
        options={[
          {
            label: 'option 1',
            value: '1'
          },
          {
            label: 'option 2',
            value: '2'
          }
        ]}
      />
    </form>
  )}
</Form>
```