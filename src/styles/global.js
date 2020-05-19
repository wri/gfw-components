import { css } from '@emotion/core';

import theme from './theme';

export default css`
  html {
    font-family: ${theme.fontFamily};
    color: ${theme.colors.darkestGrey};
    font-size: 16px;
    font-weight: 400;
  }
`;
