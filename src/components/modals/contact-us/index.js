import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ContactForm from 'components/forms/contact-us';
import Modal from 'components/modals/modal';

import './styles.scss';

class ContactUsModal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
  };

  render() {
    const { open, onRequestClose } = this.props;

    return (
      <Modal
        open={open}
        contentLabel="Contact Us"
        onRequestClose={onRequestClose}
        title="Contact Us"
        className="c-contact-us-modal"
        renderFooter
      >
        <ContactForm onClose={onRequestClose} />
      </Modal>
    );
  }
}

export default ContactUsModal;
