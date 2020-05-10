import { css } from '@emotion/core';

import theme from './theme';

export default css`
  html {
    font-family: ${theme.fontFamily};
    color: ${theme.colors.slateDark};
    font-size: 16px;
    font-weight: 400;
  }

  h1 {
    font-size: 48px;
    line-height: 1;

    ${theme.mediaQueries.medium} {
      font-size: 60px;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
    line-height: 1;

    ${theme.mediaQueries.medium} {
      font-size: 48px;
    }
  }

  h3 {
    font-size: 28px;
    line-height: 30px;
    font-weight: 300;

    ${theme.mediaQueries.medium} {
      font-size: 36px;
      line-height: 40px;
    }
  }

  h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-transform: uppercase;

    ${theme.mediaQueries.medium} {
      font-size: 18px;
      line-height: 24px;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 150ms ease-out;
  }

  p {
    font-size: 16px;
    line-height: 24px;

    a {
      color: ${theme.colors.green};
      font-size: 16px;
      line-height: 24px;

      &:hover,
      &:active,
      &:visited {
        text-decoration: underline;
        color: ${theme.colors.darkGreen};
      }
    }
  }

  blockquote {
    font-size: 24px;
    line-height: 36px;
    text-decoration: underline;
    font-weight: 300;
    font-style: italic;

    &:hover {
      color: inherit;
    }

    ${theme.mediaQueries.medium} {
      font-size: 30px;
      line-height: 45px;
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  input,
  textarea {
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: $slate;
    font-family: inherit;
    appearance: none;
    box-sizing: border-box;
    border-radius: 4px;
    border: solid 1px ${theme.colors.border};
    height: 40px;
    padding: 0 12px;
    width: 100%;

    &.textarea {
      height: 110px;
      padding: 12px;
      line-height: 1.5;
      resize: none;
    }

    &::placeholder {
      color: #a8a8a8;
    }

    &:focus {
      outline: none;
    }
  }
`;
