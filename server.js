const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

let port = process.env.port
if (port == null || port == "") {
    port = 3000;
};

app.listen(port, function () {
    console.log('Server started succesfully')
});
