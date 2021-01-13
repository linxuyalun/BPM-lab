import React from 'react'
import { connect } from 'react-redux'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import { withStyles } from '@material-ui/core/styles'
import agent from '../../agent'

const styles = theme => ({
  chip: {
    marginRight: theme.spacing.unit * 2
  }
})

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag) =>
    dispatch({ type: 'TAG_CHOSEN', payload: agent.Articles.getByTag(tag) })
})

class TagsList extends React.Component {
  constructor (props) {
    super(props)
    this.clickTag = tag => {
      props.onClickTag(tag)
    }
  }

  render () {
    const { classes, tags } = this.props
    if (tags) {
      return (
        tags.map(tag => {
          return (
            <Chip
              key={tag}
              icon={<FaceIcon />}
              label={tag}
              className={classes.chip}
              clickable
              color='secondary'
              variant='outlined'
              onClick={() => this.clickTag(tag)}
            />
          )
        })
      )
    }
    return null
  }
}

export default connect(() => ({}), mapDispatchToProps)(withStyles(styles)(TagsList))
