import React from 'react'
import { Typography, Toolbar, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  main: {
    margin: theme.spacing.unit * 2

  },
  flex: {
    flexGrow: 1
  },
  avater: {
    width: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5
  },
  name: {
    paddingLeft: theme.spacing.unit * 2
  },
  accept: {
    color: '#4caf50'
  },
  refuse: {
    color: theme.palette.secondary.main
  }
})

export default withStyles(styles)(({ editor, classes }) => (
  <div className={classes.main}>

    <Toolbar>
      <Avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg' className={classes.avater} />
      <div className={classes.flex}>
        {
                editor.supervisorid &&
                  <Typography variant='body1' className={classes.name}>
                    admin
                  </Typography>
            }
        {
                !editor.supervisorid &&
                  <Typography variant='body1' className={classes.name}>
                    editor
                  </Typography>
            }
      </div>
      <div>
        {
                    editor.decision === 'accept' &&
                      <Typography variant='body1' className={classes.accept}>
                        {editor.decision.toUpperCase()}
                      </Typography>
                }
        {
                    editor.decision === 'reject' &&
                      <Typography variant='body1' className={classes.refuse}>
                        {editor.decision.toUpperCase()}
                      </Typography>
                }
        <Typography variant='caption'>TRUST: {editor.trust}</Typography>
      </div>
    </Toolbar>

    <Typography variant='body2'>"{editor.remark}"</Typography>
    <hr />
  </div>
))
