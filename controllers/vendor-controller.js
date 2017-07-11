const VendorMoney = require('../models/vendor-money-collection');
// REF Projects 6-Gabber-Twitter

// prepend path variable for view folder hierachy
// let staticPath = 'users/';
// let path = staticPath + 'pageOne';
// res.send(path);
module.exports = {
  sanity: (req, res) => {
    res.sendStatus(200);
  }
  // pageOne: (req, res) => {
    // req.app.locals.layout = 'layout'; //try defining globally like staticPath
  //   res.send('pageOne');
  // },
  // pageTwo: (req, res) => {
  //   res.send('pageTwo');
  // },
  // pageThree: (req, res) => {
  //   res.send('pageThree');
  // },
  // detail: (req, res) => {
  //   res.send(req.params.page);
  // }
};

// app.get('/', function (req, res) {
//   return;
// });

// REF https://expressjs.com/en/guide/routing.html
// /variable/:variableId // post or get URL
// console.log(req.params.variableId); // /variable/myVariable
// console.log(req.query.queryId); // /variable/myVariable?queryId=myQuery
// console.log(req.session.key); // cookie value
// return res.sendStatus(200);
// return res.render('index', context);
// return res.redirect('index');
