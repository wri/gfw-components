import theme from 'styles/theme';
import styled from '@emotion/styled';

export const DropdownWrapper = styled.div`
  position: relative;

  > div {
    height: 100%;
  }

  .icon-arrow {
    height: 10px;
    width: 10px;
    min-width: 10px;
    margin-left: 5px;

    &.active {
      transform: rotate(180deg);
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 55px;
    left: -70%;
    background-color: ${theme.colors.white};
    width: 200px;
    border: solid 1px ${theme.colors.lightGrey};
    z-index: 1;

    ${({ slim }) =>
      slim &&
      `
        top: 42px;
    `}

    > li {
      > button,
      > a {
        padding: 15px 0;

        ${theme.mediaQueries.medium} {
          padding: 15px 20px;
        }

        &.nested {
          padding: 0;
        }
      }

      button,
      a {
        display: block;
        text-transform: uppercase;
        font-size: 14px;
        width: 100%;
        color: ${theme.colors.darkGrey};
        text-align: center;
        cursor: pointer;

        > button {
          color: inherit;
          text-transform: inherit;
          padding: 15px 0;

          ${theme.mediaQueries.medium} {
            padding: 15px 20px;
          }
        }

        &:hover {
          background-color: #f7f7f7;
        }

        &.active {
          color: ${theme.colors.green};
        }
      }

      &.active {
        button,
        a {
          color: ${theme.colors.green};

          &:hover {
            color: ${theme.colors.darkGreen};
          }
        }
      }
    }
  }
`;
