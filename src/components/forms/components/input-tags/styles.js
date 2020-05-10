import styled from '@emotion/styled';
import theme from 'styles/theme';

export const TagsWrapper = styled.div`
  border-radius: 4px;
  background-color: transparent;
  border: solid 1px $border;
  outline: none;
  color: ${theme.colors.slate};
  min-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;

  span {
    padding: 10px 12px 5px;
    width: 100%;
    height: 100%;
    min-height: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &::placeholder {
    color: #a8a8a8;
  }

  input {
    border: none;
    outline: none;
    height: 30px;
    margin-top: -3px;
    flex-grow: 1;
    padding: 0;
  }

  .input-pill {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

export const TagInstructions = styled.span`
  font-size: 12px;
  margin-top: 3px;
  display: block;
  color: #a8a8a8;
`;
