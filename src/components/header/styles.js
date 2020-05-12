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
  background: ${theme.colors.white};
  position: relative;
  width: 100%;
  border-bottom: solid 1px ${theme.colors.border};

  .logo {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 76px;
    height: 76px;
  }

  .nav {
    display: flex;
    position: relative;
    justify-content: flex-end;
    height: 56px;

    padding-left: 0;

    ${theme.mediaQueries.mlarge} {
      justify-content: flex-start;
      padding-left: 80px;
    }

    ${theme.mediaQueries.mlarge} {
      padding-left: 90px;
    }

    &.mobile {
      padding-left: 0;
    }
  }

  .nav-desktop {
    display: flex;
    justify-content: flex-end;
    position: relative;
    height: 56px;
    width: 100%;

    &.show-menu {
      justify-content: space-between;
    }
  }

  .nav-mobile {
    display: flex;

    ${theme.mediaQueries.mlarge} {
      display: none;
    }
  }

  .nav-item {
    height: 100%;
    position: relative;

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
      color: ${theme.colors.slate};
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 10px;
      margin: 0 5px;
      position: relative;

      svg {
        fill: ${theme.colors.slate};
        margin-top: -2px;
        transition: all 150ms ease-out;
      }

      &:hover {
        color: ${darken(0.2, theme.colors.slate)};

        svg {
          fill: ${darken(0.2, theme.colors.slate)};
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
