import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modals/modal';
import Share from 'components/share';

import './styles.scss';

class ShareModal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
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
        className="c-share-modal"
      >
        <Share {...this.props} />
      </Modal>
    );
  }
}

export default ShareModal;
