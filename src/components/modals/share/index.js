import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modals/modal';
import Share from 'components/share';

import { modalWrapperStyles } from './styles';

class ShareModal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    /** custom title for the modal */
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Share this view',
  };

  render() {
    const { title, onRequestClose, open } = this.props;

    return (
      <Modal
        open={open}
        contentLabel={`Share: ${title}`}
        onRequestClose={onRequestClose}
        title={title}
        customStyles={modalWrapperStyles}
      >
        <Share {...this.props} />
      </Modal>
    );
  }
}

export default ShareModal;
