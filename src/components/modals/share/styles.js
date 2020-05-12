import theme from 'styles/theme';
import { css } from '@emotion/core';

export const modalWrapperStyles = css`
  ${theme.mediaQueries.medium} {
    width: 600px;
    min-width: 320px;
  }

  .modal-content {
    padding-bottom: 30px;

    ${theme.mediaQueries.medium} {
      padding-bottom: 60px;
    }
  }
`;
