import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class NavLink extends PureComponent {
  static propTypes = {
    href: PropTypes.string,
    appUrl: PropTypes.string,
    pathname: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool,
    activeShallow: PropTypes.bool,
    children: PropTypes.node.isRequired,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static defaultProps = {
    appUrl: 'https://www.globalforestwatch.org',
  };

  render() {
    const {
      href,
      appUrl,
      NavLinkComponent,
      pathname,
      className,
      children,
      active,
      activeShallow,
    } = this.props;

    return NavLinkComponent ? (
      <NavLinkComponent
        className={className}
        href={href}
        activeClassName="active"
        activeShallow={activeShallow}
      >
        {children}
      </NavLinkComponent>
    ) : (
      <a
        href={`${appUrl}${href}`}
        className={cx(className, {
          active: active || (!!pathname && pathname.includes(href)),
        })}
      >
        {children}
      </a>
    );
  }
}

export default NavLink;
