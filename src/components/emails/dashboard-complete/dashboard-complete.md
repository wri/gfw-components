After a user creates an area of interest, the cached tables for the data are generated. This can take up to 24hrs. This email is triggered when the tables are updated and all data is available.

Params available:

```js static
{
  name: 'area of interest',
  tags: 'tag1, tag2',
  subscriptions_url: 'http://test.com',
  dashboard_link: 'http://test.com',
  map_link: 'http://test.com'
}
```

```jsx
<DashboardCompleteTemplate />
```