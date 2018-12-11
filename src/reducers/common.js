const defaultState = {
    appName: 'Hermes',
    redirectTo: null,
    inProgress: false
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
        case 'SETTINGS_SAVED':
        case 'ARTICLE_PUBLISHED':
            return {
                ...state,
                inProgress: false,
                redirectTo: '/'
            }
        case 'ASYNC_START':
            return {
                ...state,
                inProgress: true
            };
        case 'REDIRECT':
            return {
                ...state,
                redirectTo: null
            };
        case 'LOGOUT':       
            return {
                ...state,
                redirectTo: '/'
            };
        case 'APP_LOADED':
        case 'PROFILE_LOADED':
        case 'PROFILE_UNLOADED':
            return {
                ...state,
                inProgress: false
            };
        default:
            return state;
        }
}