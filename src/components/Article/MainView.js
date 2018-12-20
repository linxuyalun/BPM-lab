import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    main:{
        marginTop: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 4,
        width: "75%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        borderLeftColor: theme.palette.primary.dark,
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: theme.palette.primary.dark,
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