import React from 'react';
import { Global, css } from '@emotion/core';

import resetStyles from 'styles/reset';
import semanticStyles from 'styles/semantics';
import { mediaStyles } from 'components/responsive';

export default () => (
  <>
    <Global styles={resetStyles} />
    <Global styles={semanticStyles} />
    <Global styles={css(mediaStyles)} />
  </>
);
