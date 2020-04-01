import React, { Component } from 'react';

import ArrowIcon from 'assets/icons/arrow-down.svg';
import CloseIcon from 'assets/icons/close.svg';
import MenuIcon from 'assets/icons/menu.svg';
import MoreIcon from 'assets/icons/more.svg';

import './styles.scss';

class Icons extends Component {
  render() {
    return (
      <div className="c-icons">
        <ArrowIcon />
        <CloseIcon />
        <MenuIcon />
        <MoreIcon />
      </div>
    );
  }
}

export const IconComponents = { ArrowIcon, CloseIcon, MenuIcon, MoreIcon };

export default Icons;
