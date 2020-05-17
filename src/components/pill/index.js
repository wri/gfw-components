import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from 'assets/icons/close.svg';

import { PillWrapper, PillContainer } from './styles';

const Pill = (props) => {
  const { className, label, onRemove, onClick, active } = props;

  return (
    <PillWrapper
      className={className}
      onClick={onClick}
      removable={onRemove}
      active={active}
      role="button"
      tabIndex={onClick ? 0 : ''}
    >
      <PillContainer>
        {label}
        {onRemove && (
          <button onClick={onRemove}>
            <CloseIcon />
          </button>
        )}
      </PillContainer>
    </PillWrapper>
  );
};

Pill.propTypes = {
  className: PropTypes.string,
  /** text label */
  label: PropTypes.string,
  /** callback when 'x' is clicked */
  onRemove: PropTypes.func,
  /** callback when pill is clicked */
  onClick: PropTypes.func,
  /** changes to darker color. Used in some UI cases. */
  active: PropTypes.bool,
};

export default Pill;
