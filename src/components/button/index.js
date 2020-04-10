import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Tooltip } from 'react-tippy';
import Tip from 'components/tip';

import './styles.scss';
import './themes/light.scss';
import './themes/dark.scss';
import './themes/clear.scss';
// import './themes/button-small.scss';
// import './themes/button-xsmall.scss';
// import './themes/button-medium.scss';
// import './themes/button-tiny.scss';
// import './themes/button-grey.scss';
// import './themes/button-grey-filled.scss';
// import './themes/button-clear.scss';
// import './themes/button-map-control.scss';
// import './themes/button-dashed.scss';
// import './themes/button-dark-round.scss';
class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    tooltip: PropTypes.object,
    ariaLabel: PropTypes.string
  };

  renderButton = () => {
    const {
      children,
      className,
      theme,
      disabled,
      onClick,
      ariaLabel
    } = this.props;

    return (
      <button
        className={cx('c-button', theme, className, { disabled })}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <div className="button-wrapper">
          {children}
        </div>
      </button>
    );
  };

  render() {
    const { tooltip } = this.props;

    return tooltip
      ? (
        <Tooltip
          theme="tip"
          position="top"
          arrow
          html={<Tip text={tooltip.text} />}
        >
          {this.renderButton()}
        </Tooltip>
)
      : this.renderButton();
  }
}

export default Button;
