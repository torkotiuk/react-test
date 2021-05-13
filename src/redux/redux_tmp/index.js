import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';

// react-redux
import { Provider } from 'react-redux';
// redux
import store from './redux/store';
// import { myAction333 } from './redux/actions';

// store.dispatch(myAction333(120));

// ==== checking all state ====
// console.log(store.getState());
// === === === === === ==== ===

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
