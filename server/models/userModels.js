const db = require('../dbConnection')

const Schema = db.Schema

const userSchema = new Schema({
    username: String,
    password: String
})

const User = db.model('users', userSchema)

module.exports = User;