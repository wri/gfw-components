import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import qs from 'query-string';
import { Global } from '@emotion/core';

import { checkLoggedIn } from 'services/user';

import { Media, MediaContextProvider } from 'components/responsive';
import { APP_URL } from 'constants';

import gfwLogo from 'assets/logos/gfw.png';
import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import NavLink from 'components/header/components/nav-link';
import Row from 'components/grid/row';
import Column from 'components/grid/column';

import NavMenu from './components/nav-menu';
import NavAlt from './components/nav-alt';
import SubmenuPanel from './components/submenu-panel';

import defaultConfig from './config';

import { HeaderWrapper, bodyStyles } from './styles';

const isServer = typeof window === 'undefined';

class Header extends PureComponent {
  static propTypes = {
    /** override deafult styles in app */
    className: PropTypes.string,
    /** called after search */
    setQueryToUrl: PropTypes.func,
    /** pass custom js router component */
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** handle opening contact us modal */
    openContactUsModal: PropTypes.func,
    /** override app base url */
    appUrl: PropTypes.string,
    /** override navigation config */
    navMain: PropTypes.array,
    /** pass custom languages */
    languages: PropTypes.array,
    /** override active pathname to set link to active */
    pathname: PropTypes.string,
    /** override control of submenu and make open menu fill whole screen */
    fullScreen: PropTypes.bool,
    /** custom action after language selection */
    afterLangSelect: PropTypes.func,
    /** path to custom logo */
    customLogo: PropTypes.string,
  };

  static defaultProps = {
    appUrl: APP_URL,
    ...defaultConfig,
  };

  state = {
    pathname: this.props.pathname || '',
    showSubmenu: false,
    clickOutside: this.props.fullScreen,
    lang: isServer
      ? 'en'
      : JSON.parse(localStorage.getItem('txlive:selectedlang')) || 'en',
    loggedIn: false,
    loggingIn: false,
  };

  componentDidMount() {
    this.checkLoggedIn();
    this.findPathname();
  }

  componentDidUpdate(prevProps, prevState) {
    const { showSubmenu } = this.state;
    if (typeof document !== 'undefined') {
      if (prevState.showSubmenu && !showSubmenu) {
        document.body.classList.remove('Header__no-scroll');
      } else if (!prevState.showSubmenu && showSubmenu) {
        document.body.classList.add('Header__no-scroll');
      }
    }
  }

  checkLoggedIn = () => {
    const query = (!isServer && qs.parse(window.location.search)) || {};
    const urlToken = query && query.token;
    const token = urlToken || localStorage.getItem('userToken');

    if (urlToken && !isServer) {
      delete query.token;
      const cleanQuery = query && qs.stringify(query);
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ''}`
      );
    }

    if (token) {
      this.setState({ loggedIn: false, loggingIn: true });
      checkLoggedIn(token)
        .then((response) => {
          if (response.status < 400 && response.data) {
            this.setState({ loggedIn: true, loggingIn: false });
          } else {
            this.setState({ loggedIn: false, loggingIn: false });
          }
        })
        .catch(() => {
          this.setState({ loggedIn: false, loggingIn: false });
        });
    }
  };

  findPathname = () => {
    if (!this.props.pathname && !isServer) {
      this.setState({ pathname: window.location.pathname });
    }
  };

  handleLangSelect = (lang) => {
    const { afterLangSelect } = this.props;
    if (!isServer && window?.Transifex?.live) {
      window.Transifex.live.translateTo(lang);
    }
    this.setState({ lang });

    if (afterLangSelect) {
      afterLangSelect(lang);
    }
  };

  render() {
    const {
      className,
      appUrl,
      navMain,
      customLogo,
      languages,
      NavLinkComponent,
      fullScreen,
    } = this.props;
    const { showSubmenu, clickOutside, lang } = this.state;
    const activeLang = languages && languages.find((l) => l.value === lang);

    return (
      <MediaContextProvider>
        <Global styles={bodyStyles} />
        <HeaderWrapper
          className={className}
          fullScreen={fullScreen}
          showSubmenu={showSubmenu}
        >
          <Row className="nav-row">
            <Column className="nav-column">
              {!fullScreen || (fullScreen && showSubmenu) ? (
                <>
                  <NavLink
                    className="logo"
                    href="/"
                    appUrl={appUrl}
                    NavLinkComponent={NavLinkComponent}
                  >
                    <img
                      src={customLogo || gfwLogo}
                      alt="Global Forest Watch"
                      width="76"
                      height="76"
                    />
                  </NavLink>
                  <div className="nav">
                    <Media greaterThanOrEqual="medium" className="nav-desktop">
                      <NavMenu
                        {...this.props}
                        {...this.state}
                        menuItems={navMain}
                      />
                      <NavAlt
                        {...this.props}
                        {...this.state}
                        activeLang={activeLang}
                        handleLangSelect={this.handleLangSelect}
                        handleShowSubmenu={(show) =>
                          this.setState({ showSubmenu: show })}
                      />
                    </Media>
                    <Media lessThan="medium" className="nav-mobile">
                      <OutsideClickHandler
                        onOutsideClick={() => {
                          if (!showSubmenu && !clickOutside) {
                            this.setState({ showSubmenu: false });
                          }
                        }}
                      >
                        <div className="nav-item nav-more">
                          {showSubmenu && (
                            <button
                              type="button"
                              className="nav-link"
                              onClick={() => {
                                if (!clickOutside || fullScreen) {
                                  this.setState({ showSubmenu: false });
                                }
                              }}
                            >
                              close
                              <CloseIcon className="icon-submenu icon-close" />
                            </button>
                          )}
                          {!showSubmenu && (
                            <button
                              type="button"
                              className="nav-link"
                              onClick={() => {
                                if (!clickOutside) {
                                  this.setState({ showSubmenu: true });
                                }
                              }}
                            >
                              more
                              <MenuIcon className="icon-submenu icon-menu" />
                            </button>
                          )}
                        </div>
                      </OutsideClickHandler>
                    </Media>
                  </div>
                </>
              ) : (
                <button
                  className="logo"
                  onClick={() => this.setState({ showSubmenu: true })}
                >
                  <img
                    src={customLogo || gfwLogo}
                    alt="Global Forest Watch"
                    width="76"
                    height="76"
                  />
                </button>
              )}
            </Column>
          </Row>
          {showSubmenu && (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (!fullScreen) {
                  this.setState({ showSubmenu: false, clickOutside: true });
                  setTimeout(() => this.setState({ clickOutside: false }), 50);
                }
              }}
            >
              <SubmenuPanel
                {...this.props}
                {...this.state}
                handleLangSelect={this.handleLangSelect}
                activeLang={activeLang}
                hideMenu={() => this.setState({ showSubmenu: false })}
              />
            </OutsideClickHandler>
          )}
        </HeaderWrapper>
      </MediaContextProvider>
    );
  }
}

export default Header;
