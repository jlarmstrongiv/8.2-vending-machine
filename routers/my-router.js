const express = require('express')
  , routerHelpers = require('./router-helpers')
  , myController = require('../controllers/my-controller');
// REF Projects 6-Gabber-Twitter

module.exports = function (app) {
  const myControllerRouter = express.Router();

  // myControllerRouter.get('/pageOne', myController.pageOne);
  // myControllerRouter.get('/pageTwo', myController.pageTwo);
  // myControllerRouter.get('/pageThree', myController.pageThree);

  // myControllerRouter.get('/:page', routerHelpers.debugMiddleware, myController.detail);

  app.use('/', myControllerRouter);
  // app.use('/pages', myControllerRouter); // set url prefix
};
