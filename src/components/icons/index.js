import React, { Component } from 'react';

import ArrowIcon from 'assets/icons/arrow-down.svg';
import CloseIcon from 'assets/icons/close.svg';
import MenuIcon from 'assets/icons/menu.svg';
import MoreIcon from 'assets/icons/more.svg';
import SearchIcon from 'assets/icons/search.svg';
import MyGFWIcon from 'assets/icons/mygfw.svg';

import DeveloperIcon from 'assets/icons/developer.svg';
import BlogIcon from 'assets/icons/blog.svg';
import ForumIcon from 'assets/icons/forum.svg';
import HowToIcon from 'assets/icons/howto.svg';
import OpenDataIcon from 'assets/icons/open-data.svg';
import SGFIcon from 'assets/icons/sgf.svg';

import './styles.scss';

class Icons extends Component {
  render() {
    return (
      <div className="c-icons">
        <div className="row">
          <ArrowIcon />
          <CloseIcon />
          <MenuIcon />
          <MoreIcon />
          <MyGFWIcon />
          <SearchIcon />
        </div>
        <div className="row">
          <DeveloperIcon />
          <BlogIcon />
          <ForumIcon />
          <HowToIcon />
          <OpenDataIcon />
          <SGFIcon />
        </div>
      </div>
    );
  }
}

export const IconComponents = { ArrowIcon, CloseIcon, MenuIcon, MoreIcon };

export default Icons;
