var express = require('express'),
	router = express.Router(),
	emails = require('../library/emails');

router.get('/', function(req, res) {
    emails.sendWelcomeMessageToEmail('fahey252@gmail.com'); // testing purposese only

    res.send('Email endpoint.');
});

router.post('/', function(req, res) {
    var emailBody = req.body.plain || '',		// using plain text version of email
    	email = emails.getEmailAddressInText(emailBody) || 'fahey252@gmail.com';		// TODO: handle case when no email found

    // console.log('Incoming email body: ', req.body.plain);

    sendWelcomeMessageToEmail(email);

    res.send(req.body);
});

module.exports = router;
