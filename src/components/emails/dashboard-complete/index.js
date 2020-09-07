import React from 'react';
import { globalStringReplace } from 'utils/strings';

import Template from './dashboard-complete-zh.html';

const demoVars = {
  name: 'area of interest',
  tags: 'tag1, tag2',
  subscriptions_url: 'http://test.com',
  dashboard_link: 'http://test.com',
  map_link: 'http://test.com',
};

const DashboardCompleteTemplate = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: globalStringReplace(Template, demoVars),
    }}
  />
);

export default DashboardCompleteTemplate;
