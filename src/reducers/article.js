export default (state={}, action) => {
    switch(action.type){
        case 'ARTICLE_PAGE_LOADED':
            return {
                ...action.payload.articles[0]
            }
        case 'ARTICLE_UPDATED':
        case 'HOME_PAGE_LOADED':
        case 'DELETE_ARTICLE':
            return {}
        default:
            return state;
    }
}