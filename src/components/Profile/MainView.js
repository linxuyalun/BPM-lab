import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ArticleList from '../ArticleList';

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
    const { classes, profile } = this.props;
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
            <Tab label={profile.username + "'s artciles"} />
            <Tab label={profile.username + "'s favorites"} />
          </Tabs>
        </AppBar>
        {tabValue === 0 && <ArticleList articles={this.props.articles}/>}
        {tabValue === 1 && <div>Todo</div>}
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(MainView);