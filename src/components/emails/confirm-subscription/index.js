/* eslint-disable react/no-danger */
import React from 'react';

import Template from './confirm-subscription-en.html';

const ConfirmSubscriptionTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default ConfirmSubscriptionTemplate;
