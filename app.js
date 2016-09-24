// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express'),
    requestPromise = require('request-promise'),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000,
    app = express();

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/home', function(request, response) {
    response.json('fahey');
});


var server = app.listen(port, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('App running at //%s:%s', host, port);
});
