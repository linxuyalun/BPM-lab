import React from 'react'
import ArticlePreview from './ArticlePreview'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  root:{
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit *2
  }
})

const ArticleList = ({ articles, classes }) => {
  if (!articles) {
    return (
      <Grid container className={classes.root}>Loading...</Grid>
    );
  }

  if (articles.length === 0) {
    return (
      <Grid container className={classes.root}>
        No articles are here... yet.
      </Grid>
    );
  }

  return (
    <Grid container className={classes.root}>
      {
        articles.map(article => {
          if (article.passState) {
            return (
              <ArticlePreview key={article.articleId} article={article}/>
          );
          } else {
            return null;
          }
        })
      }
    </Grid>
  );
};

export default withStyles(styles)(ArticleList);