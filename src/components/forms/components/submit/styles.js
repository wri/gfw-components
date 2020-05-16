import styled from '@emotion/styled';
import theme from 'styles/theme';

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0;
  position: relative;

  .submit-btn {
    position: relative;

    ${theme.mediaQueries.small} {
      align-self: flex-end;
    }

    .submit-loader {
      > div {
        width: 20px;
        height: 20px;
        border-width: 2px;
      }
    }
  }
`;
