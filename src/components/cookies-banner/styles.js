import theme from 'styles/theme';
import styled from '@emotion/styled';

export const CookiesWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.9);
  padding: 20px 0;

  .cookies-row {
    display: flex;
    flex-direction: column;

    ${theme.mediaQueries.small} {
      flex-direction: row;
    }
  }

  .cookies-text {
    flex: 1;

    p {
      color: ${theme.colors.white};
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 20px;

      ${theme.mediaQueries.small} {
        margin-bottom: 0;
      }
    }

    a {
      font-size: 12px;
      line-height: 18px;
    }
  }

  .cookies-button {
    display: flex;
    align-items: center;
    max-width: 220px;
    width: auto;

    ${theme.mediaQueries.small} {
      max-width: auto;
    }
  }
`;
