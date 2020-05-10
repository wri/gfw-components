import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/logos/gfw.png';

import GlobalStyles from 'components/global-styles';

import './styles.scss';

export default class Wrapper extends Component {
  static propTypes = { children: PropTypes.node.isRequired };

  render() {
    return (
      <>
        <GlobalStyles />
        <div className="c-intro">
          <img className="logo" src={Logo} alt="global forest watch logo" />
          {this.props.children}
        </div>
      </>
    );
  }
}
