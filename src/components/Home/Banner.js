import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  Grid: {
    padding: 40,
    textAlign: 'center',
    background: 'Azure'
  },
};

const Banner = ({ appName, classes }) => {
  return (
    <Grid className={classes.Grid}>
      <h1 className="logo-font" color="White">
        {appName.toLowerCase()}
      </h1>
      <Typography variant="headline">A place to share your adventure.</Typography>
    </Grid>
  );
};

export default withStyles(styles)(Banner);