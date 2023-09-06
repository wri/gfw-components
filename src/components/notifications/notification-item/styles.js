import styled from '@emotion/styled';
import theme from 'styles/theme';

export const NotificationItemWrapper = styled.div`
  background-color: #ffffff;
  border-bottom: solid 1px ${theme.colors.lightGrey};
  border-top: solid 1px ${theme.colors.lightGrey};
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;

  .container {
    width: 100%;

    .text {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;

      .header {
        display: flex;
        flex-direction: row;
        font-size: 16px;

        .title {
          color: #000000;
          font-weight: 500;
          width: 65%;
        }

        .date {
          color: #555555;
          font-weight: 400;
          text-align: right;
          width: 35%;
        }
      }

      .description {
        font-size: 14px;
        line-height: 22.4px;
        padding-bottom: 10px;
        padding-top: 10px;

        > b,
        strong {
          font-weight: 500;
        }

        > a {
          color: #7d953b;
          font-weight: 500;
        }
      }
    }
  }
`;
