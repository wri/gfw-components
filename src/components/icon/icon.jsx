import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './icon.scss';

function Icon({ className = null, name }) {
  return (
    <svg className={cx('c-icon', { [className]: !!className })}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
