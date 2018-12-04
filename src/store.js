import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { promiseMiddleware } from './middleware'
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'

  
const reducer = combineReducers({
  auth,
  common,
  home
});
  
const middleware = applyMiddleware(promiseMiddleware);
  
const storeEnhancers = compose(
    middleware,
    (window && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);
  
const store = createStore(reducer, {}, storeEnhancers);

export default store;