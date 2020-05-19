import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const H3Wrapper = styled.h3`
  font-size: 28px;
  line-height: 30px;
  font-weight: 300;

  ${theme.mediaQueries.small} {
    font-size: 36px;
    line-height: 40px;
  }
`;

const H3 = ({ children, ...props }) => (
  <H3Wrapper {...props}>{children}</H3Wrapper>
);

H3.propTypes = {
  children: PropTypes.node,
};

export default H3;
