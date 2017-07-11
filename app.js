// Packages
const express = require('express')
  , path = require('path')
  // , fs = require('fs') // access File System
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose');

  const nodeEnv = process.env.NODE_ENV || 'development'
    , config = require('./mongo-config.json')[nodeEnv];

// REF https://github.com/tiy-greenville-summer-2017/7.2.1-Mongoose/blob/master/app.js
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mongoosevinyl');

// My Routers and Models
const myRouter = require('./routers/my-router')
  , My = require('./models/my-collection');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
  additionalValidators: 'equals'
}));

// app.engine('mustache', mustacheExpress());
// app.set('views', './views');
// app.set('view engine', 'mustache');
// app.set('layout', 'layout');

app.use(function(req, res, next){
  next();
});

myRouter(app);

app.listen(3000, function () {
  console.log('Express is listening for connections');
});

// mocha and supertest
module.exports = app;
