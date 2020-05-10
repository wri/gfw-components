import theme from 'styles/theme';
import { css } from '@emotion/core';

export const modalWrapperStyles = css`
  .modal-content {
    padding-bottom: 20px;

    .c-form-submit {
      margin-top: 30px;
    }
  }

  ${theme.mediaQueries.medium} {
    .modal-content {
      min-width: 650px;
    }
  }
`;
