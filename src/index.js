import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { MuiThemeProvider } from '@material-ui/core/styles'
import store from './store'
import theme from './theme'
import App from './App'
import Login from './components/Login'


ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider> 
), document.getElementById('root'));