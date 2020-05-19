import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'reflexbox';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const ColumnDiv = styled(Box)`
  padding: 0 ${theme.grid.mobileGutter};
  margin: 0;

  ${theme.mediaQueries.small} {
    padding: 0 ${theme.grid.desktopGutter};
  }
`;

const Column = (props) => (
  <ColumnDiv width={[1]} theme={theme} {...props}>
    {props.children}
  </ColumnDiv>
);

Column.propTypes = {
  /** fractional width of child content measured against responsive breakpoints */
  width: PropTypes.array,
  children: PropTypes.node,
};

export default Column;
