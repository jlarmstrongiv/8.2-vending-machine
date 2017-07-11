const chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('sanity test', () => {
  // REF 8.2-joels-v2-advanced-testing
  it('should run test', () => {
    expect(1).to.not.equal(2);
  });

  it("can access vendor api endpoint and get success back", (done) => {
    request(app)
      .get("/api/vendor/sanity")
      .expect(200, done);
  });

  it("can access customer api endpoint and get success back", (done) => {
    request(app)
      .get("/api/customer/sanity")
      .expect(200, done);
  });

  // it("can access api endpoint and get success back", (done) => {
  //   request(app)
  //     .get("/api/customer/sanity")
  //     .expect(200, /*{hello: "joel"}, */done); // {hello: "joel"} is the body of the res.json
  // });

});
