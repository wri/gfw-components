import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const InputWrapper = styled.input`
  border: none;
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

  ${({ type }) =>
    type === 'textarea' &&
    `
    height: 110px;
    padding: 12px;
    line-height: 1.5;
    resize: none;
  `}
`;

const Input = React.forwardRef((props, ref) => (
  <InputWrapper {...props} ref={ref} />
));

export default Input;
