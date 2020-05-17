/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Box } from 'reflexbox';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const RowDiv = styled(Flex)`
  max-width: 1120px;
  margin: auto;

  ${({ nested }) =>
    nested &&
    `
    margin: 0 -16px;

    ${theme.mediaQueries.small} {
      margin: 0 -20px;
    }
  `}
`;

const ColumnDiv = styled(Box)`
  padding: 0 16px;
  margin: 0;

  ${theme.mediaQueries.small} {
    padding: 0 20px;
  }
`;

export const Row = (props) => (
  <RowDiv flexWrap="wrap" {...props}>
    {props.children}
  </RowDiv>
);

export const Column = (props) => (
  <ColumnDiv width={[1]} theme={theme} {...props}>
    {props.children}
  </ColumnDiv>
);
