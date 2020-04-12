import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import './themes/light.scss';

class Loader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    message: PropTypes.string
  };

  render() {
    const { className, theme, message } = this.props;
    return (
      <div className={`c-loader ${className} ${theme}`}>
        <div className="spinner" />
        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}

export default Loader;
