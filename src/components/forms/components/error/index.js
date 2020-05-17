import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper } from './styles';

class Error extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    valid: PropTypes.bool,
    submitFailed: PropTypes.bool,
    submitError: PropTypes.string,
  };

  render() {
    const { valid, submitFailed, submitError, className } = this.props;

    return (
      <ErrorWrapper className={className}>
        {!submitError && !valid && submitFailed && (
          <span>Required fields are empty!</span>
        )}
        {submitError && <span>{submitError}</span>}
      </ErrorWrapper>
    );
  }
}

export default Error;
