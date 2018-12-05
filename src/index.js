import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'

import { BrowserRouter as Router, Route } from "react-router-dom"



ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/settings' component={Settings} />
      </div>
    </Router>
  </Provider> 
), document.getElementById('root'));