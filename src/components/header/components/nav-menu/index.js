import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DropdownMenu from 'components/header/components/dropdown-menu';
import NavLink from 'components/header/components/nav-link';

import { NavMenuWrapper } from './styles';

class NavMenu extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    menuItems: PropTypes.array,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    appUrl: PropTypes.string,
    pathname: PropTypes.string,
  };

  render() {
    const {
      theme,
      className,
      menuItems,
      NavLinkComponent,
      appUrl,
      pathname,
    } = this.props;

    return menuItems ? (
      <NavMenuWrapper className={className}>
        {menuItems.map((item) => (
          <li key={item.href || item.label} className="nav-item">
            {item.submenu ? (
              <DropdownMenu
                className="nested"
                label={item.label}
                options={item.submenu}
                NavLinkComponent={NavLinkComponent}
                active={!!pathname && pathname.includes(item.href)}
                pathname={pathname}
                appUrl={appUrl}
              />
            ) : (
              <Fragment>
                {item.href && (
                  <NavLink
                    className="nav-link"
                    {...item}
                    theme={theme}
                    NavLinkComponent={NavLinkComponent}
                    appUrl={appUrl}
                    pathname={pathname}
                  >
                    {item.label}
                  </NavLink>
                )}
                {item.extLink && (
                  <a
                    href={item.extLink}
                    className={cx('nav-link', {
                      active: !!pathname && pathname.includes(item.extLink),
                    })}
                  >
                    {item.label}
                  </a>
                )}
              </Fragment>
            )}
          </li>
        ))}
      </NavMenuWrapper>
    ) : null;
  }
}

export default NavMenu;
