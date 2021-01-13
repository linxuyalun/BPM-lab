import React from 'react'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import ArticleList from './ArticleList'
import TagsList from './TagsList'

const styles = theme => ({
  panel: {
    backgroundColor: theme.palette.primary.light
  },
  summary: {
    paddingLeft: theme.spacing.unit * 1
  }
})

class MainView extends React.Component {
  render () {
    const { articles, classes, tags } = this.props
    return (
      <>
        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='overline' color='secondary' className={classes.summary}>Choose a tag</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TagsList tags={tags} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ArticleList articles={articles} />
      </>
    )
  }
};

export default withStyles(styles)(MainView)
