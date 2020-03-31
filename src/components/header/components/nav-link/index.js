import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class NavLink extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    fullScreen: PropTypes.bool,
    menuItems: PropTypes.array,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  render() {
    const {
      as: asPath,
      href,
      appUrl,
      NavLinkComponent,
      pathname,
      className,
      children
    } = this.props;

    return NavLinkComponent ? (
        <NavLinkComponent
          className={className}
          href={href}
          as={as}
          activeClassName="active"
          activeShallow
        >
          {children}
        </NavLinkComponent>
      ) : (
        <a
          href={`${appUrl}${asPath || href}`}
          className={cx(
            className,
            { active: pathname && pathname.includes(asPath || href) }
          )}
        >
          {children}
        </a>
      )
  }
}

export default NavLink;
