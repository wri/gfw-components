Field wrapper provides consistent label and layout styles for a given field. It can be used in conjunction with `<Field />` to create a custom field input.


```jsx static
import { Field, FieldWrapper, validations } from 'gfw-components';
import { CustomInput } from 'another-component-path';

const { composeValidators, required, validate } = validations;

<Field
  name="custom-field"
  validate={composeValidators(required, validate)}
>
  {({ input, meta }) => (
    <FieldWrapper
      {...meta}
      value={input.value}
    >
      <CustomInput
        name={input.name}
        value={input.value}
        onChange={input.onChange}
      />
    </FieldWrapper>
  )}
</Field>
```
