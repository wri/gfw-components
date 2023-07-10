import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import Tooltip from 'components/tooltip';

import { Media } from 'components/responsive';

import gfwProLogo from 'assets/logos/gfw-pro-header.png';

import MoreIcon from 'assets/icons/more.svg';
import CloseIcon from 'assets/icons/close.svg';
import SearchGreenIcon from 'assets/icons/search-green-icon.svg';
import UserIcon from 'assets/icons/mygfw-green-icon.svg';
// eslint-disable-next-line no-unused-vars
import NotificationGreenIcon from 'assets/icons/notification-green-icon.svg';

import { NavAltWrapper } from './styles';

import AuthenticationInfo from '../authentication-info';

class NavAlt extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    loggedIn: PropTypes.bool,
    loggingIn: PropTypes.bool,
    languages: PropTypes.array,
    activeLang: PropTypes.object,
    pathname: PropTypes.string,
    appUrl: PropTypes.string,
    showSubmenu: PropTypes.bool,
    handleShowSubmenu: PropTypes.func,
    handleLangSelect: PropTypes.func,
    proAuthenticated: PropTypes.bool,
    onProLogout: PropTypes.func,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  render() {
    const {
      theme,
      loggedIn,
      loggingIn,
      NavLinkComponent,
      pathname,
      appUrl,
      handleShowSubmenu,
      onProLogout,
      showSubmenu,
      handleLangSelect,
      languages,
      activeLang,
      proAuthenticated,
    } = this.props;
    return (
      <NavAltWrapper theme={theme}>
        <div className="nav-item lang-selector">
          <DropdownMenu
            className="nested notranslate"
            label={activeLang && activeLang.label}
            selected={activeLang}
            options={
              languages &&
              languages.map((l) => ({
                ...l,
                onClick: handleLangSelect,
              }))
            }
          />
        </div>
        <div className="nav-item">
          <NavLink
            href="/search/"
            className="nav-link"
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            <Tooltip content="Search">
              <div className="top-menu-icon">
                <SearchGreenIcon />
              </div>
            </Tooltip>
          </NavLink>
        </div>
        {/* // TODO: display this link when the new page is ready
        <div className="nav-item">
          <NavLink
            href="/notifications/"
            className="nav-link"
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            <Tooltip content="Notifications">
              <div>
                <NotificationGreenIcon />
              </div>
            </Tooltip>
          </NavLink>
        </div>
        */}
        <div className="nav-item">
          <NavLink
            href="/my-gfw/"
            className={cx('nav-link', {
              'animate-user-icon': !loggedIn && loggingIn,
            })}
            onClick={proAuthenticated ? onProLogout : null}
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            {theme === 'pro' ? 'Log out' : ''}
            <Tooltip content="My GFW">
              <div>
                <UserIcon />
              </div>
            </Tooltip>
          </NavLink>
        </div>
        <Media lessThan="medium" className="nav-mobile">
          <div className="nav-item nav-more">
            {showSubmenu && (
              <button
                type="button"
                className="nav-link"
                onClick={() => handleShowSubmenu(false)}
              >
                close
                <CloseIcon className="icon-submenu icon-close" />
              </button>
            )}
            {!showSubmenu && (
              <button
                type="button"
                className="nav-link"
                onClick={() => handleShowSubmenu(true)}
              >
                more
                <MoreIcon className="icon-submenu icon-more" />
              </button>
            )}
          </div>
        </Media>
        {proAuthenticated && (
          <AuthenticationInfo>
            <img src={gfwProLogo} alt="gfw pro" />
            <p>
              You are logged in using your
              {' '}
              <a href="https://pro.globalforestwatch.org/" target="__BLANK">
                GFW Pro
              </a>
              {' '}
              account
            </p>
          </AuthenticationInfo>
        )}
      </NavAltWrapper>
    );
  }
}

export default NavAlt;
