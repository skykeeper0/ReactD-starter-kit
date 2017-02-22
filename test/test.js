

process.env.NODE_ENV = 'test';

const User = require('./../server/models/models')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server/server');
const should = chai.should();

chai.use(chaiHttp)


describe('checking data base and connection', () => { 
    //before Each to delete to make sure the testDb is empty
    before((done) => {
        User
            .remove({},(err) => {
                done();
            });
    });


    //checking the database for anything
    describe('Check database after clear it out', () => {
        it('it should return an empty collection', (done) => {
            User
                .find()
                .then( (user) => {
                    user.length.should.eql(0);
                    done();
                })
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
        before((done) => {
            User
                .create({
                username: "Deep1",
                password: "1232"
            }).then ( (err) => {
                User.create({
                    username: 'dep',
                    password: '123'
                }).then( (err2) => {
                    done();
                })
            })
        })

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

        it('new user shouldnt overlap old user', (done) => {
            User.find()
                .then( (result) => {
                    result.should.be.a('array');
                    result.length.should.eql(3);
                    done();
            })
        })
    })

    describe('POST /login' , () => {
        before( (done) => {
            User
                .create({
                username: "Deep1",
                password: "1232"
            }).then ( (err) => {
                User.create({
                    username: 'dep',
                    password: '123'
                }).then( (err2) => {
                    User.create({
                        username: 'Deep2',
                        password: '1234'
                    }).then( (err3) => {
                        done();
                    })
                })
            })
        })

        it('login user should be able to login with right name and password', (done) => {
            chai.request(server)
                .post('/login')
                .send({
                    username: 'dep',
                    password: '123'
                })
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username').eql('dep');
                    res.body.should.have.property('password').eql("123");
                done();
                })
        })

        it('login with the wrong password cant access', (done) => {
            chai.request(server)
                .post('/login')
                .send({
                    username: 'dep',
                    password: '1234'
                })
                .end( (err, res) => {
                    res.should.have.status(401);
                    res.type.should.be.a('string');
                    res.text.should.be.equal('Wrong password');
                done();
                })
        })
    })

    describe('POST /secret' , () => {

        it('should be able to display all the user', (done) => {
            chai.request(server)
                .post('/secret')
                .send({
                    username: 'dep',
                    password: '123'
                })
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(6);
                done();
                })
        })
        
    })
})