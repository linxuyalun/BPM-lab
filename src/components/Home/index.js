import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { Grid } from '@material-ui/core'


const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.articles.articles
});

class Home extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.props.history.push(nextProps.redirectTo);
      this.props.onRedirect();
    }
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

export default connect(mapStateToProps, () => ({}))(Home);