Simple switch component that can be used as a toggle or tabs.

```js
const [side, setSide] = React.useState('left');

<Switch
  value={side}
  options={[
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' },
  ]}
  onChange={() =>
    setSide(side === 'left' ? 'right' : 'left')}
/>
```