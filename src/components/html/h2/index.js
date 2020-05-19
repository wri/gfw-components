import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const H2Wrapper = styled.h2`
  font-size: 48px;
  line-height: 1;

  ${theme.mediaQueries.small} {
    font-size: 60px;
  }
`;

const H2 = ({ children, ...props }) => (
  <H2Wrapper {...props}>{children}</H2Wrapper>
);

H2.propTypes = {
  children: PropTypes.node,
};

export default H2;
