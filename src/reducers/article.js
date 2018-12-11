export default (state={}, action) => {
    switch(action.type){
        case 'ARTICLE_PAGE_LOADED':
            return {
                ...action.payload.articles[0]
            }
        case 'ARTICLE_UPDATED':
            return {}
        default:
            return state;
    }
}

const defaultState = {
    inProgress: false,
    redirectTo: null,
    article:{
        "updateat": "Tue Dec 11 06:58:15 2018",
        "createat": "Tue Dec 11 06:58:15 2018",
        "description": "Ever wonder how?",
        "articleid": 1544511496036,
        "body": "# It's a nice day.\n I took the first picture of new Shanghai.\n # ![pic](http://img2.imgtn.bdimg.com/it/u=261788395,3963575695&fm=200&gp=0.jpg)\n **Beautiful, isn't it?** \n ### I also went to lots of other places.\n ## What a nice day.",
        "author": {
            "username": "Alan",
      	    "bio": "Best adventurer in the world",
      	    "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2588767485,2358347029&fm=26&gp=0.jpg",
        },
        "title": "How to train your example"
    },
    username:"alan"
}