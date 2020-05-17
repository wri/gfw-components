import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

import { SwitchWrapper } from './styles';

class Switch extends PureComponent {
  static propTypes = {
    /** label text above switch */
    label: PropTypes.string,
    /** value of active selected */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** array of length === 2 containing object of { label, value } */
    options: PropTypes.array,
    /** callback after clicking unselected element */
    onChange: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { label, value, options, onChange, className } = this.props;

    return (
      <SwitchWrapper className={className}>
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
