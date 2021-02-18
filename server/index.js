const express = require('express');
const path = require('path');
require('./db/mongoose');
const User = require('./model/user');
const Article = require('./model/article');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/getArticles', (req, res) => {
  Article.find({}).then((articles) => {
      console.log('articles:' + JSON.stringify(articles));
      res.send(articles);
  }).catch((e) => {
      console.log('error' + e);
  })
});

app.get('/getUser', async (req, res) => {
  User.find({}).then((users) => {
    console.log('users:' + JSON.stringify(users, null, 2));
      res.send(users);
  }).catch((e) => {
      console.log('error: ' + e);
  })
});

// if (process.env.NODE_ENV === "production") {
  
  app.get("*", function(req, res) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });
// }

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build'));
// });

app.listen(port, () => {
    console.log('server is up on port ' + port);
});
