import styled from '@emotion/styled';

export const NotificationItemWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding: 20px;

  .text {
    padding-left: 20px;
    padding-right: 20px;

    .header {
      display: flex;
      flex-direction: row;
      font-size: 16px;

      .title {
        font-weight: 500;
        width: 75%;
      }

      .date {
        color: #555555;
        font-weight: 400;
        text-align: right;
        width: 25%;
      }
    }

    .description {
      font-size: 14px;
      line-height: 22.4px;
      padding-bottom: 10px;
      padding-top: 10px;
      text-align: justify;

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
`;
