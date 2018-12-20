import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import Title from './Title'
import MainView from './MainView'
import Loading from '../Loading'
import agent from '../../agent'
import ReviewList from './ReviewList'

const mapStateToProps = state => ({
    userId: state.user.id,
    article: state.article,
    inProgress: state.common.inProgress
})

const mapDispatchToProps = dispatch => ({
    onLoad: (articleId) =>
        dispatch({type: 'ARTICLE_PAGE_LOADED', payload: agent.Articles.get(articleId)}),
    onUnload: () =>
        dispatch({type: 'ARTICLE_PAGE_UNLOAD'})
})

class Article extends React.Component {
    
    componentWillMount() {
        this.props.onLoad(this.props.match.params.articleId)
    }

    /*componentWillUnmount() {
        this.props.onUnload()
    }*/

    
    render () {
        const { article, userId } = this.props
        return (
            <React.Fragment>
                <Banner article={article}/>
                {
                    article.id &&
                    <div>
                    <Title userId={userId} article={article}/>
                    <MainView article={article} />
                    <ReviewList editor={article.editor}/>
                    </div>
                }
                {
                    !article.id && <Loading />
                }
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);