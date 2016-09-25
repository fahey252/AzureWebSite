// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express'),
	requestPromise = require('request-promise'),
	bodyParser = require('body-parser'),
	configs = require('dotenv').config(), // loads process.env from .env file
	port = process.env.port || 3000,
	app = express(),
	emails = require('./library/emails'),
	database = require('./library/documentDBMongoDB');

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// emails: SendGrid
app.post('/email/send', function (req, res) {
	var emailBody = req.body.plain || '', // using plain text version of email
		email = emails.getEmailAddressInText(emailBody) || 'fahey252@gmail.com'; // TODO: handle case when no email found

	emails.sendWelcomeMessageToEmail('fahey252@gmail.com'); // testing purposese only, fire and forget

	res.send('Email endpoint hit.');
});

// database: MongoDB
app.get('/items', function (req, res) {
	database.getItems().then(function (items) {
		res.send(items);
	});
});

app.post('/items/add', function (req, res) {
	database.addItem(req.body).then(function (item) {
		res.send(item);
	});
});

app.delete('/items/delete/:id', function (req, res) {
	var id = req.params.id;

	database.deleteItemById(id).then(function (data) {
		res.send(data);
	});
});

var server = app.listen(port, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('App running at //%s:%s', host, port);
});
