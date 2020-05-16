import theme from 'styles/theme';
import { css } from '@emotion/core';

export const modalWrapperStyles = css`
  width: 100%;

  ${theme.mediaQueries.small} {
    width: 650px;
  }

  .modal-content {
    padding-bottom: 20px;

    .submit-btn {
      margin-top: 30px;
    }
  }
`;
