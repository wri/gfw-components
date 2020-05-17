```js
import { Row } from 'gfw-components';

const Content = ({ num }) => (
  <p style={{ padding: '20px', backgroundColor: '#f9f9f9', margin: '15px 0' }}>{`Column ${num}`}</p>
);

<div style={{ backgroundColor: '#f0f0f0', padding: '10px 0' }}>
  <Row>
    <Column width={[1, 1/2, 1/3]}>
      <Content num={1} />
    </Column>
    <Column width={[1, 1/2, 1/3]}>
      <Content num={2} />
    </Column>
    <Column width={[1, 1/2, 1/3]}>
      <Content num={3} />
    </Column>
    <Column width={[1]}>
      <Row nested>
        <Column width={[1, 1/2]}>
          <Content num={4} />
        </Column>
        <Column width={[1, 1/2]}>
          <Content num={5} />
        </Column>
      </Row>
    </Column>
  </Row>
</div>
```