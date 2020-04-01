import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import { Media, MediaContextProvider } from 'utils/responsive';
import { APP_URL } from 'utils/constants';

import gfwLogo from 'assets/logos/gfw.png';
import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import NavLink from 'components/header/components/nav-link';
import NavMenu from './components/nav-menu';
import NavAlt from './components/nav-alt';
// import SubmenuPanel from './components/submenu-panel';
import defaultConfig from './config';

import './styles.scss';

class Header extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    loggingIn: PropTypes.bool,
    setQueryToUrl: PropTypes.func,
    NavLinkComponent: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]),
    openContactUsModal: PropTypes.func.isRequired,
    appUrl: PropTypes.string,
    navMain: PropTypes.array
  };

  static defaultProps = {
    className: '',
    loggedIn: false,
    appUrl: APP_URL,
    ...defaultConfig
  };

  state = { pathname: '', showSubmenu: false };

  // componentDidMount() {
  //   const $style = document.createElement("style");
  //   document.head.appendChild($style);
  //   $style.type = 'text/css';
  //   $style.innerHTML = mediaStyles;
  // }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ pathname: window.location.pathname });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { showSubmenu } = this.state;
    if (prevState.showMore && !showSubmenu) {
      document.body.classList.remove('Header__no-scroll');
    } else if (!prevState.showSubmenu && showSubmenu) {
      document.body.classList.add('Header__no-scroll');
    }
  }

  render() {
    const { className, appUrl, navMain } = this.props;
    const { showSubmenu } = this.state;

    return (
      <MediaContextProvider>
        <div className={cx('c-header', className)}>
          <div className="row">
            <div className="column small-12 ">
              <NavLink className="logo" href="/" appUrl={appUrl}>
                <img
                  src={gfwLogo}
                  alt="Global Forest Watch"
                  width="76"
                  height="76"
                />
              </NavLink>
              <div className="nav">
                <Media greaterThanOrEqual="md-bg" className="nav-desktop">
                  <NavMenu
                    {...this.props}
                    {...this.state}
                    menuItems={navMain}
                  />
                  <NavAlt
                    {...this.props}
                    {...this.state}
                    handleShowSubmenu={show =>
                      this.setState({ showSubmenu: show })}
                  />
                </Media>
                <Media lessThan="md-bg" className="nav-mobile">
                  <OutsideClickHandler
                    onOutsideClick={() => this.setState({ showSubmenu: false })}
                  >
                    <li className="nav-item nav-more">
                      <button
                        className="nav-link"
                        onClick={() =>
                          this.setState({ showSubmenu: !showSubmenu })}
                      >
                        {showSubmenu ? 'close' : 'more'}
                        {
                          showSubmenu
                            ? <CloseIcon className="icon-submenu icon-close" />
                            : <MenuIcon className="icon-submenu icon-menu" />
                        }
                      </button>
                    </li>
                  </OutsideClickHandler>
                </Media>
              </div>
            </div>
          </div>
        </div>
      </MediaContextProvider>
    );
  }
}

export default Header;
