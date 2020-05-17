```js
import Row from 'components/grid/row';

const Content = ({ num }) => (
  <p style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '15px 0' }}>{`Column ${num}`}</p>
);

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
```