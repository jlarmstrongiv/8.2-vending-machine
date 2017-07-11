const chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const My = require('../models/my-collection');

describe('sanity test', () => {
  // REF 8.2-joels-v2-advanced-testing
  it("can access api endpoint and get success back", (done) => {
    request(app)
      .get("/api/sanity")
      .expect(200, /*{hello: "joel"}, */done); // {hello: "joel"} is the body of the res.json
  });

  it('should run test', () => {
    expect(1).to.not.equal(2);
  });

});
