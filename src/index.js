import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import { promiseMiddleware } from './middleware'

const defaultState = {
  appName: 'Hermes',
  articles: null
};

const reducer = function(state = defaultState, action) {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return {
        ...state,
        articles: action.payload.articles
      };
    default:
      return state;
  }
};

const middleware = applyMiddleware(promiseMiddleware);

const storeEnhancers = compose(
  middleware,
  (window && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const store = createStore(reducer, defaultState, storeEnhancers);


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>), 
  document.getElementById('root'));