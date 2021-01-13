import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Review from './Review'

const reviewList = [
  {
    articleId: 123456789,
    editorId: 123456,
    decision: 'accept',
    remark: 'this article is too low,kick it out',
    trust: 80
  },
  {
    articleId: 123456789,
    editorId: 123456,
    decision: 'accept',
    remark: 'Good good good',
    trust: 60
  },
  {
    articleId: 123456789,
    editorId: 123456,
    decision: 'refuse',
    remark: "It's just so so, I don't like it.",
    trust: 60
  }
]

const styles = theme => ({
  main: {
    width: '75%',
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

class ReviewList extends React.Component {
  render () {
    const { classes, editor } = this.props
    // supervisor doesn't assign editor
    if (!editor.editor1) {
      return null
    }
    return (
      <div>
        <br /><br /><br />
        <div className={classes.main}>
          <Typography variant='h4' color='primary'>Comments</Typography>
          <Review editor={editor.supervisor} />
          <Review editor={editor.editor1} />
          <Review editor={editor.editor2} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ReviewList)
