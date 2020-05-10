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
      <NavAltWrapper>
        <div className="nav-item lang-selector">
          <DropdownMenu
            className="nested notranslate"
            label={activeLang && activeLang.label}
            options={languages.map((l) => ({
              ...l,
              onClick: handleLangSelect,
            }))}
            NavLinkComponent={NavLinkComponent}
          />
        </div>
        <div className="nav-item">
          <NavLink
            href="/my-gfw"
            className={cx('nav-link', {
              'animate-user-icon': !loggedIn && loggingIn,
            })}
            pathname={pathname}
            appUrl={appUrl}
            NavLinkComponent={NavLinkComponent}
          >
            My GFW
            <MyGfwIcon
              className={cx('my-gfw-icon', { 'logged-in': loggedIn })}
            />
          </NavLink>
        </div>
        <div className="nav-item nav-more">
          {showSubmenu && (
            <button
              className="nav-link"
              onClick={() => handleShowSubmenu(false)}
            >
              close
              <CloseIcon className="icon-submenu icon-close" />
            </button>
          )}
          {!showSubmenu && (
            <button
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
