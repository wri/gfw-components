// src/styleguide/Wrapper.js
import React, { Component } from 'react'
import GlobalStyles from 'components/global-styles';

export default class Wrapper extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        {this.props.children}
      </>
    )
  }
}