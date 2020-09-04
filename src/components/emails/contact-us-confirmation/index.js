import React from 'react';

import Template from './contact-us-confirmation-fr.html';

const ContactUsConfirmationTemplate = () => (
  <div dangerouslySetInnerHTML={{ __html: Template }} />
);

export default ContactUsConfirmationTemplate;
