import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const H1Wrapper = styled.h1`
  font-size: 30px;
  font-weight: 300;
  line-height: 1;

  ${theme.mediaQueries.small} {
    font-size: 48px;
  }
`;

const H1 = ({ children, ...props }) => (
  <H1Wrapper {...props}>{children}</H1Wrapper>
);

H1.propTypes = {
  children: PropTypes.node,
};

export default H1;
