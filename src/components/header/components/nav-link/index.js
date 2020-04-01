import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class NavLink extends PureComponent {
  static propTypes = {
    as: PropTypes.string,
    href: PropTypes.string,
    appUrl: PropTypes.string,
    pathname: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    NavLinkComponent: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ])
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

    return NavLinkComponent
      ? (
        <NavLinkComponent
          className={className}
          href={href}
          as={asPath}
          activeClassName="active"
          activeShallow
        >
          {children}
        </NavLinkComponent>
)
      : (
        <a
          href={`${appUrl}${asPath || href}`}
          className={cx(className, {
          active: pathname && pathname.includes(asPath || href)
        })}
        >
          {children}
        </a>
);
  }
}

export default NavLink;
