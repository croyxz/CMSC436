var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(request, response) {
    response.sendfile('public/views/index.html');
});

http.createServer(app).listen(4730);