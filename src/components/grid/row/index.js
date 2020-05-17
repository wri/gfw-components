/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from 'reflexbox';
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

const Row = (props) => (
  <RowDiv flexWrap="wrap" {...props}>
    {props.children}
  </RowDiv>
);

export default Row;
