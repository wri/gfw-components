import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

import { SwitchWrapper } from './styles';

class Switch extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
    light: PropTypes.bool,
  };

  render() {
    const { label, value, options, onChange, className, light } = this.props;

    return (
      <SwitchWrapper className={className} light={light}>
        {label && <div className="label">{label}</div>}
        <Toggle
          icons={{
            checked: options[0].label,
            unchecked: options[1].label,
          }}
          defaultChecked={options[1].value === value}
          onChange={(e) => {
            const result = e.target.checked
              ? options[1].value
              : options[0].value;
            onChange(result);
          }}
        />
      </SwitchWrapper>
    );
  }
}

export default Switch;
