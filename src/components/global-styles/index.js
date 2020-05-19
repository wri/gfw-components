import React from 'react';
import { Global, css } from '@emotion/core';

import resetStyles from 'styles/reset';
import globalStyles from 'styles/global';
import { mediaStyles } from 'components/responsive';

export default () => (
  <>
    <Global styles={resetStyles} />
    <Global styles={globalStyles} />
    <Global styles={css(mediaStyles)} />
  </>
);
