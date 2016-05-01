var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/incomingMail', function (req, res) {
  res.send('Incoming Mail');
});

app.post('/incomingMail', function (req, res) {
  console.log('Incoming Mail', req.body);
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});