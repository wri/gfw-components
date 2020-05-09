import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoaderWrapper } from './components';

class Loader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    light: PropTypes.bool,
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
