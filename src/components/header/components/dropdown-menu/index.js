import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import NavLink from 'components/header/components/nav-link';
import ArrowIcon from 'assets/icons/arrow-down.svg';

import { DropdownWrapper } from './styles';

class DropdownMenu extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.object,
    options: PropTypes.array,
    pathname: PropTypes.string,
    appUrl: PropTypes.string,
    active: PropTypes.bool,
    NavLinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  state = { open: false };

  render() {
    const {
      className,
      label,
      selected,
      options,
      NavLinkComponent,
      appUrl,
      active,
      pathname,
    } = this.props;
    const { open } = this.state;

    return (
      <DropdownWrapper className={className}>
        <OutsideClickHandler
          onOutsideClick={() => this.setState({ open: false })}
        >
          <button
            className={cx('nav-link', { active })}
            onClick={() => this.setState({ open: !open })}
            aria-label={label}
          >
            <span>{label}</span>
            <ArrowIcon className={cx('icon-arrow', { active: open })} />
          </button>
          {open && (
            <ul className="dropdown-menu">
              {options &&
                options.map((l) => (
                  <li
                    key={l.value || l.label}
                    className={cx({
                      active: selected && selected.value === l.value,
                    })}
                  >
                    {l.onClick ? (
                      <button
                        onClick={() => {
                          l.onClick(l.value);
                          this.setState({ open: false });
                        }}
                      >
                        {l.label}
                      </button>
                    ) : (
                      <Fragment>
                        {l.href && (
                          <NavLink
                            href={l.href}
                            className="nested"
                            pathname={pathname}
                            appUrl={appUrl}
                            NavLinkComponent={NavLinkComponent}
                          >
                            <button
                              onClick={() =>
                                this.setState({
                                  open: false,
                                })}
                            >
                              {l.label}
                            </button>
                          </NavLink>
                        )}
                        {l.extLink && (
                          <a
                            href={l.extLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {l.label}
                          </a>
                        )}
                      </Fragment>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </OutsideClickHandler>
      </DropdownWrapper>
    );
  }
}

export default DropdownMenu;
