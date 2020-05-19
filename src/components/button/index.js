import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'components/tooltip';

import { ButtonParent, ButtonWrapper } from './styles';

class Button extends PureComponent {
  static propTypes = {
    /** button children */
    children: PropTypes.node.isRequired,
    /** accessibility label for if no string is passed as a child */
    ariaLabel: PropTypes.string,
    /** classname for overriding styles in your app */
    className: PropTypes.string,
    /** onClick function */
    onClick: PropTypes.func,
    /** react tippy tooltip options: https://github.com/tvkhoa/react-tippy */
    tooltip: PropTypes.object,
    /** disabled button and adds opacity */
    disabled: PropTypes.bool,
    /** sets height of button. options: ['small', 'medium', 'default', 'large'] */
    size: PropTypes.string,
    /** remove border radius */
    square: PropTypes.bool,
    /** makes button circle regardless of content */
    round: PropTypes.bool,
    /** light colors */
    light: PropTypes.bool,
    /** dark colors */
    dark: PropTypes.bool,
    /** no colors */
    clear: PropTypes.bool,
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
      <Tooltip {...tooltip}>{this.renderButton()}</Tooltip>
    ) : (
      this.renderButton()
    );
  }
}

export default Button;
