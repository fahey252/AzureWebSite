// https://azure.microsoft.com/en-us/documentation/articles/store-sendgrid-nodejs-how-to-send-email/#reference

var express = require('express');
var router = express.Router();
var sendGridApiKey = process.env.SendGridApiKey;
var sendgrid = require('sendgrid')(sendGridApiKey);

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

function getCCEmaisl() {
	var ccEmailsSetting = process.env.SendGridCCEmails || '',	// comma separated list.
    	ccEmails = ccEmailsSetting.split(','),	// [""] when no value set.

    ccEmails = ccEmails.reduce(function sanitizeEmaisl(accumulator, ccEmail) {
    	if(ccEmail) {	// TODO: perhaps validate is email address, not just truthy
    		accumulator.push(ccEmail);
    	}

    	return accumulator;
    }, []);

    return ccEmails;
}

function sendWelcomeMessageToEmail(email) {
    var ccEmails = getCCEmails(),
    	email = new sendgrid.Email({
	        from: 'fahey252@gmail.com',  // TODO: from email might be spammed, mailed-by:	sendgrid.net
	        to: email,
	        subject: 'Welcome Subject',
	        text: 'Welcome Email Body.',
	        html: 'Welcome Email <b>Body</b>.'
	    });

    if (ccEmails.length) {
    	email.cc = ccEmails;
    }

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
