// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	port = process.env.port || 3000,
	app = express(),
	swaggerize = require('swaggerize-express'),
	swaggerUi = require('swaggerize-ui');

require('dotenv').config(), // loads process.env from .env file

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(require('./library/sendgrid/routes'));
app.use(require('./library/mongodb/routes'));

// swagger
app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    handlers: path.resolve('./handlers'),
    docspath: '/swagger'
}));
app.use('/docs', swaggerUi({
    docs: '/swagger'
}));

var server = app.listen(port, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('App running at //%s:%s', host, port);
});
