import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import './styles.scss';

class NavMenu extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.array,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  render() {
    const { className, menuItems, NavLinkComponent, appUrl, pathname } = this.props;

    return menuItems ? (
      <ul
        className={cx('c-nav-menu', className)}
      >
        {menuItems.map((item) => (
          <li key={item.href || item.label} className="nav-item">
            {item.submenu ? (
              <DropdownMenu
                className="submenu"
                label="topics"
                options={item.submenu}
                NavLinkComponent={NavLinkComponent}
                active={pathname && pathname.includes(item.as || item.href)}
                pathname={pathname}
                appUrl={appUrl}
              />
            ) : (
              <Fragment>
                {item.href && (
                  <Fragment>
                    <NavLink className="nav-link" {...item} pathname={pathname}>
                      {item.label}
                    </NavLink>
                  </Fragment>
                )}
                {item.extLink && (
                  <a
                    href={item.extLink}
                    target="_blank"
                    className="nav-link"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                )}
              </Fragment>
            )}
          </li>
        ))}
      </ul>
    ) : null;
  }
}

export default NavMenu;