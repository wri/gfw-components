import theme from 'styles/theme';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const HeaderWrapper = styled.div`
  height: 56px;
  background-color: ${theme.colors.white};
  position: relative;
  width: 100%;
  border-bottom: solid 1px ${theme.colors.lightGrey};
  z-index: 1000;

  ${(props) =>
    props.theme &&
    props.theme === 'pro' &&
    `
      background-color: ${theme.colors.proGrey};
    `};

  ${({ fullScreen }) =>
    fullScreen &&
    `
    background-color: transparent;
    border-bottom: 0;
    height: 76px;
    pointer-events: none;

    ${theme.mediaQueries.small} {
      .nav-row {
        max-width: 100% !important;

        .nav-column {
          padding-left: 0;
        }
      }

      .dropdown-menu {
        top: 75px !important;
      }
    }
  `}

  ${({ slim }) =>
    slim &&
    `
    height: 43px;
    .nav-row {
      max-width: initial;
      padding: 0;
    }

    .nav-column {
      padding-left: 0;
    }

  `}

  ${({ showSubmenu, theme: headerTheme }) =>
    showSubmenu &&
    headerTheme !== 'pro' &&
    `
    background-color: ${theme.colors.white};
    border-bottom: solid 1px ${theme.colors.lightGrey};
    pointer-events: all;
  `}

  .logo {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 76px;
    height: 76px;
    cursor: pointer;
    pointer-events: all;
  }

  .nav {
    display: flex;
    position: relative;
    justify-content: flex-end;
    height: 56px;
    padding-left: 0;

    ${({ fullScreen }) =>
      fullScreen &&
      `
      height: 76px;
    `}

    ${({ slim }) =>
      slim &&
      `
      height: 43px;
    `}

    ${theme.mediaQueries.medium} {
      justify-content: flex-start;
      padding-left: 80px;
    }

    ${theme.mediaQueries.medium} {
      padding-left: 90px;
    }

    &.mobile {
      padding-left: 0;
    }
  }

  .nav-desktop {
    display: flex;
    position: relative;
    height: 56px;
    width: 100%;

    ${({ fullScreen }) =>
      fullScreen &&
      `
      height: 76px;
    `}

    ${({ slim }) =>
      slim &&
      `
      height: 43px;
    `}

    &.show-menu {
      justify-content: space-between;
    }
  }

  .nav-mobile {
    display: flex;

    ${theme.mediaQueries.medium} {
      display: none;
    }
  }

  .nav-item {
    height: 100%;
    position: relative;
    z-index: 2;

    .nested {
      padding: 0;
      margin: 0;
    }

    > a,
    > button,
    > div,
    .nav-link {
      height: 100%;
      display: flex;
      align-items: center;
      color: ${theme.colors.darkGrey};
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 10px;
      position: relative;
      white-space: nowrap;
      cursor: pointer;
      line-height: 1;

      ${(props) =>
        props.theme &&
        props.theme === 'pro' &&
        `
         color: ${theme.colors.white}
        `};

      ${theme.mediaQueries.medium} {
        margin: 0 5px;
      }

      svg {
        fill: ${theme.colors.darkGrey};
        ${(props) =>
          props.theme &&
          props.theme === 'pro' &&
          `
            fill: ${theme.colors.white};
          `};
        margin-top: -2px;
        transition: all 150ms ease-out;
      }

      &:focus {
        outline: none;
      }
    }

    .nav-link {
      &::after {
        content: '';
        height: 5px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: transparent;
      }

      &:hover {
        color: ${darken(0.2, theme.colors.darkGrey)};
        ${(props) =>
          props.theme &&
          props.theme === 'pro' &&
          `
           color: ${theme.colors.white};
           opacity: 0.9;
          `};
      }

      &.active {
        &::after {
          background-color: ${theme.colors.green};
        }
      }
    }
  }

  .nav-more > .nav-link {
    padding-right: 0;
    margin-right: 0;
  }

  .icon-submenu {
    margin-left: 5px;
  }

  .icon-close {
    width: 15px;
    height: 10px;
  }

  .icon-menu {
    width: 15px;
    height: 15px;
  }

  .my-gfw-icon {
    width: 15px;
    height: 15px;
    min-width: 15px;
  }
`;
