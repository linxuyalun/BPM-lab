import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { Grid } from '@material-ui/core'
import agent from '../../agent'


const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.articles.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({type: 'HOME_PAGE_LOADED', payload: agent.Articles.all()}),
  onUnload: () =>
    dispatch({type:'HOME_PAGE_UNLOAD'})
})

class Home extends React.Component {

  componentWillMount() {
    this.props.onLoad()
  }

  componentWillUnmount() {
    this.props.onUnload()
  }
  
    
  render() {
    const { appName, articles } = this.props
    return (
      <React.Fragment>
        <Banner appName={appName} />
        <Grid>
            <MainView articles={articles} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);