import styled from '@emotion/styled';
import theme from 'styles/theme';

export const TipWrapper = styled.div`
  padding: 10px;
  background-color: ${theme.colors.yellow};
  font-size: 12px;
  color: ${theme.colors.slate};

  &.tooltip-dark {
    background-color: ${theme.colors.slate};
    color: ${theme.colors.yellow};
    opacity: 0.8;
  }
`;
