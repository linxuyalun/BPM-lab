import React from 'react'
import { AppBar, Tabs, Tab, Button, Typography } from '@material-ui/core'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import ArticleList from './ArticleList'
import TagsList from './TagsList'

const styles = theme => ({
  panel: {
    backgroundColor: theme.palette.primary.light,
  },
  summary: {
    paddingLeft: theme.spacing.unit * 1,
  }
})

class MainView extends React.Component {

  render() {
    const { articles, classes } = this.props;
    return (
      <React.Fragment>
        <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant="overline" color="secondary" className={classes.summary}>Choose a tag</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <TagsList/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ArticleList articles={articles}/>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(MainView);