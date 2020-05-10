import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from 'components/global-styles';
import theme from 'styles/theme';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </>
    );
  }
}
