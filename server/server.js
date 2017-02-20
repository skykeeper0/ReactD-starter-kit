const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Exports = module.exports;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', express.static(__dirname + './../client/public'));

app.post('/login', (req, res) => {
    res.json(req.body);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/public/index.html'))
})


const server = app.listen(3000, () => {
    console.log('Server listen on port 3000')
});

const closeSever = function(){
    server.close();
}

module.exports = {closeSever};