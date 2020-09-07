import React from 'react';

import Template from './template.html';

const EmailTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default EmailTemplate;
