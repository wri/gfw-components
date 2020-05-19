import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const H4Wrapper = styled.h4`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;

  ${theme.mediaQueries.small} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const H4 = ({ children, ...props }) => (
  <H4Wrapper {...props}>{children}</H4Wrapper>
);

H4.propTypes = {
  children: PropTypes.node,
};

export default H4;
