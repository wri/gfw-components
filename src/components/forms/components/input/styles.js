import styled from '@emotion/styled';
import { css } from '@emotion/core';
import theme from 'styles/theme';

const baseCss = css`
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: ${theme.colors.slate};
  font-family: inherit;
  appearance: none;
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px ${theme.colors.border};
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

export const InputEl = styled.input`
  ${baseCss}
`;

export const TextareaEl = styled.textarea`
  ${baseCss}
  height: 110px;
  padding: 12px;
  line-height: 1.5;
  resize: none;
`;