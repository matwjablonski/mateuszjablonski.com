import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { ThemeProvider } from '@smooth-ui/core-sc';
import theme from './theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
