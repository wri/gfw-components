import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import MyGfwIcon from 'assets/icons/mygfw.svg';
import MoreIcon from 'assets/icons/more.svg';
import CloseIcon from 'assets/icons/close.svg';

import './styles.scss';

class NavAlt extends PureComponent {
  static propTypes = {
    loggedIn: PropTypes.bool,
    loggingIn: PropTypes.bool,
    languages: PropTypes.array,
    activeLang: PropTypes.object,
    pathname: PropTypes.string,
    appUrl: PropTypes.string,
    clickOutside: PropTypes.bool,
    showSubmenu: PropTypes.bool,
    handleShowSubmenu: PropTypes.func,
    handleLangSelect: PropTypes.func,
    NavLinkComponent: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ])
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
      clickOutside,
      handleLangSelect,
      languages,
      activeLang
    } = this.props;

    return (
      <div className="c-nav-alt">
        {
          languages && (
          <div className="nav-item lang-selector">
            <DropdownMenu
              className="nested notranslate"
              label={activeLang && activeLang.label}
              options={languages.map(l => ({
                    label: l.label,
                    value: l.value,
                    onClick: handleLangSelect
                  }))}
              NavLinkComponent={NavLinkComponent}
            />
          </div>
            )
        }
        <div className="nav-item">
          <NavLink
            href="/my-gfw"
            className={cx('nav-link', {
              'animate-user-icon': !loggedIn && loggingIn
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
          <button
            className="nav-link"
            onClick={() => {
              if (!showSubmenu && !clickOutside) {
                handleShowSubmenu(true);
              }
            }}
          >
            {showSubmenu ? 'close' : 'more'}
            {
              showSubmenu
                ? <CloseIcon className="icon-submenu icon-close" />
                : <MoreIcon className="icon-submenu icon-more" />
            }
          </button>
        </div>
      </div>
    );
  }
}

export default NavAlt;
