import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from 'react-tippy';
import Tip from 'components/tip';

import { ButtonParent, ButtonWrapper } from './components';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    tooltip: PropTypes.object,
    ariaLabel: PropTypes.string,
  };

  renderButton = () => {
    const { children, className, onClick, ariaLabel, ...props } = this.props;

    return (
      <ButtonParent
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        <ButtonWrapper>{children}</ButtonWrapper>
      </ButtonParent>
    );
  };

  render() {
    const { tooltip } = this.props;

    return tooltip ? (
      <Tooltip
        theme="tip"
        position="top"
        arrow
        html={<Tip text={tooltip.text} />}
      >
        {this.renderButton()}
      </Tooltip>
    ) : (
      this.renderButton()
    );
  }
}

export default Button;
