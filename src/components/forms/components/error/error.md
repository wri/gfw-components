```js
import { Form } from 'gfw-components';
import Input from 'components/forms/components/input';
import Submit from 'components/forms/components/submit';

<Form onSubmit={() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
 })}>
  {({ handleSubmit, submitFailed, submitError, valid, submitting, submitSucceeded }) => (
    <form onSubmit={handleSubmit}>
      <Input
        name="input"
        label="input"
        required
      />
      <Error
        valid={valid}
        submitFailed={submitFailed}
        submitError={submitError}
      />
      <Submit submitting={submitting}>
        click to submit
      </Submit>
    </form>
  )}
</Form>
```