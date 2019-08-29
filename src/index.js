import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './index.css';
import { ThemeProvider } from '@smooth-ui/core-sc';
import theme from './theme';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import LoadingWrapper from './components/Loading/LoadingWrapper';

render(
  <Suspense fallback={<LoadingWrapper />}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
