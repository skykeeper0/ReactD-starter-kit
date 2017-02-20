const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + './../client/public'))

app.post('/login', (req, res) => {
    res.json(req.body);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/public/index.html'))
})

app.listen(3000, () => {
    console.log('Server listen on port 3000')
})