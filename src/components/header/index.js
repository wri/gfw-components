import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import qs from 'query-string';

import { checkLoggedIn } from 'services/user';

import { Media, MediaContextProvider } from 'utils/responsive';
import { APP_URL } from 'utils/constants';

import gfwLogo from 'assets/logos/gfw.png';
import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import NavLink from 'components/header/components/nav-link';
import NavMenu from './components/nav-menu';
import NavAlt from './components/nav-alt';
import SubmenuPanel from './components/submenu-panel';

import defaultConfig from './config';

import './styles.scss';

class Header extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    loggingIn: PropTypes.bool,
    setQueryToUrl: PropTypes.func,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    openContactUsModal: PropTypes.func,
    appUrl: PropTypes.string,
    navMain: PropTypes.array,
    relative: PropTypes.bool,
    languages: PropTypes.array,
    pathname: PropTypes.string,
    showMenu: PropTypes.bool,
    afterLangSelect: PropTypes.func,
    customLogo: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    loggedIn: false,
    appUrl: APP_URL,
    showMenu: true,
    ...defaultConfig,
  };

  state = {
    pathname: this.props.pathname || '',
    showSubmenu: false,
    clickOutside: false,
    lang: 'en',
    languages: this.props.languages,
  };

  componentDidMount() {
    this.checkLoggedIn();
    this.getLanguages();
    this.findPathname();
  }

  componentDidUpdate(prevProps, prevState) {
    const { relative } = this.props;
    const { showSubmenu } = this.state;
    if (!relative && prevState.showSubmenu && !showSubmenu) {
      document.body.classList.remove('Header__no-scroll');
    } else if (!relative && !prevState.showSubmenu && showSubmenu) {
      document.body.classList.add('Header__no-scroll');
    }
  }

  checkLoggedIn = () => {
    const query =
      (typeof window !== 'undefined' && qs.parse(window.location.search)) || {};
    const urlToken = query && query.token;
    const token = urlToken || localStorage.getItem('userToken');

    if (urlToken) {
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

  getLanguages = () => {
    if (
      typeof window !== 'undefined' &&
      window.Transifex &&
      window.Transifex.live
    ) {
      const languages = window.Transifex.live.getAllLanguages();
      this.setState({
        lang: window.Transifex.live.detectLanguage(),
        languages:
          languages && languages.map((l) => ({ label: l.name, value: l.code })),
      });
    }
    console.log(window);
  };

  findPathname = () => {
    if (!this.props.pathname && typeof window !== 'undefined') {
      this.setState({ pathname: window.location.pathname });
    }
  };

  handleLangSelect = (lang) => {
    const { afterLangSelect } = this.props;
    if (typeof window !== 'undefined' && window.Transifex) {
      window.Transifex.live.translateTo(lang);
    }
    this.setState({ lang });
    afterLangSelect(lang);
  };

  render() {
    const {
      className,
      appUrl,
      navMain,
      relative,
      showMenu,
      customLogo,
    } = this.props;
    const { showSubmenu, clickOutside, languages, lang } = this.state;
    const activeLang = languages && languages.find((l) => l.value === lang);

    return (
      <MediaContextProvider>
        <div className={cx('c-header', { relative }, className)}>
          <div className="row">
            <div className="column small-12 ">
              <NavLink className="logo" href="/" appUrl={appUrl}>
                <img
                  src={customLogo || gfwLogo}
                  alt="Global Forest Watch"
                  width="76"
                  height="76"
                />
              </NavLink>
              <div className="nav">
                <Media
                  greaterThanOrEqual="md-bg"
                  className={cx('nav-desktop', { 'show-menu': showMenu })}
                >
                  {showMenu && (
                    <NavMenu
                      {...this.props}
                      {...this.state}
                      menuItems={navMain}
                    />
                  )}
                  <NavAlt
                    {...this.props}
                    {...this.state}
                    activeLang={activeLang}
                    handleLangSelect={this.handleLangSelect}
                    handleShowSubmenu={(show) =>
                      this.setState({ showSubmenu: show })}
                  />
                </Media>
                <Media lessThan="md-bg" className="nav-mobile">
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      if (!showSubmenu && !clickOutside) {
                        this.setState({ showSubmenu: false });
                      }
                    }}
                  >
                    <div className="nav-item nav-more">
                      <button
                        className="nav-link"
                        onClick={() => {
                          if (!showSubmenu && !clickOutside) {
                            this.setState({ showSubmenu: true });
                          }
                        }}
                      >
                        {showSubmenu ? 'close' : 'menu'}
                        {showSubmenu ? (
                          <CloseIcon className="icon-submenu icon-close" />
                        ) : (
                          <MenuIcon className="icon-submenu icon-menu" />
                        )}
                      </button>
                    </div>
                  </OutsideClickHandler>
                </Media>
              </div>
            </div>
          </div>
          {showSubmenu && (
            <OutsideClickHandler
              onOutsideClick={() => {
                this.setState({ showSubmenu: false, clickOutside: true });
                setTimeout(() => this.setState({ clickOutside: false }), 50);
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
        </div>
      </MediaContextProvider>
    );
  }
}

export default Header;
