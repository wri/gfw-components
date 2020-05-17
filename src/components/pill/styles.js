import styled from '@emotion/styled';
import theme from 'styles/theme';

export const PillWrapper = styled.div`
  border-radius: 15px;
  color: ${theme.colors.white};
  background-color: #d4d4d4;
  font-size: 12px;
  padding: 0 8px;
  display: inline-block;
  outline: none;
  width: fit-content;

  button {
    padding-right: 8px;
    cursor: pointer;
    margin-left: 8px;
  }

  svg {
    width: 8px;
    height: 8px;
    margin-top: 3px;
    fill: ${theme.colors.white};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${theme.colors.greyishBrown};
  `}

  ${({ removable }) =>
    removable &&
    `
    padding-right: 0;
  `}

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
  `}
`;

export const PillContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: inherit;
  word-break: break-all;
`;
