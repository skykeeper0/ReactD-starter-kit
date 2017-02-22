// where you set up the connection prep
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const config = require('config')

//online conection to mlab, timeout problem
// const db = mongoose.connect('mongodb://skye:123@ds157499.mlab.com:57499/skyshare', (err) => {
//     if (err) console.log('There an err in db connection');
//     console.log('Connected to mlab mongodb')
// });


// connection to local database 
const db = mongoose.connect(config.DBHost, (err) => {
    if (err) console.log('There an err in db connection');
});

module.exports = db;