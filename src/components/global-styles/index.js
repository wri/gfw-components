import { Global, css } from '@emotion/core';
import globalStyles from 'styles/index.scss';

export default () => (
  <Global
    styles={css`
      ${globalStyles}
    `}
  />
);
