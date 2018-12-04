import Header from './Header'
import Home from './Home'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import agent from '../agent';


const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
})

class App extends React.Component {

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    return (
      <React.Fragment>
        <Header appName={this.props.appName} currentUser={this.props.currentUser}/>
        <Route path="/" exact component={Home} />
      </React.Fragment>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);