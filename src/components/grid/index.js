/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Box } from 'reflexbox';
import styled from '@emotion/styled';

const RowDiv = styled(Flex)`
  max-width: 1120px;
`;

const ColumnDiv = styled(Box)`
  padding: 0 16px;
  margin: 0;

  ${(props) => props.theme.mediaQueries.m} {
    padding: 0 20px;
  }
`;

export const Row = (props) => (
  <RowDiv flexWrap="wrap" {...props}>
    {props.children}
  </RowDiv>
);
export const Column = (props) => (
  <ColumnDiv width={[1]} {...props}>
    {props.children}
  </ColumnDiv>
);
