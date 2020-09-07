import React from 'react';

import Template from './contact-us-confirmation-en.html';

const ContactUsConfirmationTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default ContactUsConfirmationTemplate;
