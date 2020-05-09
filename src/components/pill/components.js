import styled from '@emotion/styled';
import theme from 'styles/theme';

export const PillWrapper = styled.div`
  height: 20px;
  border-radius: 15px;
  color: ${theme.colors.white};
  background-color: #d4d4d4;
  font-size: 12px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    fill: ${theme.colors.greyishBrown};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${theme.colors.greyishBrown};
  `}

  ${({ onRemove }) =>
    onRemove &&
    `
    padding-right: 0;
  `}

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
  `}
`;
