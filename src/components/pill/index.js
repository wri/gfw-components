import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from 'assets/icons/close.svg';

import { PillWrapper } from './components';

const Pill = (props) => {
  const { className, label, onRemove, onClick } = props;

  return (
    <PillWrapper
      className={className}
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
    </PillWrapper>
  );
};

Pill.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};

export default Pill;
