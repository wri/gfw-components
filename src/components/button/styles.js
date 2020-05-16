import styled from '@emotion/styled';

import theme from 'styles/theme';

export const ButtonParent = styled.button`
  height: 40px;
  border-radius: 20px;
  padding: 0 25px;
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
    `) ||
    (size === 'medium' &&
      `
      height: 30px;
    `) ||
    (size === 'large' &&
      `
      height: 48px;
      font-size: 24px;
      border-radius: 24px;
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
    color: ${theme.colors.slateDark};
    border: solid 1px ${theme.colors.green};

    &:hover {
      background-color: ${theme.colors.lightGrey};
    }

    svg {
      fill: ${theme.colors.slateDark};
    }
  `}

  ${({ dark }) =>
    dark &&
    `
    background-color: ${theme.colors.slate};

    &:hover {
      background-color: ${theme.colors.slateDark};
    }
  `}

  ${({ clear }) =>
    clear &&
    `
    background-color: transparent;
    color: ${theme.colors.slate};

    svg {
      fill: ${theme.colors.slate};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.slateDark};

      svg {
        fill: ${theme.colors.slateDark};
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
