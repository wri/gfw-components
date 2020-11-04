/* eslint-disable react/no-danger */
import React from 'react';
import { globalStringReplace } from 'utils/strings';

import Template from './contact-us-submission-en.html';

const demoVars = {
  user_email: 'david@test.com',
  topic: 'topic',
  tool: 'flagship',
  message: 'Hello I am asking about something.',
  opt_in: 'yes',
};

const ContactUsSubmissionTemplate = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: globalStringReplace(Template, demoVars),
    }}
  />
);

export default ContactUsSubmissionTemplate;
