import Banner from './Banner'
import MainView from './MainView'
import React from 'react'
import { connect } from 'react-redux'
import agent from '../../agent'

import { Grid, Card } from '@material-ui/core'

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps= dispatch => ({
  onLoad: payload =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload })
})

class Home extends React.Component {

  componentWillMount = () => {
    // for now payload is a Promise, so we need a middleware
    this.props.onLoad(agent.Articles.all())
    console.log(agent.Articles.all())
  }
  

  render() {
    return (
      <React.Fragment>

        <Banner appName={this.props.appName} />

        <Grid container>
          <Grid item xs={12} sm={10}>
              <MainView />   
          </Grid>
          <Grid item xs={12} sm={2}>
              <Card>Popular Tags </Card>         
          </Grid>
        </Grid>

      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);