import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from 'components/global-styles';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <>
        <GlobalStyles />
        {this.props.children}
      </>
    );
  }
}
