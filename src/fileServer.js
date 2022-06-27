const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'img')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001);