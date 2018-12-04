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
  }
};

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <React.Fragment>
        <Button color="inherit"><Link to="/" style={{color: "White"}}>Home</Link></Button>
              <Button color="inherit">Sign Up</Button>
              <Button color="inherit"><Link to="login" style={{color: "White"}}>Sign In</Link></Button>
      </React.Fragment>
    );
  }

  return null;
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <React.Fragment>
        <Button color="inherit"><Link to="/" style={{color: "White"}}>Home</Link></Button>
        <Button color="inherit"><Link to="editor" style={{color: "White"}}>New Post</Link></Button>
        <Button color="inherit"><Link to="settings" style={{color: "White"}}>{props.currentUser.username}</Link></Button>
      </React.Fragment>
    );
  }

  return null;
}

function Header(props) {

    const { classes, appName } = props;
    
    return (
      <div className={classes.root}>
      <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>
              <Link to="/" style={{color: "White"}}>
                {appName.toLowerCase()}
              </Link>
            </Typography>
            <LoggedInView currentUser={props.currentUser} />
            <LoggedOutView currentUser={props.currentUser} />
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default withStyles(styles)(Header);