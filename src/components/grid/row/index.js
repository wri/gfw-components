import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const RowDiv = styled(Flex)`
  max-width: 1120px;
  margin: auto;
  padding: 0 16px;
  margin: 0 -8px;

  ${theme.mediaQueries.small} {
    padding: 0 20px;
    margin: 0 -10px;
  }

  ${({ nested }) =>
    nested &&
    `
    margin: 0 -24px;

    ${theme.mediaQueries.small} {
      margin: 0 -30px;
    }
  `}
`;

const Row = (props) => (
  <RowDiv flexWrap="wrap" {...props}>
    {props.children}
  </RowDiv>
);

Row.propTypes = {
  /** set to true when nesting a <Row /> inside a <Column /> component */
  nested: PropTypes.bool,
  children: PropTypes.node,
};

export default Row;
