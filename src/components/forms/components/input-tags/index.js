/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import ReactTagsInput from 'react-tagsinput';

import { composeValidators } from 'components/forms/validations';

import Input from 'components/html/input';
import Pill from 'components/pill';
import FieldWrapper from 'components/forms/components/field-wrapper';

import { TagsWrapper, TagInstructions } from './styles';

class InputTags extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    hidden: PropTypes.bool,
    validate: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
  };

  render() {
    const { name, label, validate, placeholder, hidden, required } = this.props;

    return (
      <Field
        name={name}
        validate={composeValidators(required, validate)}
        type="text"
      >
        {({ input, meta }) => (
          <FieldWrapper
            label={label}
            name={name}
            {...meta}
            hidden={hidden}
            required={required}
          >
            <TagsWrapper>
              <ReactTagsInput
                {...input}
                renderInput={(props) => <Input {...props} />}
                value={input.value || []}
                inputProps={{ placeholder: placeholder || 'Add a new tag' }}
                renderTag={({ tag, key, onRemove }) => (
                  <Pill
                    key={key}
                    className="input-pill"
                    active
                    label={tag}
                    onRemove={(e) => {
                      e.preventDefault();
                      onRemove(key);
                    }}
                  />
                )}
              />
              <TagInstructions>
                Hit enter to create and separate tags
              </TagInstructions>
            </TagsWrapper>
          </FieldWrapper>
        )}
      </Field>
    );
  }
}

export default InputTags;
