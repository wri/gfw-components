```js
import { Form } from 'react-final-form';

<Form onSubmit={() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
 })}>
  {({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
      <Submit submitting={submitting}>
        click me to submit
      </Submit>
    </form>
  )}
</Form>
```