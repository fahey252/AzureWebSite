// https://azure.microsoft.com/en-us/documentation/articles/store-sendgrid-nodejs-how-to-send-email/#reference

var express = require('express');
var router = express.Router();
// TODO: add in app settings
var sendGridUsername = process.env.SendGridUserName;
var sendGridPassword = process.env.SendGridPassword;		// TODO: use API key once validated it works.
var sendgrid = require('sendgrid')(sendGridUsername, sendGridPassword);

/* plain text email body contains text that looks like:

Bexley Web Lead
*Name*
Evan Sauer
*Email*
evansauer1225@gmail.com
*/
function getEmailAddressInText(text) {
    var emailPattern = /\*?Email\*?\n(.+)\n/, // Find Email line and capture everything on line below
        emails = text.match(emailPattern), // null when no matches
        // index 0 is match, index 1 is the capture
        email = emails ? emails[1] : '';	//  TODO: app setting for default email.

    return email;
}

function sendWelcomeMessageToEmail(email) {
    var email = new sendgrid.Email({
        from: 'fahey252@gmail.com',  // TODO: from email might be spammed, mailed-by:	sendgrid.net
        cc: process.env.SendGridUserName || '',	// comma separated list.
        to: email,
        subject: 'Welcome Subject',
        text: 'Welcome Email Body.',
        html: 'Welcome Email <b>Body</b>.'
    });

    sendgrid.send(email, function(err, json) {
        if (err) {
            return console.error(err); 
        }

        console.log('Welcome email sent to ' + email, json);
    });
}

router.get('/', function(req, res) {
    sendWelcomeMessageToEmail('fahey252@gmail.com'); // testing purposese only

    res.send('Email endpoint.');
});

router.post('/', function(req, res) {
    var emailBody = req.body.plain || '',		// using plain text version of email
    	email = getEmailAddressInText(emailBody) || 'fahey252@gmail.com';		// TODO: handle case when no email found

    // console.log('Incoming email body: ', req.body.plain);

    sendWelcomeMessageToEmail(email);

    res.send(req.body);
});

module.exports = router;
