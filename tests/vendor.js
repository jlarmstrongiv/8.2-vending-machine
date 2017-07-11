const chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const VendorMoney = require('../models/vendor-money-collection');

describe('vendor money test', () => {

  beforeEach(done => {
    const vendorMoney = new VendorMoney({vendorMoney: 1000})
      .save().then(newVendorMoney => {
        expect(newVendorMoney.vendorMoney).to.equal(100);
      });
      done();
  });

});

  // it("can access api endpoint and get success back", (done) => {
  //   request(app)
  //     .get("/api/customer/sanity")
  //     .expect(200, /*{hello: "joel"}, */done); // {hello: "joel"} is the body of the res.json
  // });
