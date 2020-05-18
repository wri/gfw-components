import theme from 'styles/theme';
import styled from '@emotion/styled';

export const CheckboxWrapper = styled.div`
  .checkbox-option {
    position: relative;
    display: flex;
    align-items: center;
    margin: 20px 0 20px;

    label {
      cursor: pointer;
      padding-left: 10px;
      font-size: 14px;
      color: ${theme.colors.darkGrey};
    }
  }

  .checkbox-wrapper {
    width: 25px;
    height: 25px;
    min-width: 25px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    input[type='checkbox'] {
      position: absolute;
      width: 100%;
      height: 100%;
      appearance: none;
      z-index: 2;
      padding: 0;
      margin: 0;
      border: none;
      cursor: pointer;

      &::-ms-check {
        display: none;
      }

      &:focus {
        outline: none;
      }
    }

    span {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &::before {
        content: '✔';
        position: absolute;
        left: 5px;
        top: 4px;
        font-size: 16px;
        color: ${theme.colors.green};
      }
    }
  }
`;
