import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
import { myAction, myAction111, myAction222 } from './redux//actions';

// console.log('Store>>', store);
// console.log('Store.getState>>', store.getState());
store.dispatch(myAction);
store.dispatch(myAction111);
store.dispatch(myAction222(50));
store.dispatch(myAction222(120));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
