import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Global } from '@emotion/core';

import Loader from 'components/loader';
import Button from 'components/button';
import CloseIcon from 'assets/icons/close.svg';

import { ModalWrapper, baseStyles } from './styles';

class Modal extends PureComponent {
  static propTypes = {
    /** control prop for opening the modal */
    open: PropTypes.bool.isRequired,
    /** func to close the modal */
    onRequestClose: PropTypes.func.isRequired,
    /** callback after opening */
    onAfterOpen: PropTypes.func,
    /** accessible content label */
    contentLabel: PropTypes.string,
    /** if your content reuqires fetching you can show the loader during the fetch */
    loading: PropTypes.bool,
    /** overide styles for close button */
    closeClass: PropTypes.string,
    children: PropTypes.node,
    /** ttitle displayed at top of modal */
    title: PropTypes.string,
    className: PropTypes.string,
    /** show the dark grey footer border. Used for forms in modals */
    renderFooter: PropTypes.bool,
    /** override the react-modal default styles */
    customStyles: PropTypes.object,
  };

  static defaultProps = { contentLabel: '' };

  render() {
    const {
      open,
      onRequestClose,
      contentLabel,
      closeClass,
      children,
      title,
      className,
      loading,
      onAfterOpen,
      renderFooter,
      customStyles,
    } = this.props;

    return (
      <>
        <Global styles={baseStyles} />
        <ReactModal
          isOpen={open}
          className={cx('c-modal', className)}
          overlayClassName="modal-overlay"
          onRequestClose={onRequestClose}
          contentLabel={contentLabel}
          onAfterOpen={onAfterOpen}
          ariaHideApp={false}
        >
          <ModalWrapper css={customStyles}>
            <Button
              clear
              round
              className={`modal-close ${closeClass}`}
              onClick={onRequestClose}
            >
              <CloseIcon />
            </Button>
            {loading && <Loader />}
            {!loading && title && <h3 className="modal-title">{title}</h3>}
            {!loading && <div className="modal-content">{children}</div>}
            {renderFooter && <div className="footer-banner" />}
          </ModalWrapper>
        </ReactModal>
      </>
    );
  }
}

export default Modal;
