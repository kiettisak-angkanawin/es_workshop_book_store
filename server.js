
var express = require('express');
var path = require('path');
var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.end('Hello World');
});

app.listen(port, function() {
  console.log('The server is running', port);
});
