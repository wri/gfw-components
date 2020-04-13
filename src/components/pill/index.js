import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CloseIcon from 'assets/icons/close.svg';

import './styles.scss';

const Pill = (props) => {
  const { active, className, label, onRemove, onClick } = props;

  return (
    <div
      className={cx('c-pill', {
        '-removable': onRemove,
        '-active': active,
        '-clickable': onClick,
        [className]: className,
      })}
      onClick={onClick}
      role="button"
      tabIndex={onClick ? 0 : ''}
    >
      {label}
      {onRemove && (
        <button onClick={onRemove}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

Pill.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};

export default Pill;
