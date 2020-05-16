import styled from '@emotion/styled';
import theme from 'styles/theme';
import { css } from '@emotion/core';

export const modalWrapperStyles = css`
  width: 100%;
  max-width: 800px;

  ${theme.mediaQueries.small} {
    width: auto;
    min-width: 500px;
    min-height: 320px;
  }

  .modal-content {
    padding-top: 10px;
    padding-bottom: 30px;
    min-height: 320px;
  }
`;

export const MetaModalWrapper = styled.div`
  .subtitle {
    color: ${theme.colors.grey};
    margin-bottom: 20px;

    ${theme.mediaQueries.small} {
      margin-bottom: 40px;
    }
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${theme.colors.slate};

    a {
      font-size: 14px;
    }
  }

  ul,
  ol {
    font-size: 16px;
    line-height: 24px;
    list-style: disc;
    margin-left: 15px;
  }

  .meta-table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-top: solid 1px ${theme.colors.border};
    margin-bottom: 30px;

    ${theme.mediaQueries.small} {
      margin-bottom: 30px;
    }
  }

  .table-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: solid 1px ${theme.colors.border};
    width: 100%;

    ${theme.mediaQueries.small} {
      flex-direction: row;
    }

    &.dark {
      background-color: ${theme.colors.lightGrey};
    }

    .title-column {
      font-size: 12px;
      padding: 20px 5px 10px 25px;
      width: 200px;

      ${theme.mediaQueries.small} {
        padding: 15px 100px;
        padding-right: 5px;
      }
    }

    .description-column {
      font-size: 14px;
      width: calc(100% - 50px);
      padding: 0 25px 10px 25px;
      word-break: break-word;

      ${theme.mediaQueries.small} {
        padding: 13px 100px 3px 50px;
      }
    }
  }

  .overview {
    margin-bottom: 30px;

    h4 {
      margin-bottom: 20px;
      text-transform: none;
      font-weight: 400;
    }

    p {
      margin-bottom: 20px;
    }
  }

  .citation {
    margin-bottom: 30px;
    padding: 0;
    word-break: break-word;

    h5 {
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .body {
      font-size: 12px;
      color: #aaa;
      font-weight: 300;
    }
  }

  ul,
  ol {
    color: ${theme.colors.slate};
    font-size: 14px;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: solid 1px ${theme.colors.border};
    background-color: #e5e5df;
    margin: 0 -30px -30px;
    margin-left: -25px;
    width: calc(100% + 50px);
    padding: 20px 25px 10px;

    ${theme.mediaQueries.small} {
      margin-left: -100px;
      width: calc(100% + 200px);
      padding: 20px 100px;
      flex-direction: row;
      justify-content: flex-end;
    }

    button {
      margin-bottom: 10px;

      ${theme.mediaQueries.small} {
        margin-bottom: 0;
        padding-right: 0;
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
