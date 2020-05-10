import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Global, css } from '@emotion/core';

import Loader from 'components/loader';
import Button from 'components/button';
import CloseIcon from 'assets/icons/close.svg';

import { ModalWrapper } from './styles';
import baseStyles from './styles.scss';

class Modal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onAfterOpen: PropTypes.func,
    contentLabel: PropTypes.string,
    loading: PropTypes.bool,
    closeClass: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    renderFooter: PropTypes.bool,
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
        <Global
          styles={css`
            ${baseStyles}
          `}
        />
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
