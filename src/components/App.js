import Header from './Header'
import Home from './Home'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

const mapStateToProps = state => ({
  appName: state.common.appName
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header appName={this.props.appName} />
        <Route path="/" exact component={Home} />
      </React.Fragment>
      
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);