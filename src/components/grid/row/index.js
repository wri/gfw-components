import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const RowDiv = styled(Flex)`
  max-width: 1120px;
  margin: auto;

  ${({ nested }) =>
    nested &&
    `
    margin: 0 -${theme.grid.mobileGutter}

    ${theme.mediaQueries.small} {
      margin: 0 -${theme.grid.desktopGutter}
    }
  `}

  ${({ expanded }) =>
    expanded &&
    `
      max-width: none;
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
  expanded: PropTypes.bool,
  children: PropTypes.node,
};

export default Row;
