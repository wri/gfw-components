import styled from '@emotion/styled';
import theme from 'styles/theme';

export const ModalWrapper = styled.div`
  .modal-title {
    padding: 20px 25px 0;

    ${theme.breakpoints.medium} {
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

    ${theme.breakpoints.medium} {
      padding: 30px 100px 40px;
    }

    .element-fullwidth {
      width: calc(100% + 2 * 25px);
      margin-left: -25px;

      ${theme.breakpoints.medium} {
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

    ${theme.breakpoints.medium} {
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
