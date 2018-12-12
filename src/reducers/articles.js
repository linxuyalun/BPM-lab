export default (state={}, action) => {
    switch(action.type){
        case 'HOME_PAGE_LOADED':
            return {
                articles: action.payload.articles.reverse(),
            }
        case 'HOME_PAGE_UNLOAD':
            return {}
        default:
            return state;
    }
}