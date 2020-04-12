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
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static defaultProps = {
    appUrl: 'https://www.globalforestwatch.org',
  };

  render() {
    const {
      as: asPath,
      href,
      appUrl,
      NavLinkComponent,
      pathname,
      className,
      children,
      active,
    } = this.props;

    return NavLinkComponent ? (
      <NavLinkComponent
        className={className}
        href={href}
        as={asPath}
        activeClassName="active"
        activeShallow
      >
        {children}
      </NavLinkComponent>
    ) : (
      <a
        href={`${appUrl}${asPath || href}`}
        className={cx(className, {
          active: active || (!!pathname && pathname.includes(asPath || href)),
        })}
      >
        {children}
      </a>
    );
  }
}

export default NavLink;
