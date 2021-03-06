// == Import : npm
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// store
import store from 'src/store';
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
const target = document.getElementById('root');
render(rootReactElement, target);
