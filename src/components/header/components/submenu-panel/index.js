import React, { PureComponent } from 'react';
import { Global } from '@emotion/core';

import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Media } from 'components/responsive';
import Mobile from 'components/responsive/mobile';

import Tooltip from 'components/tooltip';

import NavLink from 'components/header/components/nav-link';
import Row from 'components/grid/row';
import Column from 'components/grid/column';
import H4 from 'components/html/h4';
import NotificationItem from 'components/notifications/notification-item';

import MyGfwIcon from 'assets/icons/mygfw.svg';
import SearchIcon from 'assets/icons/search.svg';
import NotificationsIcon from 'assets/icons/notifications.svg';
import NotificationsDotIcon from 'assets/icons/notifications-dot.svg';
import RoundedInfo from 'assets/icons/rounded-info.svg';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';

import { bodyOverflowHidden } from 'styles/global';
import { SubmenuWrapper } from './styles';
import {
  addNotifications,
  notificationsExists,
} from '../../../../utils/storage';

const isServer = typeof window === 'undefined';

class SubmenuPanel extends PureComponent {
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
    notifications: PropTypes.array,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  state = {
    search: '',
    showNotifications: false,
  };

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

  toggleNotificationDiv = () => {
    if (!this.state.showNotifications) {
      const ids = this.props.notifications?.map((item) => item.id) || [];

      addNotifications(ids);
    }

    this.setState({ showNotifications: !this.state.showNotifications });
  };

  renderNotifications = () => {
    const { notifications = [] } = this.props;

    return (
      <div className="notifications">
        <button
          className="back-button"
          onClick={() => this.setState({ showNotifications: false })}
        >
          <ArrowLeftIcon />
          BACK
        </button>
        <div data-component-type="notification-list">
          <div className="title-notifications">NOTIFICATIONS</div>
          {notifications.length === 0 && (
            <div className="empty-list">
              Check back here soon for more updates!
            </div>
          )}
          {notifications.length !== 0 && (
            <div className="items">
              {notifications.map(({ id, title, content, icon, date }) => (
                <NotificationItem
                  key={id}
                  title={title}
                  description={content}
                  date={date}
                  icon={icon}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
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
      notifications = [],
    } = this.props;

    const ids = notifications.map((item) => item.id) || [];
    const hasNotifications =
      notifications.length !== 0 && !notificationsExists(ids);

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
            <div className="menu-top" />
            {this.state.showNotifications && this.renderNotifications()}
            {!this.state.showNotifications && (
              <>
                <Media lessThan="medium">
                  <ul className="menu-section -first">
                    {navMain &&
                      navMain
                        .filter((item) => !!item.isVisibleOnMobile)
                        .map((item) => (
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
                                    !!pathname &&
                                    pathname.includes(item.extLink),
                                })}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                    <li className="nav-item">
                      <NavLink
                        href="/search/"
                        pathname="search"
                        appUrl="search"
                        NavLinkComponent={NavLinkComponent}
                      >
                        Search
                        <SearchIcon className="icon" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <button
                        data-component-type="button-toggle-notifications"
                        onClick={this.toggleNotificationDiv}
                      >
                        Notifications
                        {!hasNotifications && (
                          <NotificationsIcon className="notifications-icon" />
                        )}
                        {hasNotifications && (
                          <NotificationsDotIcon className="notifications-icon-red-dot" />
                        )}
                      </button>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        href="/my-gfw/"
                        pathname={pathname}
                        appUrl={appUrl}
                        NavLinkComponent={NavLinkComponent}
                      >
                        My GFW
                        <MyGfwIcon
                          className={cx('icon', {
                            'logged-in': loggedIn,
                          })}
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
                  <div className="menu-section">
                    <h4>Help</h4>
                    <ul>
                      <li className="nav-item">
                        <a href="/help/">HELP CENTER</a>
                      </li>
                      {/* // TODO: enable these 2 links when we have the real urls
                        <li className="nav-item">
                          <a href="/events">EVENTS</a>
                        </li>
                        <li className="nav-item">
                          <a href="/faq">FAQ</a>
                        </li>
                        */}
                      <li className="nav-item">
                        <a href="/grants-and-fellowships/projects/">
                          GRANTS & OPPORTUNITIES
                        </a>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link action"
                          onClick={this.handleContactUsOpen}
                        >
                          CONTACT US
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-section">
                    <h4>About</h4>
                    <ul>
                      <li className="nav-item">
                        <a href="/about/">ABOUT GFW</a>
                      </li>
                      <li className="nav-item">
                        <a href="/topics/biodiversity/">WHY FORESTS</a>
                      </li>
                    </ul>
                  </div>
                </Media>
                <div className="menu-section">
                  <Media lessThan="medium">
                    <h4>Other Tools</h4>
                  </Media>
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
                    {/* <a
                        href="https://developers.globalforestwatch.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-card"
                      >
                        <div className="all-apps">
                          <MoreIcon className="icon-more" />
                          Explore all apps
                        </div>
                      </a> */}
                  </div>
                </div>
                <div className="menu-section list">
                  <Row as="ul" className="more-links">
                    {moreLinks.map((m) => (
                      <Column key={m.label} as="li">
                        {!m.href && !m.onClick && (
                          <a
                            href={m.extLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="column">
                              {m.label}
                              <Tooltip content={m.tooltip}>
                                <div className="info-icon">
                                  <RoundedInfo />
                                </div>
                              </Tooltip>
                            </div>
                          </a>
                        )}
                      </Column>
                    ))}
                  </Row>
                </div>
                <div className="menu-section border-t-2">
                  <div className="text">
                    <a href="/help">
                      <b>Not sure? Learn more about our tools here</b>
                    </a>
                  </div>
                </div>
              </>
            )}
          </OutsideClickHandler>
        </div>
      </SubmenuWrapper>
    );
  }
}

SubmenuPanel.propTypes = {
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

export default SubmenuPanel;
