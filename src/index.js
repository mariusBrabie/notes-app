import React from 'react';
import configureStore from './store/configureStore'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
