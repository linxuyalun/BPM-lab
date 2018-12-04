import ArticleList from '../ArticleList'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = {
  root: {
    padding: 10,
  },
};

const mapStateToProps = state => ({
  articles: state.home.articles
});

class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      tabValue: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    return (
      <Grid className={this.props.classes.root}>
        <Tabs
          value={this.state.tabValue}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Global Feed" />
          <Tab label="Todo" />
        </Tabs>
        { this.state.tabValue === 0 && <ArticleList articles={this.props.articles} /> }
        { this.state.tabValue === 1 && <div>Todo</div> }
      </Grid>
    );
  }
};


export default connect(mapStateToProps, () => ({}))(withStyles(styles)(MainView));