import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/header';

export const showHeader = element => {
  const el = document.getElementById('headerGfw');
  if (!el) {
    throw new Error("element #headerGfw doesn't exist");
  }
  ReactDOM.render(<Header />, element);
};

if (
  !!document.readyState &&
    (document.readyState === 'complete' ||
      document.readyState === 'interactive')
) {
  showHeader();
} else {
  document.addEventListener('DOMContentLoaded', showHeader);
}

// Icons
export { default as ArrowIcon } from './assets/icons/arrow-down.svg';
export { default as CloseIcon } from './assets/icons/close.svg';
export { default as MenuIcon } from './assets/icons/menu.svg';
export { default as MoreIcon } from './assets/icons/more.svg';
export { default as SearchIcon } from './assets/icons/search.svg';
export { default as MyGFWIcon } from './assets/icons/mygfw.svg';
export { default as DeveloperIcon } from './assets/icons/developer.svg';
export { default as BlogIcon } from './assets/icons/blog.svg';
export { default as ForumIcon } from './assets/icons/forum.svg';
export { default as HowToIcon } from './assets/icons/howto.svg';
export { default as OpenDataIcon } from './assets/icons/open-data.svg';
export { default as SGFIcon } from './assets/icons/sgf.svg';

// Components
export { default as Header } from './components/header';

// Responsive
export {
  Media,
  mediaStyles,
  MediaContextProvider,
  Desktop,
  Mobile
} from 'utils/responsive';
