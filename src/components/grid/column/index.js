/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from 'reflexbox';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const ColumnDiv = styled(Box)`
  padding: 0 16px;
  margin: 0;

  ${theme.mediaQueries.small} {
    padding: 0 20px;
  }
`;

const Column = (props) => (
  <ColumnDiv width={[1]} theme={theme} {...props}>
    {props.children}
  </ColumnDiv>
);

export default Column;
