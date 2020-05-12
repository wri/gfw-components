import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';

const ThemeProvider = (props) => (
  <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
