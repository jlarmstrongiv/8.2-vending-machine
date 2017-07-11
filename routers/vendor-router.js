const express = require('express')
  , routerHelpers = require('./router-helpers')
  , apiController = require('../controllers/vendor-controller');
// REF Projects 6-Gabber-Twitter

module.exports = function (app) {
  const apiControllerRouter = express.Router();

  apiControllerRouter.get('/sanity', apiController.sanity);

  // myControllerRouter.get('/pageOne', myController.pageOne);
  // myControllerRouter.get('/pageTwo', myController.pageTwo);
  // myControllerRouter.get('/pageThree', myController.pageThree);

  // myControllerRouter.get('/:page', routerHelpers.debugMiddleware, myController.detail);

  app.use('/api/vendor', apiControllerRouter);
  // app.use('/pages', myControllerRouter); // set url prefix
};
