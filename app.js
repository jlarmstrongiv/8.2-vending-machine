// Packages
const express = require('express')
  , path = require('path')
  // , fs = require('fs') // access File System
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// My Routers and Models
const vendorRouter = require('./routers/vendor-router')
  , customerRouter = require('./routers/customer-router')
  , VendorMoney = require('./models/vendor-money-collection');

const nodeEnv = process.env.NODE_ENV || 'development'
  , config = require('./mongo-config.json')[nodeEnv];

mongoose.connect(config.mongoURL);

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine('mustache', mustacheExpress());
// app.set('views', './views');
// app.set('view engine', 'mustache');
// app.set('layout', 'layout');

app.use(function(req, res, next){
  next();
});

vendorRouter(app);
customerRouter(app);

app.listen(3000, function () {
  console.log('Express is listening for connections');
});

// mocha and supertest
module.exports = app;
