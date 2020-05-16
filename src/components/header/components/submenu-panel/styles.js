import theme from 'styles/theme';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const SubmenuWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 40px 16px 20px;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.25);
  max-height: calc(100vh - 56px);
  overflow-y: scroll;
  position: relative;
  z-index: 1;

  ${theme.mediaQueries.medium} {
    height: auto;
  }

  &:focus {
    outline: none;
  }

  .submenu-wrapper {
    max-width: 800px;
    margin: auto;
  }

  .nav-item {
    a,
    button {
      display: flex;
      align-items: center;
      padding: 15px 0 !important;

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
    margin-bottom: 20px;

    ${theme.mediaQueries.medium} {
      margin-bottom: 40px;
    }
  }

  h4,
  .title {
    text-transform: uppercase;
    color: #aaa;
    font-size: 14px;
    margin-bottom: 23px;
    text-align: left;

    button {
      text-transform: uppercase;
      color: #aaa;
      font-size: 14px;
    }
  }

  .menu-section {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: solid 1px ${theme.colors.border};

    .apps-slider {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      margin-left: -16px;
      width: calc(100% + 32px);
      padding: 0 16px;
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
        border: solid 1px ${theme.colors.border};
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        font-size: 12px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        color: ${theme.colors.slate};
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
      > li {
        margin-bottom: 20px;
        padding-left: 0;

        a,
        button {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: ${theme.colors.slate};
          text-transform: uppercase;
          padding: 0;
          cursor: pointer;

          svg {
            margin-right: 15px;
            width: 20px;
            height: 20px;
            fill: ${theme.colors.green};
          }

          &:hover {
            color: ${darken(0.2, theme.colors.slate)};
            text-decoration: underline;
          }
        }
      }
    }
  }

  .legal-section {
    display: flex;
    flex-direction: column;

    ${theme.mediaQueries.medium} {
      flex-direction: row;

      > a,
      button {
        margin-right: 30px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
