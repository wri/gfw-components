import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { Global } from '@emotion/core';

import { tippyStyles } from './styles';

const Tooltip = ({ children, ...props }) => (
  <>
    <Global styles={tippyStyles} />
    <Tippy {...props}>{children}</Tippy>
  </>
);

Tooltip.propTypes = {
  children: PropTypes.node,
};

export default Tooltip;
