import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import theme from 'styles/theme';

const baseStyles = css`
  order: none;
  background-color: transparent;
  font-size: 14px;
  color: ${theme.colors.darkGrey};
  font-family: inherit;
  appearance: none;
  box-sizing: border-box;
  border: solid 1px ${theme.colors.lightGrey};
  border-radius: 4px;
  height: 40px;
  padding: 0 12px;
  width: 100%;

  &::placeholder {
    color: #a8a8a8;
  }

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.input`
  ${baseStyles}
`;

const TextAreaWrapper = styled.textarea`
  ${baseStyles}

  height: 110px;
  padding: 12px;
  line-height: 1.5;
  resize: none;
`;

const Input = React.forwardRef((props, ref) =>
  props.type === 'textarea' ? (
    <TextAreaWrapper {...props} ref={ref} />
  ) : (
    <InputWrapper {...props} ref={ref} />
  )
);

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
