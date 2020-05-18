import styled from '@emotion/styled';

import theme from 'styles/theme';

export const ButtonParent = styled.button`
  height: 40px;
  border-radius: 20px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.green};
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  line-height: 14px;
  font-weight: 500;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: background-color 150ms ease-out;
  width: fit-content;

  &:hover {
    background-color: ${theme.colors.darkGreen};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  svg {
    fill: ${theme.colors.white};
    width: 15px;
    height: 15px;
  }

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: 50%;
  `}

  ${({ size }) =>
    (size === 'small' &&
      `
      height: 20px;
      padding: 0 16px;
    `) ||
    (size === 'medium' &&
      `
      height: 30px;
      padding: 0 25px;
    `) ||
    (size === 'large' &&
      `
      height: 48px;
      font-size: 24px;
      border-radius: 24px;
      padding: 0 30px;
    `)}

  ${({ square }) =>
    square &&
    `
    border-radius: 0;
  `}

  ${({ round }) =>
    round &&
    `
    width: 40px;
    min-width: 40px;
    padding: 0;
  `}

  ${({ size, round }) =>
    size === 'large' &&
    round &&
    `
    border-radius: 25px;
    width: 48px;
  `}

  ${({ light }) =>
    light &&
    `
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkestGrey};
    border: solid 1px ${theme.colors.green};

    &:hover {
      background-color: #F6F6F4;
    }

    svg {
      fill: ${theme.colors.darkestGrey};
    }
  `}

  ${({ dark }) =>
    dark &&
    `
    background-color: ${theme.colors.darkGrey};

    &:hover {
      background-color: ${theme.colors.darkestGrey};
    }
  `}

  ${({ clear }) =>
    clear &&
    `
    background-color: transparent;
    color: ${theme.colors.darkGrey};

    svg {
      fill: ${theme.colors.darkGrey};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.darkestGrey};

      svg {
        fill: ${theme.colors.darkestGrey};
      }
    }
  `}
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  font-weight: inherit;
`;
