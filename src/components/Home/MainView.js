import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ArticleList from '../ArticleList';

const mapStateToProps = state => ({
  articles: state.common.articles
});

const styles = theme => ({
  AppBar: {
    backgroundColor: theme.palette.primary.light
  }
})

class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      tabValue: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, value) => {
    this.setState({
      tabValue: value
    })
  }

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state ;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Tabs
            value={tabValue}
            onChange={this.handleChange}
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
            centered
            fullWidth 
            className={classes.AppBar}
          >
            <Tab label="Gloabal" />
            <Tab label="Favorite" />
            <Tab label="Tag" />
          </Tabs>
        </AppBar>
        {tabValue === 0 && <ArticleList articles={this.props.articles}/>}
        {tabValue === 1 && <div>Todo</div>}
        {tabValue === 2 && <div>Todo</div>}
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(connect(mapStateToProps, () => ({}))(MainView));