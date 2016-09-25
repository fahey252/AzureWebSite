var express = require('express'),
	router = express.Router(),
	emails = require('./sendgrid');

router.post('/email/send', function (req, res) {
	var emailBody = req.body.plain || '', // using plain text version of email
		email = emails.getEmailAddressInText(emailBody) || 'fahey252@gmail.com'; // TODO: handle case when no email found

	emails.sendWelcomeMessageToEmail('fahey252@gmail.com'); // testing purposese only, fire and forget

	res.send('Email endpoint hit.');
});

module.exports = router;
