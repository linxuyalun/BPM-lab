import Header from './Header';
import Home from './Home';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header appName={this.props.appName} />
        <Home />
      </React.Fragment>
      
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);