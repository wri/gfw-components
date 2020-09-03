import React from 'react';

import Template from './dashboard-pending.html';

const DashboardPendingTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default DashboardPendingTemplate;
