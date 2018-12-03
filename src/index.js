import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import App from './components/App'
import Login from './components/Login'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"



ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider> 
), document.getElementById('root'));