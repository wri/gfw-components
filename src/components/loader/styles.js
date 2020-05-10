import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import theme from 'styles/theme';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${rgba(theme.colors.white, 0.5)};
  z-index: 1;

  .spinner {
    height: 38px;
    width: 38px;
    animation: rotate 1s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 5px solid transparent;
    border-top-color: ${rgba(theme.colors.slate, 0.7)};
    border-radius: 50%;
  }

  .message {
    margin-top: 10px;
    font-size: 14px;
    background-color: ${rgba(theme.colors.white, 0.5)};
    padding: 5px 8px;
  }

  ${({ light }) =>
    light &&
    `
    background-color:  ${rgba(theme.colors.slateDark, 0.5)};

    .spinner {
      border-top-color: ${theme.colors.white};
    }
  `}

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
