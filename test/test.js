

// testing server operation with mocha and super test
// var User = require('./../server/models/models')
// var request = require("request");
// var base_url = "http://localhost:3000/";
// var assert = require('assert');
// var helloWorld = require('./../server/server.js')

// describe('Testing server and controller', function() {
//     describe("GET /", function() {
//         it("return status code 200", function(done) {
//             request.get(base_url, function(err, res, body) {
//                 assert.equal(200, res.statusCode);
//                 helloWorld.closeSever();
                
//                 done();
//             })
//         })
//     })
// })


// const should = require('chai').should(),
// expect = require('chai').expect,
// supertest = require('supertest'),
// api = supertest('http://localhost:3000')

// describe('User', function() {
//     it('should return a 200 response', function(done) {
//         api.get('/')
//         .set('Accept', 'application/json')
//         .expect(200,done);
//     });
// })

process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const User = require('./../server/models/models')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server/server');
const should = chai.should();

chai.use(chaiHttp);

//before Each to delete to make sure the testDb is empty
describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });
});

//Test the /GET route
describe('/GET homepage', () => {
    it('it should return an 200 status html page', (done) => {
        chai.request(server)
            .get('/')
            .end( (err, res) => {
                res.should.have.status(200);
            done();
            })
    })
})