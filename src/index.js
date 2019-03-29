import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@smooth-ui/core-sc';
import theme from './theme';
import App from './App';

render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.getElementById('app-root'),
);
