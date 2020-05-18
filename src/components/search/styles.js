import styled from '@emotion/styled';
import theme from 'styles/theme';
import { rgba } from 'emotion-rgba';

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;

  .input {
    width: 100%;
    height: 45px;
    border-radius: 100px;
    border: 0;
    padding: 0 75px 0 20px;
    background-color: ${rgba(theme.colors.darkGrey, 0.08)};
  }

  .submit-btn {
    position: absolute;
    right: 0;
    height: 100%;

    .icon-search {
      width: 20px;
      height: 20px;
      fill: ${theme.colors.darkGrey};
    }
  }

  .clear-btn {
    position: absolute;
    height: 100%;
    right: 40px;

    .icon-close {
      width: 10px;
      height: 10px;
    }
  }

  ${({ small }) =>
    small &&
    `
    .input {
      height: 30px;
    }
  `}
`;
