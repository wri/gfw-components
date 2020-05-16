import styled from '@emotion/styled';
import { css } from '@emotion/core';
import theme from 'styles/theme';

export const baseStyles = css`
  .ReactModal__Body--open {
    overflow: hidden;
  }

  html,
  body {
    overflow-x: visible !important;
  }

  .modal-overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 10px;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px 0 rgba(71, 44, 184, 0.1);
    background-color: rgba(17, 55, 80, 0.4);
    overflow: auto;

    ${theme.mediaQueries.small} {
      padding: 40px 10px;
    }
  }

  .c-modal {
    overflow: auto;
    background: #fff;
    outline: none;
    min-width: 200px;
    min-height: 150px;
    width: auto;
    height: auto;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    margin: auto;
    padding: 0;
    border: none;
    border-radius: 0;

    ${theme.mediaQueries.small} {
      width: auto;
      max-width: 900px;
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS */
    .modal-overlay {
      align-items: flex-start !important;
    }

    .c-modal {
      margin: 0 !important;
    }
  }
`;

export const ModalWrapper = styled.div`
  .modal-title {
    padding: 20px 25px 0;

    ${theme.mediaQueries.small} {
      padding: 40px 100px 0;
      color: #333;
      margin: 0 auto;
      text-align: left;
    }
  }

  .modal-content {
    padding: 20px 25px;
    margin: auto;
    z-index: 1;
    position: relative;

    ${theme.mediaQueries.small} {
      padding: 30px 100px 40px;
    }

    .element-fullwidth {
      width: calc(100% + 2 * 25px);
      margin-left: -25px;

      ${theme.mediaQueries.small} {
        width: calc(100% + 2 * 100px);
        margin-left: -100px;
      }
    }
  }

  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    outline: none;
    z-index: 10;

    ${theme.mediaQueries.small} {
      top: 25px;
      right: 25px;
    }
  }

  .footer-banner {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 0;
    height: 80px;
    background-color: #e5e5df;
  }

  ${(props) => props.css}
`;
