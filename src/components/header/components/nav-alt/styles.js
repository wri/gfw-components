import theme from 'styles/theme';
import styled from '@emotion/styled';

export const NavAltWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  border-left: solid 1px ${theme.colors.lightGrey};

  .lang-selector {
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100px;
      text-align: right;
      margin-right: 5px;
    }

    .dropdown-menu {
      right: 0;
      left: unset;
    }
  }

  .nav-link {
    .my-gfw-icon {
      width: 15px;
      height: 15px;
      min-width: 15px;
      margin-left: 5px;

      &.logged-in {
        fill: ${theme.colors.green};
      }
    }
  }

  .animate-user-icon {
    animation: user-icon 2s ease-in-out infinite;
  }

  .icon-more {
    width: 15px;
    height: 15px;
    min-width: 15px;
  }

  .nav-more {
    > .nav-link {
      padding-right: 0 !important;
      margin-right: 0 !important;
      width: 70px;
    }
  }

  @keyframes user-icon {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
