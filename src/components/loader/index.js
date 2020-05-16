import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoaderWrapper } from './styles';

class Loader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    /** invert colors */
    light: PropTypes.bool,
    /** a message placed below the loader */
    message: PropTypes.string,
  };

  render() {
    const { className, light, message } = this.props;

    return (
      <LoaderWrapper className={className} light={light}>
        <div className="spinner" />
        {message && <p className="message">{message}</p>}
      </LoaderWrapper>
    );
  }
}

export default Loader;
