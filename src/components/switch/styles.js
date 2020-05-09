import styled from '@emotion/styled';
import theme from 'styles/theme';

export const SwitchWrapper = styled.div`
  .label {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }

  .react-toggle {
    width: 100%;
  }

  .react-toggle-track {
    width: 100%;
    height: 34px;
    background-color: transparent !important;
    border: solid 1px ${theme.colors.border};

    > div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      font-size: 13px;
      color: ${theme.colors.slate};
    }

    .react-toggle-track-check {
      left: 0;
    }

    .react-toggle-track-x {
      right: 0;
    }
  }

  .react-toggle-thumb {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: transparent;
    border-radius: 30px;
    border: solid 1px ${theme.colors.green};
    box-shadow: none !important;
  }

  .react-toggle--checked {
    .react-toggle-thumb {
      left: 50%;
    }
  }
`;
