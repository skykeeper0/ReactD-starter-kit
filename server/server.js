const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers')
const port = 3000;
const config = require('config');

// initialize express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', express.static(__dirname + './../client/public'));


app.post('/login', userControllers.findUser)

app.post('/signup', userControllers.createUser)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/public/index.html'))
})


const server = app.listen(port, () => {
    console.log('Server listen on port',port)
    console.log(config.DBHost)
});

module.exports = server;