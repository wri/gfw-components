/* eslint-disable react/no-danger */
import React from 'react';
import { globalStringReplace } from 'utils/strings';

import FireAlertsTemplate from './fires-alerts-en.html';

const demoVars = {
  alert_name: 'area of interest',
  subscriptions_url: 'https://test.com',
  tags: 'fish, chips',
  formatted_alert_count: '2.3k',
  viirs_count: '2,331',
  week_of: '26 Aug',
  week_start: '26/08/2020',
  week_end: '02/09/2020',
  viirs_frequency: 'low',
  'formatted_priority_areas.intact_forest': '1k',
  'formatted_priority_areas.primary_forest': '300',
  'formatted_priority_areas.peat': '0',
  'formatted_priority_areas.protected_areas': '1.2k',
  alert_link: 'http://test.com',
  dashboard_link: 'http://test.com',
  unsubscribe_url: 'http://test.com',
  'downloadUrls.csv': 'https://test.com',
};

const FireAlertsEmail = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: globalStringReplace(FireAlertsTemplate, demoVars),
    }}
  />
);

export default FireAlertsEmail;
