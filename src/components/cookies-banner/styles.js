import theme from 'styles/theme';
import styled from '@emotion/styled';

export const CookiesWrapper = styled.div`
  width: 100%;
  background-color: rgba(51, 51, 51, 0.9);
  padding: 20px 0;

  .cookies-text {
    color: ${theme.colors.white};
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 20px;

    a {
      font-size: 12px;
      line-height: 18px;
    }

    ${theme.mediaQueries.small} {
      margin-bottom: 0;
    }
  }

  .cookies-button {
    display: flex;
    align-items: center;
    max-width: 220px;

    ${theme.mediaQueries.small} {
      max-width: auto;
    }

    .cookies-btn {
      color: #fff;
      border-color: transparent;
      background: ${theme.colors.darkGrey};
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      width: 100%;
    }
  }
`;
