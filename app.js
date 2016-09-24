// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express'),
    requestPromise = require('request-promise'),
    bodyParser = require('body-parser'),
    configs = require('dotenv').config(), // loads process.env from .env file
    port = process.env.port || 3000,
    app = express(),
	emails = require('./library/emails');

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/home', function(request, response) {
    response.json('fahey');
});

app.get('/sendEmail', function(req, res) {
    emails.sendWelcomeMessageToEmail('fahey252@gmail.com'); // testing purposese only

    res.send('Email endpoint hit.');
});

var server = app.listen(port, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('App running at //%s:%s', host, port);
});
