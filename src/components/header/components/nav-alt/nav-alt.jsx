import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import Icon from 'components/icon';
import DropdownMenu from 'components/header/components/dropdown-menu';
import SubmenuPanel from 'components/header/components/submenu-panel';

import './nav-alt.scss';

class NavAlt extends PureComponent {
  static propTypes = {
    loggedIn: PropTypes.bool,
    showSubmenu: PropTypes.bool,
    closeSubMenu: PropTypes.func,
    setLangToUrl: PropTypes.func,
    myGfwLinks: PropTypes.array
  };

  constructor(props) {
    super(props);

    const txData = {};
    // localStorage && JSON.parse(localStorage.getItem('txlive:languages'));
    // const txLang = localStorage && JSON.parse(localStorage.getItem('txlive:selectedlang'));
    const txLang = 'en';
    const languages =
      txData &&
      txData.source &&
      [txData.source].concat(txData.translation).map(l => ({
        label: l.name,
        value: l.code
      }));

    this.state = {
      showHeader: false,
      languages,
      lang: txLang,
      showLang: false,
      showMore: false,
      showMyGfw: false
    };

    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    const { showMore } = this.state;
    if (prevState.showMore && !showMore) {
      document.body.classList.remove('Header__no-scroll');
    } else if (!prevState.showMore && showMore) {
      document.body.classList.add('Header__no-scroll');
    }
  }

  handleLangSelect(lang) {
    // localStorage && localStorage.setItem('txlive:selectedlang', `"${lang}"`);
    if (window) {
      window.Transifex.live.translateTo(lang);
    }
    this.setState({ lang, showLang: false, showMore: false });
    if (window) {
      window.Transifex.live.onTranslatePage(newLang => {
        this.props.setLangToUrl(newLang);
      });
    }
  };

  handleCloseSubmenu() {
    this.setState({ showMore: false });
    this.props.closeSubMenu();
  };

  render() {
    const { showSubmenu, loggedIn, myGfwLinks } = this.props;
    const { showLang, showMore, showMyGfw, languages, lang } = this.state;
    const activeLang = languages && languages.find(l => l.value === lang);
    const showMorePanel = showMore || showSubmenu;

    return (
      <ul className={cx('c-nav-alt', { 'full-screen': showSubmenu })}>
        <div className="render-on-desktop">
          <Fragment>
            <li className="alt-link">
              <OutsideClickHandler
                onOutsideClick={() => this.setState({ showLang: false })}
              >
                <Fragment>
                  <button
                    className="menu-link lang-btn notranslate"
                    onClick={() => {
                      if (this.mounted) {
                        this.setState({ showLang: !showLang });
                      }
                    }}
                  >
                    {(activeLang && activeLang.label) || 'English'}
                    <Icon
                      className={cx('icon-arrow', {
                       active: showLang
                      })}
                      name="icon-arrow-down"
                    />
                  </button>
                  {showLang && (
                    <DropdownMenu
                      className="submenu notranslate"
                      options={languages}
                      selected={activeLang}
                      handleSelect={this.handleLangSelect}
                      hideMenu={() => this.setState({ showLang: false })}
                    />
                  )}
                </Fragment>
              </OutsideClickHandler>
            </li>
            <li className="alt-link">
              {process.env.FEATURE_ENV !== 'staging' ? (
                <Fragment>
                  {loggedIn ? (
                    <OutsideClickHandler
                      onOutsideClick={() => this.setState({ showMyGfw: false })}
                    >
                      <a
                        className="nav-link"
                        href="/my-gfw"
                        onClick={() => this.setState({ showMyGfw: !showMyGfw })}
                      >
                        My GFW
                        <Icon
                          name="icon-mygfw"
                          className={cx({ 'logged-in': loggedIn })}
                        />
                      </a>
                      <button
                        className="nav-link hidden"
                        onClick={() => this.setState({ showMyGfw: !showMyGfw })}
                      />
                      {showMyGfw && (
                        <DropdownMenu
                          className="submenu"
                          options={myGfwLinks}
                        />
                      )}
                    </OutsideClickHandler>
                  ) : (
                    <a
                      className="nav-link"
                      href="/my-gfw"
                    >
                      My GFW
                      <Icon
                        name="icon-mygfw"
                        className={cx({ 'logged-in': loggedIn })}
                      />
                    </a>
                  )}
                </Fragment>
              ) : (
                <a
                  className="nav-link"
                  href="/my-gfw"
                >
                  My GFW
                  <Icon
                    name="icon-mygfw"
                    className={cx({ 'logged-in': loggedIn })}
                  />
                </a>
              )}
            </li>
          </Fragment>
        </div>
        <li className="alt-link">
          <OutsideClickHandler
            onOutsideClick={() => this.setState({ showMore: false })}
          >
            <button
              className="menu-link"
              onClick={() => {
                if (showSubmenu) {
                  this.handleCloseSubmenu();
                } else {
                  this.setState({ showMore: !showMore });
                }
              }}
            >
              <span className="render-on-mobile">
                menu
              </span>
              {showSubmenu && (
                <span className="render-on-desktop">
                  close
                </span>
              )}
              <div className="render-on-desktop">
                more
              </div>
              <div className="render-on-desktop">
                <Icon
                  className={showMorePanel ? 'icon-close' : 'icon-more'}
                  name={showMorePanel ? "icon-close" : "icon-more"}
                />
              </div>
              <div className="render-on-mobile">
                <Icon
                  className={showMorePanel ? "icon-close" : "icon-menu"}
                  name={showMorePanel ? "icon-close" : "icon-menu"}
                />
              </div>
            </button>
            {showMorePanel && (
              <SubmenuPanel
                className="submenu-panel"
                languages={languages}
                activeLang={activeLang}
                handleLangSelect={this.handleLangSelect}
                hideMenu={this.handleCloseSubmenu}
                {...this.props}
              />
            )}
          </OutsideClickHandler>
        </li>
      </ul>
    );
  }
}

export default NavAlt;
