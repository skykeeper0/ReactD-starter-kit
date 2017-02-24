const User = require('./../models/models')

const userControllers = {
    createUser(req, res, next) {
        User
            .create({
                username: req.body.username,
                password: req.body.password
            }).then( (user) => {
                console.log('user created')
                // res.redirect('http://localhost:3000/secret')
                // res.json(user)
                res.status(200).end();
            }).catch( (err) => {
                console.log('cant create user')
                // res.send('Cant create user')
                res.status(406).end()
            })
    },

    findUser(req, res, next) {

        User
            .findOne({
                username: req.body.username
            }).then( (user) => {
                if (user) {
                    if (user.password === req.body.password) {
                        console.log('got access')
                        // res.redirect('../secret')
                        res.status(200).end();
                        // res.json(user)
                    } else {
                        console.log('wrong password')
                        res.status(401).send('Wrong password')
                    }
                } else {
                    console.log('There are no such users')
                    res.status(404).send('There are no such user')
                }
            }).catch( (err) => {
                res.status(500).send(err)
            })
    },

    getUser(req, res, nect) {
        
        User
            .find({})
            .exec( (err, users) => {
                if (err) res.send(err);
                res.json(users).end();
            })
    }
}

module.exports = userControllers;