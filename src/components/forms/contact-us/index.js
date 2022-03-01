import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

import submitContactForm from 'services/contact';

import Button from 'components/button';
import A from 'components/html/a';
import P from 'components/html/p';

import Error from 'components/forms/components/error';
import Input from 'components/forms/components/input';
import Select from 'components/forms/components/select';
import Submit from 'components/forms/components/submit';
import H3 from 'components/html/h3';

import { email } from 'components/forms/validations';

import { topics, tools } from './config';

import { ContactFormWrapper } from './styles';

const isServer = typeof window === 'undefined';

class ContactUsForm extends PureComponent {
  static propTypes = {
    /** function to clear form after successful submission */
    resetForm: PropTypes.func,
    /** form values prefilled from external data */
    initialValues: PropTypes.object,
  };

  sendContactForm = (values) => {
    const language =
      !isServer && window.Transifex
        ? window.Transifex.live.getSelectedLanguageCode()
        : 'en';

    return submitContactForm({ ...values, language })
      .then(() => {})
      .catch((error) => {
        const { errors } = error.response && error.response.data;

        return {
          [FORM_ERROR]:
            (errors && error.length && errors[0].detail) ||
            'Service unavailable',
        };
      });
  };

  render() {
    const { resetForm, initialValues } = this.props;

    return (
      <Form onSubmit={this.sendContactForm} initialValues={initialValues}>
        {({
          handleSubmit,
          submitting,
          valid,
          submitFailed,
          submitSucceeded,
          submitError,
          values,
          form: { reset },
        }) => {
          const activeTopic = topics.find((t) => t.value === values.topic);

          return (
            <ContactFormWrapper>
              {submitSucceeded ? (
                <div className="feedback-message">
                  <H3>
                    Thank you for contacting Global Forest Watch! Check your
                    inbox for a confirmation email.
                  </H3>
                  <P>Interested in getting news and updates from us?</P>
                  <div className="button-group">
                    <a
                      href="https://www.globalforestwatch.org/subscribe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button onClick={resetForm || (() => reset())}>
                        Subscribe
                      </Button>
                    </a>
                    <Button
                      className="close-button"
                      onClick={resetForm || (() => reset())}
                    >
                      No thanks
                    </Button>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <p className="subtitle">
                    For media inquiries, email
                    {' '}
                    <A href="mailto:Kaitlyn.Thayer@wri.org">
                      Kaitlyn.Thayer@wri.org
                    </A>
                    .
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Input
                      name="email"
                      type="email"
                      label="email"
                      placeholder="example@globalforestwatch.org"
                      validate={[email]}
                      required
                    />
                    <Select
                      name="topic"
                      label="topic"
                      placeholder="Select a topic"
                      options={topics}
                      required
                    />
                    <Select
                      name="tool"
                      label="tool"
                      placeholder="Select a tool that applies"
                      options={tools}
                      required
                    />
                    <Input
                      name="message"
                      label="message"
                      type="textarea"
                      placeholder={activeTopic && activeTopic.placeholder}
                      required
                    />
                    <Error
                      valid={valid}
                      submitFailed={submitFailed}
                      submitError={submitError}
                    />
                    <Submit submitting={submitting}>send</Submit>
                  </form>
                </Fragment>
              )}
            </ContactFormWrapper>
          );
        }}
      </Form>
    );
  }
}

export default ContactUsForm;
