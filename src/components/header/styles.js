import theme from 'styles/theme';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { darken } from 'polished';

export const bodyStyles = css`
  .Header__no-scroll {
    overflow: hidden;
  }
`;

export const HeaderWrapper = styled.div`
  height: 56px;
  background-color: ${theme.colors.white};
  position: relative;
  width: 100%;
  border-bottom: solid 1px ${theme.colors.lightGrey};
  z-index: 1000;

  ${({ fullScreen }) =>
    fullScreen &&
    `
    background-color: transparent;
    border-bottom: 0;
    height: 76px;
    pointer-events: none;

    ${theme.mediaQueries.medium} {
      > div {
        max-width: 100%;

        > div {
          padding-left: 0;
        }
      }

      .dropdown-menu {
        top: 75px;
      }
    }
  `}

  ${({ showSubmenu }) =>
    showSubmenu &&
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
      margin: 0 5px;
      position: relative;
      white-space: nowrap;
      cursor: pointer;

      svg {
        fill: ${theme.colors.darkGrey};
        margin-top: -2px;
        transition: all 150ms ease-out;
      }

      &:hover {
        color: ${darken(0.2, theme.colors.darkGrey)};

        svg {
          fill: ${darken(0.2, theme.colors.darkGrey)};
        }
      }

      &:focus {
        outline: none;
      }

      &::after {
        content: '';
        height: 5px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: transparent;
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
