import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Media, MediaContextProvider } from 'utils/responsive';
import { APP_URL } from 'utils/constants';

import gfwLogo from 'assets/logos/gfw.png?webp';

import NavLink from 'components/header/components/nav-link';
import NavMenu from './components/nav-menu';
// import NavAlt from './components/nav-alt';
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

  render() {
    const { className, appUrl, navMain } = this.props;

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
                {
                  navMain && (
                  <Media greaterThanOrEqual="md">
                    <NavMenu
                      {...this.props}
                      {...this.state}
                      menuItems={navMain}
                    />
                  </Media>
                    )
                }
                {}
              </div>
            </div>
          </div>
        </div>
      </MediaContextProvider>
    );
  }
}

export default Header;
