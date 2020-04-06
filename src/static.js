import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/header';

const showHeader = element => {
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
