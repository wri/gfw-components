import theme from 'styles/theme';
import styled from '@emotion/styled';

import { darken } from 'polished';

export const SubmenuWrapper = styled.div`
  position: relative;
  max-width: ${theme.siteDefaultWidth};
  max-height: calc(100vh - 56px);
  margin: 0 auto;

  overflow-y: scroll;
  z-index: 1;

  ${({ fullScreen }) =>
    fullScreen &&
    `
    max-width: 100%;
    max-height: calc(100vh - 76px);
    background: ${theme.colors.white};
  `}

  ${theme.mediaQueries.small} {
    height: auto;

    ${({ fullScreen }) =>
      fullScreen &&
      `
      height: calc(100vh - 76px);
    `}
  }

  &:focus {
    outline: none;
  }

  .submenu-wrapper {
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-top: 0;
    margin-left: auto;

    ${theme.mediaQueries.small} {
      width: 375px;
      margin: 0 0 0 auto;
      padding: 0;
      box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.25);
      border: 1px solid ${theme.colors.lightGrey};
      border-top: 0;
      border-right: 0;

      ${({ fullScreen }) =>
        fullScreen &&
        `
        width: 100%;
        margin: 0 auto;
        border: none;
        box-shadow: none;
      `}
    }

    @media (min-width: 1120px) {
      border-right: 1px solid ${theme.colors.lightGrey};
    }
  }

  .nav-item {
    a,
    button {
      display: flex;
      align-items: center;

      &.active {
        color: ${theme.colors.green};

        &:after {
          background-color: transparent !important;
        }

        &:hover {
          color: ${theme.colors.darkGreen};
        }
      }
    }
  }

  .my-gfw-icon {
    margin-left: 5px;
  }

  .menu-search {
    z-index: 4;
    position: sticky;
    top: 0;
    padding: 40px ${theme.grid.mobileGutter} 10px ${theme.grid.mobileGutter};
    background: #fff;

    ${theme.mediaQueries.small} {
      padding: 30px ${theme.grid.desktopGutter} 10px ${theme.grid.desktopGutter};
    }
  }

  h4,
  .title {
    text-transform: uppercase;
    color: #aaa;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: left;

    button {
      text-transform: uppercase;
      color: #aaa;
      font-size: 14px;
    }
  }

  .menu-section {
    margin: 30px 0;
    padding: 0 0 30px 0;

    &:last-child {
      margin-bottom: 0;
    }

    &.-first {
      margin-top: 10px;
    }

    h4 {
      padding: 0 ${theme.grid.desktopGutter};

      ${theme.mediaQueries.small} {
        padding: 0 ${theme.grid.desktopGutter};
      }
    }

    li {
      > a,
      > button {
        height: 42px;
        width: 100%;
        padding: 0 ${theme.grid.desktopGutter};

        ${theme.mediaQueries.small} {
          padding: 0 ${theme.grid.desktopGutter};
        }

        &:hover {
          color: ${darken(0.2, theme.colors.darkGrey)};
          background-color: ${theme.colors.lightestGrey};
        }
      }
    }

    border-bottom: solid 1px ${theme.colors.lightGrey};

    &:last-child {
      border-bottom: 1px solid transparent;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .apps-slider {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      width: 100%;
      padding: 0 ${theme.grid.desktopGutter};

      ${theme.mediaQueries.small} {
        padding: 0 ${theme.grid.desktopGutter};
      }
    }

    .app-card {
      padding-right: 16px;

      &:last-child {
        padding-right: 0;
      }

      .app-image {
        width: 90px;
        height: 90px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }

      .all-apps {
        border: solid 1px ${theme.colors.lightGrey};
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        font-size: 12px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        color: ${theme.colors.darkGrey};
        width: 90px;
        height: 90px;

        .icon-more {
          width: 25px;
          height: 25px;
          margin-bottom: 5px;
        }
      }
    }

    .more-links {
      padding-bottom: 20px;

      ${({ fullScreen }) =>
        fullScreen &&
        `
          padding-bottom: 40px;
        `}

      > li {
        padding: 0;
        a,
        button {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: ${theme.colors.darkGrey};
          text-transform: uppercase;
          cursor: pointer;

          > button {
            padding: 0;
          }

          svg {
            margin-right: 15px;
            width: 20px;
            height: 20px;
            min-width: 20px;
            min-height: 20px;
            fill: ${theme.colors.green};
          }
        }
      }
    }
  }
`;
