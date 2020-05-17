import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../index';

const Desktop = (props) => (
  <Media greaterThanOrEqual="small">{props.children}</Media>
);

Desktop.propTypes = {
  children: PropTypes.node,
};

export default Desktop;
