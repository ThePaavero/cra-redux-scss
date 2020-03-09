import React from 'react';
import ReactDOM from 'react-dom';
import Store from './reducers/store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App';

const store = createStore(Store)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
