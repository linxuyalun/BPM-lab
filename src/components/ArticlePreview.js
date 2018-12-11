import React from 'react'
import { Toolbar, Grid, Avatar, Typography, Button, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "60%"
    },
    username: {
        marginLeft: theme.spacing.unit * 3,
        flexGrow:1
    },
    title: {
        marginTop: theme.spacing.unit * 1,
        color: theme.palette.primary.dark
    },
    button: {
        marginTop: theme.spacing.unit * 3
    },
    icon : {
        marginRight: theme.spacing.unit
    }
})

export default withStyles(styles)(({article, classes}) => {
    return (
        <Grid item className={classes.root}>
        <Toolbar className={classes.Toolbar} >
            <Avatar alt={article.author.username} src={article.author.image} />
            <Typography variant="h6" className={classes.username}>
                {article.author.username}
            </Typography>
            <Button className={classes.button} >
                {
                    !article.favorited &&
                    <FavoriteBorderIcon color="secondary" fontSize="small" className={classes.icon}/>
                }
                {
                    article.favorited &&
                    <FavoriteIcon color="secondary" fontSize="small" className={classes.icon}/>
                }    
                    {article.favoritesCount}
            </Button>
        </Toolbar>
        <Typography variant="caption" color="secondary">
            {new Date(article.createdAt).toDateString()}
        </Typography>
        <Typography variant="h6" className={classes.title}>
            {article.title}
        </Typography>
        <Typography variant="subheading" color="textSecondary" >
            {article.description}
        </Typography>
        <Typography variant="caption" color="secondary">
            Read more...
        </Typography>
        <hr/>
        </Grid>
    );
})

