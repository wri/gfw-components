import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import Icon from 'components/icon';
import DropdownMenu from 'components/header/components/dropdown-menu';

import './nav-menu.scss';

class NavMenu extends PureComponent {
  state = {
    activeSubmenu: ''
  };

  setActiveSubmenu = parent => {
    this.setState({ activeSubmenu: parent });
  };

  render() {
    const { className, menuItems, fullScreen } = this.props;
    const { activeSubmenu } = this.state;

    return menuItems ? (
      <ul
        className={cx('c-nav-menu', className, { 'full-screen': fullScreen })}
      >
        {menuItems.map(item => (
          <li key={item.path || item.label} className="nav-item">
            {item.path && (
              <a
                href={item.path}
                className={cx('nav-link', { 'with-submenu': item.submenu })}
              >
                {item.label}
              </a>
            )}
            {item.extLink && (
              <a
                href={item.extLink}
                className="nav-link"
                target="_blank"
                rel="noopener nofollower"
              >
                {item.label}
              </a>
            )}
            {item.submenu && (
              <OutsideClickHandler
                onOutsideClick={() => this.setActiveSubmenu(null)}
              >
                <button
                  className="nav-link hidden"
                  onClick={() =>
                    this.setActiveSubmenu(
                      item.label === activeSubmenu ? null : item.label
                    )
                  }
                >
                <Icon
                  className={cx('icon-arrow', {
                    active: activeSubmenu === item.label
                  })}
                  name="icon-arrow-down"
                />
                </button>
                {activeSubmenu === item.label && (
                  <DropdownMenu
                    className="submenu"
                    options={item.submenu}
                    hideMenu={() => this.setActiveSubmenu(null)}
                  />
                )}
              </OutsideClickHandler>
            )}
          </li>
        ))}
      </ul>
    ) : null;
  }
}

NavMenu.propTypes = {
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
  menuItems: PropTypes.array
};

export default NavMenu;
