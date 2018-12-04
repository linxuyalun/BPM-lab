import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


const styles = {
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
  Link: {
    color: "White"
  }
};

function Header(props) {

    const { classes, appName } = props;
    
    return (
      <div className={classes.root}>
      <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>
              <Link to="/" className={classes.Link}>
                {appName.toLowerCase()}
              </Link>
            </Typography>
            <Button color="inherit"><Link to="/" className={classes.Link}>Home</Link></Button>
            <Button color="inherit">Sign In</Button>
            <Button color="inherit"><Link to="login" className={classes.Link}>Sign Up</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default withStyles(styles)(Header);