import styled from '@emotion/styled';
import theme from 'styles/theme';

export const NoContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 ${theme.grid.mobileGutter};

  ${theme.mediaQueries.medium} {
    padding: 0 ${theme.grid.desktopGutter};
  }

  .message {
    opacity: 0.5;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .message-icon {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  button {
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;
