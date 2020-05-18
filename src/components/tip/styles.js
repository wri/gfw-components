import styled from '@emotion/styled';
import theme from 'styles/theme';

export const TipWrapper = styled.div`
  padding: 10px;
  background-color: ${theme.colors.lightYellow};
  font-size: 12px;
  color: ${theme.colors.darkGrey};

  &.tooltip-dark {
    background-color: ${theme.colors.darkGrey};
    color: ${theme.colors.lightYellow};
    opacity: 0.8;
  }
`;
