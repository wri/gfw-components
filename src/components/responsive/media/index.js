import React from 'react';
import PropTypes from 'prop-types';

import { Media as MediaParent } from '../index';

const Media = ({ children, ...props }) => (
  <MediaParent {...props}>{children}</MediaParent>
);

Media.propTypes = {
  children: PropTypes.node,
  /** Content visible at a specific breakpoint */
  at: PropTypes.string,
  /** Content visible at less than breakpoint. */
  lessThan: PropTypes.string,
  /** Content visible at greater than breakpoint. */
  greaterThan: PropTypes.string,
  /** Content visible at greater than or equal to breakpoint. */
  greaterThanOrEqual: PropTypes.string,
  /** Content visible between two breakpoints. */
  between: PropTypes.array,
};

export default Media;
