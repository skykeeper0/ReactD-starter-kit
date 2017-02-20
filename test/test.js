

// testing server operation with mocha and super test

var request = require("request");
var base_url = "http://localhost:3000/t";
var assert = require('assert');
var helloWorld = require('./../server/server.js')

describe('Hello World Test', function() {
    describe("GET /", function() {
        it("return status code 200", function(done) {
            request.get(base_url, function(err, res, body) {
                assert.equal(200, res.statusCode);
                helloWorld.closeSever();
                
                done();
            })
        })
    })
})