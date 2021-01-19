import theme from 'styles/theme';
import styled from '@emotion/styled';

export const AuthenticationInfoWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -29px;
  left: 0;
  height: 30px;
  width: 100vw;

  background: #555555;

  p {
    color: #E5E5DF;
    font-size: 12px;
    line-height: 30px;
    font-weight: 300;
  }

  a {
    color: ${theme.colors.green};
    text-decoration: underline;
  }

  img {
    height: 30px;
    margin: 0 15px 0 0;
  }

`