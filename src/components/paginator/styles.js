import styled from '@emotion/styled';

export const PaginatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  max-height: 1.75rem;

  .dots-left {
    align-content: end;
    color: #97bd3d;
    display: flex;
    flex-wrap: wrap;
    padding-right: 4px;
  }

  .dots-right {
    align-content: end;
    color: #97bd3d;
    display: flex;
    flex-wrap: wrap;
    padding-left: 4px;
  }

  .option {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #97bd3d;
    border-radius: 0.25rem;
    border-width: 1px;
    color: #97bd3d;
    font-size: 0.875rem;
    height: 1.75rem;
    line-height: 1.25rem;
    text-align: center;
    width: 2rem;
  }

  .selected {
    background: #97bd3d;
    border-radius: 0.25rem;
    color: #ffffff;
    cursor: default;
    font-size: 0.875rem;
    height: 1.75rem;
    line-height: 1.25rem;
    text-align: center;
    width: 2rem;
  }

  .disabled {
    cursor: default;
  }
`;
