```js
import { Form, Submit } from 'gfw-components';

<Form onSubmit={() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
 })}>
  {({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
      <Submit submitting={submitting}>
        submit
      </Submit>
    </form>
  )}
</Form>
```