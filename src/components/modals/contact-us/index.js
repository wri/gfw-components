import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ContactForm from 'components/forms/contact-us';
import Modal from 'components/modals/modal';

import { modalWrapperStyles } from './styles';

class ContactUsModal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { open, onRequestClose } = this.props;

    return (
      <Modal
        open={open}
        contentLabel="Contact Us"
        onRequestClose={onRequestClose}
        title="Contact Us"
        customStyles={modalWrapperStyles}
        renderFooter
      >
        <ContactForm onClose={onRequestClose} />
      </Modal>
    );
  }
}

export default ContactUsModal;
