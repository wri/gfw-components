import theme from 'styles/theme';
import styled from '@emotion/styled';

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0;
  position: relative;

  span {
    font-size: 14px;
    color: ${theme.colors.error};
    margin-bottom: 20px;

    ${theme.breakpoints.medium} {
      align-self: flex-start;
      margin-right: 20px;
      margin-bottom: 30px;
    }

    &.success {
      color: ${theme.colors.green};
    }
  }
`;
