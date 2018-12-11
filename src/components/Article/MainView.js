import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    main:{
        marginTop: theme.spacing.unit * 2,
        padding: theme.spacing.unit *2,
        width: "75%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        borderLeftColor: 'grey'
    }
})

const MainView =  ({article, classes}) => {
    const ReactMarkdown = require('react-markdown')
    return (
        <div className={classes.main}>
            <ReactMarkdown source={article.body} />
        </div>
    );
}

export default withStyles(styles)(MainView);