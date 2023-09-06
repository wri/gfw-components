import styled from '@emotion/styled';
import theme from 'styles/theme';

export const NotificationsPanelWrapper = styled.div`
  border: solid 1px ${theme.colors.lightGrey};
  background-color: #ffffff;
  left: 30%;
  position: relative;
  max-width: 438px;
  max-height: 400px;
  margin: 0 auto;
  overflow-y: scroll;
  z-index: 1;

  ${({ slim }) =>
    slim &&
    `
    left: 38%;
    `}

  .empty-list {
    font-size: 14px;
    padding: 20px;
    text-align: center;
  }

  .top {
    border-bottom: solid 1px ${theme.colors.lightGrey};
    color: #333333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    width: 100%;

    .title {
      font-weight: 700;
      font-size: 16px;
    }

    .close-icon {
      cursor: pointer;
      height: 16px;
      margin-top: 4px;
      width: 16px;
    }
  }
`;
