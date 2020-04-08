import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Loader from 'components/loader';
import CloseIcon from 'assets/icons/close.svg';

import './styles.scss';

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
    customStyles: PropTypes.object
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
      customStyles,
      onAfterOpen
    } = this.props;

    return (
      <ReactModal
        className={cx('c-modal', className)}
        isOpen={open}
        onRequestClose={onRequestClose}
        style={
          customStyles ||
            {
              overlay: {
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px 0 rgba(71, 44, 184, 0.1)',
                backgroundColor: 'rgba(17, 55, 80, 0.4)',
                overflow: 'auto'
              },
              content: {
                position: 'relative',
                top: 'auto',
                left: 'auto',
                right: 'auto',
                bottom: 'auto',
                margin: 'auto',
                padding: '0',
                border: 'none',
                borderRadius: 0
              }
            }
        }
        contentLabel={contentLabel}
        onAfterOpen={onAfterOpen}
        ariaHideApp={false}
      >
        <button
          className={`modal-close ${closeClass}`}
          onClick={onRequestClose}
        >
          <CloseIcon />
        </button>
        {loading && <Loader />}
        {!loading && title && <p className="modal-title">{title}</p>}
        {!loading && <div className="modal-content">{children}</div>}
      </ReactModal>
    );
  }
}

export default Modal;
