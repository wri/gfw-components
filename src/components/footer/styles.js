import theme from 'styles/theme';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { darken } from 'polished';

export const FooterWrapper = styled.div`
  background: #eceee8;

  .footer-links {
    padding-top: 30px;

    .footer-links-texts {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        margin-right: 25px;

        a {
          font-size: 14px;
          color: ${theme.colors.darkGrey};
          text-transform: uppercase;

          &:hover {
            color: ${darken(0.2, theme.colors.darkGrey)};
            text-decoration: underline;
          }
        }
      }
    }

    .footer-links-social {
      display: flex;
      margin-top: 15px;

      ${theme.mediaQueries.small} {
        justify-content: flex-end;
        margin-top: 0;
      }

      li {
        margin-right: 8px;

        ${theme.mediaQueries.small} {
          margin-right: 0;
          margin-left: 15px;
        }

        button {
          border-color: ${rgba(theme.colors.grey, 0.2)};
          background-color: transparent;

          &:hover {
            background-color: ${theme.colors.white};
          }

          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
    }

    .footer-contact-us {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      border-bottom: solid 1px ${theme.colors.grey};
      margin-bottom: 30px;
      padding-bottom: 30px;

      ${theme.mediaQueries.small} {
        justify-content: space-between;
        flex-direction: row;
        margin-top: 30px;
      }

      .contact-btn {
        font-size: 12px;
        color: ${theme.colors.grey};
        margin-bottom: 10px;
        height: 30px;
        text-align: left;

        ${theme.mediaQueries.small} {
          text-align: center;
          margin-bottom: 0;
        }

        &:hover {
          color: ${darken(0.2, '#aaa')};
        }
      }
    }
  }

  .footer-partners {
    p {
      font-size: 14px;
      color: ${theme.colors.darkGrey};
    }

    .footer-wri {
      display: flex;
      align-items: center;
      flex-direction: column;

      ${theme.mediaQueries.small} {
        align-items: flex-start;
      }

      .wri-logo {
        margin: 30px 0;
        width: 143px;
        height: 47px;
      }
    }

    .footer-partners-slide {
      p {
        text-align: center;

        ${theme.mediaQueries.small} {
          text-align: left;
        }
      }

      .partners-slide {
        width: calc(100% - 16px);
        margin: 0;
        margin-top: 10px;
        margin-left: 8px;

        ${theme.mediaQueries.large} {
          width: calc(100% - 16px);
        }
      }

      .carousel-slide {
        a {
          position: relative;
          display: block;

          .logo-color {
            position: absolute;
            height: auto;
            width: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            opacity: 0;
          }
        }

        &:hover {
          .logo-grey {
            opacity: 0;
          }

          .logo-color {
            opacity: 1;
          }
        }
      }

      .slick-list {
        overflow: hidden;
      }

      .slick-slide {
        align-items: center;
        justify-content: center;

        ${theme.mediaQueries.large} {
          padding: 0 5px;
        }

        img {
          color: black;
          text-decoration: none;
          margin: auto;
        }
      }

      .slick-next {
        ${theme.mediaQueries.large} {
          right: -20px;
        }
      }

      .slick-prev {
        ${theme.mediaQueries.large} {
          left: -20px;
        }
      }
    }
  }

  .footer-terms {
    padding-bottom: 20px;
    color: #999;
    font-size: 12px;
    letter-spacing: 0.1px;
    line-height: 18px;
    text-align: center;

    ${theme.mediaQueries.small} {
      text-align: right;
    }

    .terms {
      display: inline-block;
      color: inherit;
      text-decoration: none;
    }

    .terms:hover {
      text-decoration: underline;
    }
  }
`;
