import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const styles = theme => ({
    main: {
        padding: theme.spacing.unit * 2,
        width: "75%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        marginTop: theme.spacing.unit * 3,

    },
    description: {
        marginTop: theme.spacing.unit * 1,
        color: theme.palette.secondary.light
    },
    button:{
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit * 2,
        color: '#880e4f',
        sizeSmall: "5px"
    }
})

const Title = ({ article, classes }) => {
  return (
      <div className={classes.main}>
        <Typography variant="h4"  className={classes.title}>
            {article.title}
        </Typography>
        <Typography variant="h6"  className={classes.description}>
            {article.description}
        </Typography>
        <div>
        {
            /*Todo: 被迫写死= =
            <Typography variant="caption">by</Typography>
            <Typography variant="subheading" color="secondary">{article.author.username}</Typography>
            */
        }
            <Typography variant="caption">by</Typography>
            <Typography variant="subheading" color="secondary">oops!</Typography>
            <Typography variant="caption">Posted on</Typography>
            <Typography variant="subheading" color="secondary">{article.createat}</Typography>
            <Link to='/update'>
            <Button color="secondary" mini size="small" className={classes.button} >
                <EditIcon fontSize="small"/>
                <Typography variant="caption"> Edit</Typography>
            </Button>
            </Link>
            <Button color="secondary" mini size="small" className={classes.button}>
                <DeleteIcon fontSize="small"/>
                <Typography variant="caption"> Delete</Typography>
            </Button>
        </div>
      </div>
  );
};

export default withStyles(styles)(Title);