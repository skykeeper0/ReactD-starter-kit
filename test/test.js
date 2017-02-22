

process.env.NODE_ENV = 'test';

const User = require('./../server/models/models')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server/server');
const should = chai.should();

chai.use(chaiHttp)


describe('checking data base and connection', () => {
    //before Each to delete to make sure the testDb is empty
    beforeEach((done) => {
        User
            .remove({},(err) => {
                done();
            });
    });


    //checking the database for anything
    describe('checking if the collection is empty', () => {
        it('it should return an empty collection', (done) => {
            User
                .find()
                .then( (user) => {
                    user.length.should.eql(0);
                    done();
                })

            // User.all( (err, user) => {
            //     user.length.should.eql(0);
            //     done();
            // })
        })
    })

    //Test the /GET route
    describe('GET /', () => {
        it('it should return an 200 status html page', (done) => {
            chai.request(server)
                .get('/')
                .end( (err, res) => {
                    res.should.have.status(200);
                done();
            })
        })
    })

    //Test the /POST route
    describe('POST /signup', () => {
        it('it should be able to create User in testDb', (done) => {
            let new_user = {
                username: "Deep",
                password: "123"
            }
            chai.request(server)
                .post('/signup')
                .send(new_user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username').eql('Deep');
                    res.body.should.have.property('password').eql("123");
                done();
                })
        })
    })
})