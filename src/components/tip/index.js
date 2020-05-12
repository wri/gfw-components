import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TipWrapper } from './styles';

class Tip extends PureComponent {
  render() {
    const { text, className } = this.props;
    return <TipWrapper className={className}>{text}</TipWrapper>;
  }
}

Tip.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};

export default Tip;
