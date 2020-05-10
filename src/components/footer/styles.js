import theme from 'styles/theme';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

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
          color: ${theme.colors.slate};
          text-transform: uppercase;

          &:hover {
            color: ${theme.colors.slateDark};
            text-decoration: underline;
          }
        }
      }
    }

    .footer-links-social {
      display: flex;
      margin-top: 15px;

      ${theme.breakpoints.medium} {
        justify-content: flex-end;
        margin-top: 0;
      }

      li {
        margin-right: 8px;

        ${theme.breakpoints.medium} {
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
            height: 25px;
            width: 25px;
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

      ${theme.breakpoints.medium} {
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

        ${theme.breakpoints.medium} {
          text-align: center;
          margin-bottom: 0;
        }

        &:hover {
          color: darken(#aaa, 20%);
        }
      }
    }
  }

  .footer-partners {
    p {
      font-size: 14px;
      color: ${theme.colors.slate};
    }

    .footer-wri {
      display: flex;
      align-items: center;
      flex-direction: column;

      ${theme.breakpoints.medium} {
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

        ${theme.breakpoints.medium} {
          text-align: left;
        }
      }

      .partners-slide {
        width: calc(100% - 16px);
        margin: 0;
        margin-top: 10px;
        margin-left: 8px;

        ${theme.breakpoints.xlarge} {
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

        ${theme.breakpoints.xlarge} {
          padding: 0 5px;
        }

        img {
          color: black;
          text-decoration: none;
          margin: auto;
        }
      }

      .slick-next {
        ${theme.breakpoints.xlarge} {
          right: -20px;
        }
      }

      .slick-prev {
        ${theme.breakpoints.xlarge} {
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

    ${theme.breakpoints.medium} {
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
