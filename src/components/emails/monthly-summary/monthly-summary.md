Alert email triggered at the end of each month showing the total, GLAD, and VIIRS alerts inside your area of interest alongside intersected priority areas.

```js static
{
  alert_name: 'area of interest',
  subscriptions_url: 'https://test.com',
  tags: 'fish, chips',
  formatted_alert_count: '2.3k',
  formatted_glad_count: '2.3k',
  formatted_viirs_count: '2.3k',
  glad_count: '2,331',
  glad_frequency: 'low',
  viirs_count: '2,331',
  viirs_frequency: 'low',
  month: 'september',
  year: '2020',
  week_of: '26 Aug',
  week_start: '26/08/2020',
  week_end: '02/09/2020',
  viirs_days_count: '31',
  viirs_day_start: '01/09/2020',
  viirs_day_end: '01/10/2020',
  formatted_priority_areas: {
    intact_forest: '1k',
    primary_forest: '300',
    peat: '0',
    protected_areas: '1.2k',
    plantations: '1.2k',
    other: '1.2k'
  },
  formatted_glad_priority_areas: {
    intact_forest: '1k',
    primary_forest: '300',
    peat: '0',
    protected_areas: '1.2k',
  },
  formatted_viirs_priority_areas: {
    intact_forest: '1k',
    primary_forest: '300',
    peat: '0',
    protected_areas: '1.2k',
  },
  alert_link: 'http://test.com',
  dashboard_link: 'http://test.com',
  unsubscribe_url: 'http://test.com',
}
```

```jsx
<MonthlySummaryEmail />
```