import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import MyGfwIcon from 'assets/icons/mygfw.svg';
import MoreIcon from 'assets/icons/more.svg';
import CloseIcon from 'assets/icons/close.svg';

import { NavAltWrapper } from './styles';

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
      showSubmenu,
      handleLangSelect,
      languages,
      activeLang,
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
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            {theme === 'pro' ? 'My GFW Pro' : 'My GFW'}
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
      </NavAltWrapper>
    );
  }
}

export default NavAlt;
