import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { Grid } from '@material-ui/core'


const mapStateToProps = state => ({
  appName: state.common.appName
});

class Home extends React.Component {
  render() {
    const { appName } = this.props
    return (
      <React.Fragment>
        <Banner appName={appName} />
        <Grid>
            <MainView />
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Home);