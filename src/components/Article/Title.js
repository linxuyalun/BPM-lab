import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Chip from '@material-ui/core/Chip'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import agent from '../../agent'

const styles = theme => ({
    main: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        padding: theme.spacing.unit,
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
    },
    chipbar: {
        width: "100%",
        paddingBottom: theme.spacing.unit,
        paddingTop: theme.spacing.unit
    },
    chip: {
        marginRight: theme.spacing.unit * 2,
    },
}) 

class Title extends React.Component {

    constructor(props) {  
        super(props)
        this.clickDelete = ev => {
          ev.preventDefault();
          agent.Articles.del(props.article.id);
          this.props.history.push("/")
        };
      }

    render(){
        const { article, classes } = this.props;
        return (
            <div className={classes.main}>
              <Typography variant="h4"  className={classes.title}>
                  {article.title}
              </Typography>
              <Typography variant="h6"  className={classes.description}>
                  {article.description}
              </Typography>
              <div>
                <div className={classes.chipbar}>
                    {
                        article.taglist &&
                        article.taglist.map(tag => {
                            return (
                            <Chip
                                key={tag}
                                label={tag}
                                className={classes.chip}
                                color="secondary"
                                variant="outlined"
                            />
                            ) 
                        })
                    }
                </div>
                <Typography variant="caption">by</Typography>
                <Link to={`/@${article.author.username}`}>
                <Typography variant="subheading" color="secondary">{article.author.username}</Typography>
                </Link>
                <Typography variant="caption">Posted on</Typography>
                <Typography variant="subheading" color="secondary">{article.createat}</Typography>
                {
                    (this.props.userId === article.author.id) &&
                    <div>
                    <Link to='/update'>
                    <Button color="secondary" mini size="small" className={classes.button} >
                        <EditIcon fontSize="small"/>
                        <Typography variant="caption"> Edit</Typography>
                    </Button>
                    </Link>
                    <Button color="secondary" mini size="small" onClick={this.clickDelete}  className={classes.button}>
                        <DeleteIcon fontSize="small"/>
                        <Typography variant="caption"> Delete</Typography>
                    </Button>
                    </div>
                }
              </div>
            </div>
        );
    }
};



export default withStyles(styles)(withRouter(Title));