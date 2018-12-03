import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'


const styles = {
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  }
};

function Header(props) {

    const { classes, appName } = props;
    
    return (
      <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            {appName.toLowerCase()}
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sign In</Button>
            <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default withStyles(styles)(Header);