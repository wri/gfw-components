import { css } from '@emotion/core';
import theme from 'styles/theme';
import { rgba } from 'emotion-rgba';
import tippyBaseStyles from 'tippy.js/dist/tippy.css';

export const tippyStyles = css`
  ${tippyBaseStyles}

  .tippy-box {
    background-color: ${theme.colors.lightYellow};
    font-size: 12px;
    color: ${theme.colors.darkGrey};
    border-radius: 2px;
    box-shadow: 0 1px 12px 0 ${rgba(theme.colors.darkestGrey, 0.25)};
  }

  .tippy-arrow {
    color: ${theme.colors.lightYellow};
  }

  .tippy-content {
    padding: 10px;
  }
`;
