import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from 'styles/theme';

const PWrapper = styled.p`
  font-size: 16px;
  line-height: 24px;

  a {
    color: ${theme.colors.green};
    font-size: 16px;
    line-height: 24px;

    &:hover,
    &:active,
    &:visited {
      text-decoration: underline;
      color: ${theme.colors.darkGreen};
    }
  }
`;

const P = ({ children, ...props }) => (
  <PWrapper {...props}>{children}</PWrapper>
);

P.propTypes = {
  children: PropTypes.node,
};

export default P;
