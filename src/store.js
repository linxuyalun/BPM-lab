import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { promiseMiddleware } from './middleware'
import common from './reducers/common'
import user from './reducers/user'
import profile from './reducers/profile'
import articles from './reducers/articles'
import article from './reducers/article'

  
const reducer = combineReducers({
  common,
  user,
  profile,
  article,
  articles
});
  
const middleware = applyMiddleware(promiseMiddleware);
  
const storeEnhancers = compose(
    middleware,
    (window && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);
  
const store = createStore(reducer, {}, storeEnhancers);

export default store;