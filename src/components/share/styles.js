import styled from '@emotion/styled';
import theme from 'styles/theme';
import { rgba } from 'emotion-rgba';

export const ShareWrapper = styled.div`
  .share-switch-tab {
    max-width: 225px;
    margin-bottom: 30px;
  }

  .info {
    margin-bottom: 10px;
  }

  .input-wrapper {
    width: calc(100% + (100px / 2));
    max-width: 350px;
    position: relative;

    .input-container,
    .input-button {
      height: 40px;
    }

    .input-container {
      width: calc(100% - 100px);
      max-width: 300px;
      position: relative;
      display: inline-block;

      > input {
        width: 100%;
        height: 100%;

        &:focus {
          outline: none;
        }
      }
    }

    .copy-button {
      position: absolute;
      z-index: 1;
      right: calc(100px / 2);
      width: 100px;
      display: inline-block;
    }

    .input-loader {
      align-items: flex-start;

      > div {
        width: 20px;
        height: 20px;
        border-width: 2px;
        margin-left: 10px;
      }
    }
  }

  .social-container {
    display: flex;
    justify-content: left;
    margin-top: 25px;

    .social-btn {
      border-color: ${rgba(theme.colors.grey, 0.2)};
      margin-right: 15px;
    }

    .social-icon {
      width: 20px;
      height: 20px;
    }
  }
`;
