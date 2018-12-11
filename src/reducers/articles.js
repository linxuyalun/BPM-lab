const defaultState = {
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
      	        "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2588767485,2358347029&fm=26&gp=0.jpg",
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
      	        "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2588767485,2358347029&fm=26&gp=0.jpg",
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
      	        "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2588767485,2358347029&fm=26&gp=0.jpg",
      	        "following": false
            }
        }
    ],
}

export default (state=defaultState, action) => {
    return state;
}