```js
import { Form } from 'gfw-components';

<Form onSubmit={() => {}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Radio
        name="radio"
        label="Radio"
        options={[
          {
            label: 'option 1',
            value: "1"
          },
          {
            label: 'option 2',
            value: "2"
          }
        ]}
        selectedOption={1}
        required
      />
    </form>
  )}
</Form>
```