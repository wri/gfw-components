import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';
import Search from 'components/search';

import DropdownMenu from '../dropdown-menu';

import './submenu-panel.scss';

class Header extends PureComponent {
  state = {
    search: ''
  };

  handleSubmit = () => {
    const { setQueryToUrl, hideMenu } = this.props;
    setQueryToUrl({ query: this.state.search });
    hideMenu();
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  render() {
    const {
      className,
      apps,
      moreLinks,
      showSubmenu,
      onClick,
      navMain,
      activeLang,
      languages,
      handleLangSelect,
      loggedIn,
      toggleContactUs,
      hideMenu
    } = this.props;

    return (
      <div
        className={cx(
          'c-submenu-panel',
          { 'full-screen': showSubmenu },
          className
        )}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className="submenu-wrapper">
          <Search
            className="menu-search"
            placeholder="Search"
            onChange={this.handleSearchChange}
            onSubmit={this.handleSubmit}
          />
          <div className="render-on-mobile">
            <div className="menu-section">
              <DropdownMenu
                className="sub-menu -plain"
                options={navMain}
                hideMenu={hideMenu}
              />
              <a
                className="nav-link my-gfw-link"
                href="/my-gfw"
                onClick={() => hideMenu()}
              >
                My GFW
                <Icon
                  name="icon-mygfw"
                  className={cx({ 'logged-in': loggedIn })}
                />
              </a>
            </div>
          </div>
          <div className="render-on-mobile">
            <div className="menu-section">
              <h4>Select a language</h4>
              <DropdownMenu
                className="sub-menu -plain"
                options={languages}
                selected={activeLang}
                handleSelect={lang => {
                  handleLangSelect(lang);
                }}
              />
            </div>
          </div>
          <div className="render-on-mobile">
            {!loggedIn && (
              <div className="menu-section">
                <a className="nav-link" href="/my-gfw">
                    My GFW
                </a>
              </div>
            )}
          </div>
          <div className="menu-section">
            <h4>Other applications</h4>
            <div className="apps-slider">
              {apps &&
                apps.map(d => (
                  <a
                    key={d.label}
                    href={d.extLink}
                    target="_blank"
                    rel="noopener nofollower"
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
                  <Icon className="icon-more" name="icon-more" />
                  Explore all apps
                </div>
              </a>
            </div>
          </div>
          <div className="menu-section">
            <h4>More in GFW</h4>
            <ul className="row more-links m-display-block">
              {moreLinks.map(m => (
                <li key={m.label} className="column small-12 medium-4 large-3">
                  {m.path ? (
                    <a href={m.path} onClick={hideMenu}>
                      <Icon name={m.icon} />
                      {m.label}
                    </a>
                  ) : (
                    <a
                      href={m.extLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={m.icon} />
                      {m.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="legal-section">
            <a className="title" href="/terms" onClick={hideMenu}>
              Terms
            </a>
            <a className="title" href="/privacy-policy" onClick={hideMenu}>
              Privacy Policy
            </a>
            <button className="title" onClick={() => toggleContactUs(true)}>
              Contact us
            </button>
          </div>
        </div>
      </div>
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
  toggleContactUs: PropTypes.func,
  loggedIn: PropTypes.bool,
  setQueryToUrl: PropTypes.func
};

export default Header;
