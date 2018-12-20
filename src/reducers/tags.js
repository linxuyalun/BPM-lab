export default (state={}, action) => {
    switch(action.type){
        case 'TAGS_LOADED':
            return {
                tags: action.payload.tags,
            }
        case 'HOME_PAGE_UNLOAD':
            return {}
        default:
            return state;
    }
}