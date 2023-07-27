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
    slim: PropTypes.bool,
    openContactUsModal: PropTypes.func,
  };

  state = { open: false };

  handleContactUsOpen = () => {
    const { openContactUsModal } = this.props;

    if (openContactUsModal) {
      openContactUsModal();
    }
  };

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
      slim,
    } = this.props;
    const { open } = this.state;

    return (
      <DropdownWrapper className={className} slim={slim}>
        <OutsideClickHandler
          onOutsideClick={() => this.setState({ open: false })}
        >
          <button
            type="button"
            className={cx('nav-link', { active })}
            onClick={() => this.setState({ open: !open })}
            aria-label={label}
          >
            {label}
            <ArrowIcon className={cx('icon-arrow', { active: open })} />
          </button>
          {open && options && (
            <ul className="dropdown-menu">
              {options.map((l) => (
                <li
                  key={l.value || l.label}
                  className={cx({
                    active: selected && selected.value === l.value,
                  })}
                >
                  {l.onClick ? (
                    <button
                      onClick={() => {
                        if (l.isContactModal) {
                          l.onClick(this.handleContactUsOpen());
                        } else {
                          l.onClick(l.value);
                        }
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
                            type="button"
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
