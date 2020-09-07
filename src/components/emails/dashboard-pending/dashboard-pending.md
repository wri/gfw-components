After a user creates an area of interest, if the geostore doesnt already exist or doesnt yet have cached table data this email is triggered.

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
<DashboardPendingTemplate />
```