import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware'
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'
import settings from './reducers/settings'
import article from './reducers/article'

  
const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article
});
  
const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);
  
const storeEnhancers = compose(
    middleware,
    (window && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);
  
const store = createStore(reducer, {}, storeEnhancers);

export default store;