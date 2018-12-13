import React from 'react'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    chip: {
      marginRight: theme.spacing.unit * 2,
    },
});

const tags = ['Shanghai','Beijing','City','Dan']

const TagsList =  ({classes}) => {
    return (
        tags.map(tag => {
            return (
            <Chip
                icon={<FaceIcon />}
                label={tag}
                className={classes.chip}
                clickable
                color="secondary"
                variant="outlined"
            />
            ) 
        })
    )
}

export default withStyles(styles)(TagsList);

      