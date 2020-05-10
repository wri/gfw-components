import React from 'react';
import { Global } from '@emotion/core';

import resetStyles from 'styles/reset';
import semanticStyles from 'styles/semantics';

export default () => (
  <>
    <Global styles={resetStyles} />
    <Global styles={semanticStyles} />
  </>
);
