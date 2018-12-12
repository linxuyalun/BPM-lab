# Hermes
### Technology stack

* react@16.6.3 
* redux@4.0.1
* react-redux@5.1.1
* react-router-dom@4.3.1 
* react-markdown@4.0.4
* superagent@4.0.0
* material-ui@3.6.1

### Project introduce

The Hermes codebase uses [create-react-app](https://github.com/facebook/create-react-app). Simply cloning the repo and running `npm install` will get everything set up, and running `npm start` will let you run the application live.

**Notice**

1. The back end's logic is naïve. It has no ability to cope with cookie or jwt. Do not use the same design idea of HTTP request in *Hermes* in your development. Unfortunately, the solution now is actually hacking 
2. [Back end API](https://github.com/Ddd1101/BPM_2018Fall/blob/master/hw3/README.md).
3. The back end doesn't support CORS, so if you want to try *Hermes* on loacalhost, make sure you have disabled web security. See [here](https://github.com/zhongxia245/blog/issues/28).

### Feature list

- [x] login, log out, sign up
- [x] check/update profile
- [x] check articles
- [ ] check an article state
- [x] post a new article
- [x] update/delete a article
- [ ] filter articles by tag



