import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import gfwProLogo from 'assets/logos/gfw-pro-header.png';

import MyGfwIcon from 'assets/icons/mygfw.svg';
import MoreIcon from 'assets/icons/more.svg';
import CloseIcon from 'assets/icons/close.svg';

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
            href="/my-gfw/"
            className={cx('nav-link', {
              'animate-user-icon': !loggedIn && loggingIn,
            })}
            onClick={proAuthenticated ? onProLogout : null}
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            {theme === 'pro' ? 'Log out' : 'My GFW'}
            <MyGfwIcon
              className={cx('my-gfw-icon', { 'logged-in': loggedIn })}
            />
          </NavLink>
        </div>
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
