import React from 'react';

import Template from './dashboard-complete.html';

const DashboardCompleteTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default DashboardCompleteTemplate;
