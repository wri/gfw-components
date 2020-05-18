import styled from '@emotion/styled';
import theme from 'styles/theme';

export const RadioWrapper = styled.div`
  margin-bottom: 15px;
  cursor: pointer;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: 5px 0;
    font-size: 14px;
    ${theme.colors.darkGrey};

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      border: solid 1px ${theme.colors.darkGrey};
      margin-right: 10px;

      &::after {
        content: '';
        width: 8px;
        height: 8px;
        background-color: ${theme.colors.green};
        border-radius: 100%;
        display: none;
      }
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label span::after {
    display: block;
  }
`;
