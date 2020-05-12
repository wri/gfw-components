/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Box } from 'reflexbox';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import theme from 'styles/theme';

const RowDiv = styled(Flex)`
  max-width: 1120px;
  margin: auto;

  ${({ nested }) =>
    nested &&
    `
    margin: 0 -16px;

    ${theme.mediaQueries.medium} {
      margin: 0 -20px;
    }
  `}
`;

const ColumnDiv = styled(Box)`
  padding: 0 16px;
  margin: 0;

  ${theme.mediaQueries.medium} {
    padding: 0 20px;
  }
`;

export const Row = (props) => (
  <ThemeProvider theme={theme}>
    <RowDiv flexWrap="wrap" {...props}>
      {props.children}
    </RowDiv>
  </ThemeProvider>
);
export const Column = (props) => (
  <ColumnDiv width={[1]} {...props}>
    {props.children}
  </ColumnDiv>
);
