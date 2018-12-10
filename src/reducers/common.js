const defaultState = {
    appName: 'Hermes',
    articles: [
        {
            "articleId": 123456789,
            "title": "How to train your example",
            "description": "Ever wonder how?",
            "body": "It takes a example",
            "tagList": ["example", "training"],
            "createdAt": "2018-12-03T03:22:56.637Z",
            "updatedAt": "2018-12-03T03:48:35.824Z",
            "passState": true,
            "editor": {
                "editor1Id": "pass",
                "editor2Id": "pass"
            },
            "favorited": false,
            "favoritesCount": 0,
            "author": {
                "username": "bpm",
      	        "bio": "Hello bpm",
      	        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544370113300&di=7486b09c5d9e3e964a95520ac11a6647&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0130d15acf6392a80121386742b344.gif%402o.png",
      	        "following": false
            }
        },
        {
            "articleId": 123456790,
            "title": "How to train your bpm",
            "description": "What is it?",
            "body": "It takes a example",
            "tagList": ["example", "training"],
            "createdAt": "2018-12-04T03:22:56.637Z",
            "updatedAt": "2018-12-04T03:48:35.824Z",
            "passState": true,
            "editor": {
                "editor1Id": "pass",
                "editor2Id": "pass"
            },
            "favorited": true,
            "favoritesCount": 10,
            "author": {
                "username": "Dan",
      	        "bio": "Hello bpm",
      	        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544370113300&di=7486b09c5d9e3e964a95520ac11a6647&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0130d15acf6392a80121386742b344.gif%402o.png",
      	        "following": false
            }
        },
        {
            "articleId": 123456795,
            "title": "Go to London!",
            "description": "London is so beautiful",
            "body": "It takes a example",
            "tagList": ["example", "training"],
            "createdAt": "2018-12-05T03:22:56.637Z",
            "updatedAt": "2018-12-05T03:48:35.824Z",
            "passState": true,
            "editor": {
                "editor1Id": "pass",
                "editor2Id": "pass"
            },
            "favorited": true,
            "favoritesCount": 6,
            "author": {
                "username": "Randy",
      	        "bio": "Hello bpm",
      	        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544370113300&di=7486b09c5d9e3e964a95520ac11a6647&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0130d15acf6392a80121386742b344.gif%402o.png",
      	        "following": false
            }
        }
    ],
    redirectTo: null,
    inProgress: false
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
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
            }
        case 'LOGOUT':
            return {
                ...state,
                redirectTo: '/'
            }
        default:
            return state;
        }
}