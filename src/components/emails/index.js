import React from 'react';

import Template from './template.html';

const Email = () => <div dangerouslySetInnerHTML={{ __html: Template }} />;

export default Email;
