/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import uniqueId from 'lodash/uniqueId';

import { composeValidators } from 'components/forms/validations';

import FieldWrapper from 'components/forms/components/field-wrapper';

import { RadioWrapper } from './styles';

class Radio extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    hidden: PropTypes.bool,
    validate: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    required: PropTypes.bool,
  };

  render() {
    const { name, label, validate, options, hidden, required } = this.props;

    return (
      <Field
        name={name}
        validate={composeValidators(required, validate)}
        component="select"
      >
        {({ input, meta }) => (
          <FieldWrapper
            label={label}
            name={name}
            {...meta}
            hidden={hidden}
            required={required}
          >
            {options &&
              options.map((option) => {
                const id = uniqueId(`radio-${option.value}-`);
                return (
                  <RadioWrapper key={option.value}>
                    <Field
                      id={id}
                      name={input.name}
                      component="input"
                      type="radio"
                      value={option.value}
                    />
                    <label className="radio-label" htmlFor={id}>
                      <span />
                      {option.label}
                    </label>
                  </RadioWrapper>
                );
              })}
          </FieldWrapper>
        )}
      </Field>
    );
  }
}

export default Radio;
