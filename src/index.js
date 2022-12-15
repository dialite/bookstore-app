import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BookStore from './components/BookStore';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BookStore />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
