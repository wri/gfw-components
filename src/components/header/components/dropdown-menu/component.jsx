import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import ArrowIcon from 'assets/icons/arrow-down.svg';

import './styles.scss';

class DropdownMenu extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.object,
    options: PropTypes.array,
    pathname: PropTypes.string,
    appUrl: PropTypes.string,
    active: PropTypes.bool,
    NavLinkComponent: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ])
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
      pathname
    } = this.props;
    const { open } = this.state;

    return (
      <div className={cx('c-dropdown-menu', className)}>
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
          {
            open && (
            <ul className="dropdown-menu">
              {
                    options && options.map(l => (
                      <li
                        key={l.value || l.label}
                        className={cx({
                            active: selected && selected.value === l.value
                          })}
                      >
                        {
                            l.onClick ? (
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
    {
                                  l.href && (
                                  <Fragment>
                                    {
                                          NavLinkComponent
                                            ? (
                                              <NavLinkComponent
                                                href={l.href}
                                                as={l.as}
                                                activeClassName="active"
                                                className="nested"
                                              >
                                                <button
                                                  onClick={() =>
                                                  this.setState({
                                                    open: false
                                                  })}
                                                >
                                                  {l.label}
                                                </button>
                                              </NavLinkComponent>
)
                                            : (
                                              <a
                                                href={
                                                `${appUrl}${l.as || l.href}`
                                              }
                                                className={cx(
                                                {
                                                  active: pathname &&
                                                    pathname.includes(
                                                      l.as || l.href
                                                    )
                                                },
                                                'nested'
                                              )}
                                              >
                                                <button
                                                  onClick={() =>
                                                  this.setState({
                                                    open: false
                                                  })}
                                                >
                                                  {l.label}
                                                </button>
                                              </a>
)
                                        }
                                  </Fragment>
                                    )
                                }
    {
                                  l.extLink && (
                                  <a
                                    href={l.extLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {l.label}
                                  </a>
                                    )
                                }
  </Fragment>
)
                          }
                      </li>
                      ))
                  }
            </ul>
              )
          }
        </OutsideClickHandler>
      </div>
    );
  }
}

export default DropdownMenu;
