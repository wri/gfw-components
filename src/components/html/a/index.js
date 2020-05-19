import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const AWrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
  transition: all 150ms ease-out;
  color: ${theme.colors.green};

  &:hover,
  &:active,
  &:visited {
    text-decoration: underline;
    color: ${theme.colors.darkGreen};
  }
`;

const A = ({ children, ...props }) => (
  <AWrapper {...props}>{children}</AWrapper>
);

A.propTypes = {
  children: PropTypes.node,
};

export default A;
