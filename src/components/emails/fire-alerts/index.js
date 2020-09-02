import React from 'react';

import Template from './fire-alerts-en.html';

const Email = () => <div dangerouslySetInnerHTML={{ __html: Template }} />;

export default Email;
