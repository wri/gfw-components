import React from 'react';
import PropTypes from 'prop-types';

import tree from 'assets/icons/tree.png';

import { NoContentWrapper } from './styles';

const NoContent = ({ className, message, icon, children }) => (
  <NoContentWrapper className={className}>
    <p className="message">
      {children || message}
      {icon && <img className="message-icon" src={tree} alt="tree" />}
    </p>
  </NoContentWrapper>
);

NoContent.propTypes = {
  /** show the tree icon */
  icon: PropTypes.bool,
  className: PropTypes.string,
  /** custo message to shpw */
  message: PropTypes.string,
  children: PropTypes.node,
};

NoContent.defaultProps = {
  icon: false,
};

export default NoContent;
