import React from 'react';
import { Avatar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'



const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


const ArticlePreview = props => {
  
  const article = props.article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        
        <Avatar alt={article.author.username} src={article.author.image} />

        <div className="info">
          <Typography component="p">
            {article.author.username}
          </Typography>
          <Typography component="p" color="textSecondary">
            {new Date(article.createdAt).toDateString()}
          </Typography>
        </div>

        <div className="pull-xs-right">
          <Button >
            <FavoriteIcon color="secondary" style={{ fontSize: 20 }} />{article.favoritesCount}
          </Button>
        </div>

      </div>

      <Link to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {
            article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
      </Link>
    </div>
  );
}

export default withStyles(styles)(ArticlePreview);