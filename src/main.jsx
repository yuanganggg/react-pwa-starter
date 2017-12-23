/**
 * @description - just preview react pwa development
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

// External
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';

// Internal
import App from './container/App';

// Scope
const container = document.querySelector('#main');

/* eslint-disable no-use-before-define */
bootstrap(App, container);

if (module.hot) {
  module.hot.accept('../src/container/App', () => {
    // eslint-disable-next-line global-require
    bootstrap(require('./container/App').default, container);
  });
}

/**
 * @description - bootstrap overseas application
 *
 * @param {Component} Application
 * @param {HTMLElement} RootContainer
 */
function bootstrap(Application, RootContainer) {
  const BrowserRootElement = (
    <AppContainer>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </AppContainer>
  );

  render(BrowserRootElement, RootContainer);
}
