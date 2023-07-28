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
    overflow-y: hidden;
  `}

  ${({ slim }) =>
    slim &&
    `
    overflow-y: scroll !important;
    max-width: initial;

    ${theme.mediaQueries.medium} {
      overflow-y: hidden !important;
    }
  `}

  ${theme.mediaQueries.large} {
    overflow-y: hidden;
  }

  ${theme.mediaQueries.large} {
    overflow-y: hidden;
  }

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

    ${theme.mediaQueries.small} {
      width: 340px;
      padding: 0;
      box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.25);
      border: 1px solid ${theme.colors.lightGrey};
      border-top: 0;
      border-right: 0;
      margin-right: 0;

      ${({ fullScreen }) =>
        fullScreen &&
        `
        width: 100%;
        margin-left: auto;
        margin-right: 0;
        border: none;
        box-shadow: none;
      `}
    }

    ${theme.mediaQueries.medium} {
      margin-right: auto;
    }

    ${({ slim }) =>
      slim &&
      `
      margin-right: 0 !important;

      ${theme.mediaQueries.medium} {
        margin-left: 23% !important;
        margin-right: auto !important;
      }
    `}

    @media (min-width: 1120px) {
      border-right: 1px solid ${theme.colors.lightGrey};

      ${({ fullScreen }) =>
        fullScreen &&
        `
        border-right: none;
      `}
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

    .action {
      height: 42px;
      padding-left: 20px;
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
      padding: 30px ${theme.grid.desktopGutter} 10px ${
  theme.grid.desktopGutter
};
    }
  }

  .menu-top {
    z-index: 4;
    position: sticky;
    top: 0;
    padding: 1px;
    background: #fff;
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
    margin-top: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    &.-first {
      margin-top: 35px;
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

        ${(props) =>
          props.theme &&
          props.theme === 'pro' &&
          `
           color: ${theme.colors.proGrey};
          `};


        &:hover {
          color: ${darken(0.2, theme.colors.darkGrey)};
          background-color: ${theme.colors.lightestGrey};
        }
      }
    }

    .text {
      a,
      button {
        display: flex;
        align-items: center;
        text-transformation: none;
        font-size: 14px;
        margin-left: 5px;
        color: #555555;
        justify-content: center;
      }

      font-weight: lighter;
    }

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
      justify-content: space-evenly;
    }

    .app-card {
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
      padding-bottom: 10px;

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
          font-size: 14px;
          color: ${theme.colors.darkGrey};
          text-transform: uppercase;
          cursor: pointer;

          > button {
            padding: 0;
          }

          > .column {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-transform: none;
            padding-right: 0;
            padding-left: 0;
            width: 100%;

            > .info-icon {
              display: none;

              ${theme.mediaQueries.small} {
                display: block;
              }
            }
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

  .list {
    margin-top: 15px;
  }

  .border-t-2 {
    border: 1px solid ${theme.colors.lightGrey};
    margin-top: 0;
    padding-bottom: 10px !important;
    padding-top: 10px;

    > div {
      > a {
        padding: 10px;

        ${theme.mediaQueries.small} {
          padding: 0;
        }
      }
    }
  }
`;
