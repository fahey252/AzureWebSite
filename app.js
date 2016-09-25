// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express'),
	requestPromise = require('request-promise'),
	bodyParser = require('body-parser'),
	configs = require('dotenv').config(), // loads process.env from .env file
	port = process.env.port || 3000,
	app = express();

app.use(require('./library/sendgrid/routes'));
app.use(require('./library/mongodb/routes'));

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var server = app.listen(port, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('App running at //%s:%s', host, port);
});
