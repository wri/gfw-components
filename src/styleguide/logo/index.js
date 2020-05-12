import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/logos/gfw.png';

import { LogoWrapper } from './styles';

export default class Wrapper extends Component {
  static propTypes = { children: PropTypes.node.isRequired };

  render() {
    return (
      <LogoWrapper className="c-intro">
        <img className="logo" src={Logo} alt="global forest watch logo" />
        {this.props.children}
      </LogoWrapper>
    );
  }
}
