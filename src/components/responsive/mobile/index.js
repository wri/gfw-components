import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../index';

const Mobile = (props) => <Media lessThan="small">{props.children}</Media>;

Mobile.propTypes = {
  children: PropTypes.node,
};

export default Mobile;
