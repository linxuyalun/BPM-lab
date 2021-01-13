export default (state = {}, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
    case 'TAG_CHOSEN':
      return {
        articles: action.payload.articles.reverse()
      }
    case 'HOME_PAGE_UNLOAD':
      return {}
    default:
      return state
  }
}
