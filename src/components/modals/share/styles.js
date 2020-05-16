import theme from 'styles/theme';
import { css } from '@emotion/core';

export const modalWrapperStyles = css`
  .modal-content {
    padding-bottom: 30px;

    ${theme.mediaQueries.small} {
      padding-bottom: 60px;
      min-width: 600px;
    }
  }
`;
