import React, { PureComponent } from 'react';
import { Global } from '@emotion/core';

import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Media } from 'components/responsive';
import Mobile from 'components/responsive/mobile';

import NavLink from 'components/header/components/nav-link';
import Search from 'components/search';
import Row from 'components/grid/row';
import Column from 'components/grid/column';
import H4 from 'components/html/h4';

import MoreIcon from 'assets/icons/more.svg';
import MyGfwIcon from 'assets/icons/mygfw.svg';

import { bodyOverflowHidden } from 'styles/global';
import { SubmenuWrapper } from './styles';

const isServer = typeof window === 'undefined';

class Header extends PureComponent {
  static propTypes = {
    apps: PropTypes.array,
    moreLinks: PropTypes.array,
    theme: PropTypes.string,
    showSubmenu: PropTypes.bool,
    onClick: PropTypes.func,
    navMain: PropTypes.array,
    activeLang: PropTypes.object,
    languages: PropTypes.array,
    hideMenu: PropTypes.func,
    handleLangSelect: PropTypes.func,
    openContactUsModal: PropTypes.func,
    loggedIn: PropTypes.bool,
    setQueryToUrl: PropTypes.func,
    appUrl: PropTypes.string,
    slim: PropTypes.bool,
    pathname: PropTypes.string,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  state = { search: '' };

  handleSubmit = () => {
    if (!isServer) {
      const { setQueryToUrl, hideMenu } = this.props;
      if (setQueryToUrl) {
        setQueryToUrl(this.state.search);
      } else {
        window.location.href = `https://www.globalforestwatch.org/search?query=${this.state.search}`;
      }
      hideMenu();
    }
  };

  handleSearchChange = (search) => {
    this.setState({ search });
  };

  handleContactUsOpen = () => {
    const { openContactUsModal } = this.props;
    if (openContactUsModal) {
      openContactUsModal();
    }
  };

  render() {
    const {
      apps,
      moreLinks,
      navMain,
      languages,
      activeLang,
      handleLangSelect,
      loggedIn,
      hideMenu,
      NavLinkComponent,
      appUrl,
      pathname,
      fullScreen,
      theme,
      slim,
    } = this.props;

    return (
      <SubmenuWrapper theme={theme} slim={slim} fullScreen={fullScreen}>
        <Mobile>
          <Global styles={bodyOverflowHidden} />
        </Mobile>
        <div className="submenu-wrapper">
          <OutsideClickHandler
            onOutsideClick={() => {
              if (!fullScreen) {
                hideMenu();
              }
            }}
          >
            <div className="menu-search">
              <Search
                placeholder="Search"
                onChange={this.handleSearchChange}
                onSubmit={this.handleSubmit}
              />
            </div>
            <Media lessThan="medium">
              <ul className="menu-section -first">
                {navMain &&
                  navMain.map((item) => (
                    <li key={item.label} className="nav-item">
                      {item.href && (
                        <NavLink
                          {...item}
                          pathname={pathname}
                          appUrl={appUrl}
                          NavLinkComponent={NavLinkComponent}
                        >
                          {item.label}
                        </NavLink>
                      )}
                      {item.extLink && (
                        <a
                          href={item.extLink}
                          className={cx({
                            active:
                              !!pathname && pathname.includes(item.extLink),
                          })}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                <li className="nav-item">
                  <NavLink
                    href="/my-gfw/"
                    pathname={pathname}
                    appUrl={appUrl}
                    NavLinkComponent={NavLinkComponent}
                  >
                    My GFW
                    <MyGfwIcon
                      className={cx('my-gfw-icon', { 'logged-in': loggedIn })}
                    />
                  </NavLink>
                </li>
              </ul>
            </Media>
            <Media lessThan="medium">
              <div className="menu-section">
                <H4>Select a language</H4>
                <ul>
                  {languages &&
                    languages.map((item) => (
                      <li key={item.label} className="nav-item">
                        <button
                          className={cx({
                            active:
                              activeLang && activeLang.label === item.label,
                          })}
                          {...item}
                          onClick={() => {
                            handleLangSelect(item.value);
                            hideMenu();
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </Media>
            <div className="menu-section">
              <H4>Other applications</H4>
              <div className="apps-slider">
                {apps &&
                  apps.map((d) => (
                    <a
                      key={d.label}
                      href={d.extLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="app-card"
                    >
                      <div
                        className="app-image"
                        style={{ backgroundImage: `url('${d.image}')` }}
                      />
                    </a>
                  ))}
                <a
                  href="https://developers.globalforestwatch.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-card"
                >
                  <div className="all-apps">
                    <MoreIcon className="icon-more" />
                    Explore all apps
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-section">
              <H4>More in GFW</H4>
              <Row as="ul" className="more-links">
                {moreLinks.map((m) => (
                  <Column key={m.label} as="li">
                    {m.onClick && (
                      <button onClick={this[m.onClick]} type="button">
                        <m.icon />
                        {m.label}
                      </button>
                    )}
                    {m.href && (
                      <NavLink
                        {...m}
                        appUrl={appUrl}
                        pathname={pathname}
                        NavLinkComponent={NavLinkComponent}
                      >
                        <button onClick={hideMenu}>
                          <m.icon />
                          {m.label}
                        </button>
                      </NavLink>
                    )}
                    {!m.href && !m.onClick && (
                      <a
                        href={m.extLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <m.icon />
                        {m.label}
                      </a>
                    )}
                  </Column>
                ))}
              </Row>
            </div>
          </OutsideClickHandler>
        </div>
      </SubmenuWrapper>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  apps: PropTypes.array,
  moreLinks: PropTypes.array,
  showSubmenu: PropTypes.bool,
  onClick: PropTypes.func,
  navMain: PropTypes.array,
  activeLang: PropTypes.object,
  languages: PropTypes.array,
  hideMenu: PropTypes.func,
  handleLangSelect: PropTypes.func,
  openContactUsModal: PropTypes.func,
  loggedIn: PropTypes.bool,
  setQueryToUrl: PropTypes.func,
  fullScreen: PropTypes.bool,
  NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Header;
