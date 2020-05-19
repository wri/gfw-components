import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const H5Wrapper = styled.h5`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

const H5 = ({ children, ...props }) => (
  <H5Wrapper {...props}>{children}</H5Wrapper>
);

H5.propTypes = {
  children: PropTypes.node,
};

export default H5;
