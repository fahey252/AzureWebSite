// https://azure.microsoft.com/en-us/documentation/articles/store-sendgrid-nodejs-how-to-send-email/#reference

var sendGridApiKey = process.env.SendGridApiKey,
    sendGridCCEmails = process.env.SendGridCCEmails || '', // comma separated list.
    sendGrid = require('sendgrid')(sendGridApiKey),
    sendGridFromEmail = process.env.SendGridFromEmailAddress,
    emails = {};

// commaSeparatedEmails = i.e. "email1,email2,email3"
function getCCEmails(commaSeparatedEmails) {
    var ccEmails = commaSeparatedEmails.split(','); // [""] when no value set.

    ccEmails = ccEmails.reduce(function sanitizeEmaisl(accumulator, ccEmail) {
        if (ccEmail) { // TODO: perhaps validate is email address, not just truthy
            accumulator.push(ccEmail);
        }

        return accumulator;
    }, []);

    return ccEmails;
}

/* plain text email body contains text that looks like:
    Bexley Web Lead
    *Name*
    Evan Sauer
    *Email*
    evansauer1225@gmail.com
*/
emails.getEmailAddressInText = function(text) {
    var emailPattern = /\*?Email\*?\n(.+)\n/, // Find Email line and capture everything on line below
        emails = text.match(emailPattern), // null when no matches
        // index 0 is match, index 1 is the capture
        email = emails ? emails[1] : '';

    // TODO: log/throw error when no email address is found.

    return email;
};

emails.sendWelcomeMessageToEmail = function(emailAddress) {
    var ccEmails = getCCEmails(sendGridCCEmails),
        email = new sendGrid.Email({
            from: sendGridFromEmail,
            to: emailAddress,
            subject: 'Welcome Subject',
            text: 'Welcome Email Body.',
            html: 'Welcome Email <b>Body</b>.'
        });

    if (ccEmails.length) {
        email.cc = ccEmails;
    }

    sendGrid.send(email, function(err, json) {
        if (err) {
            return console.error(err);
        }

        console.log('Welcome email sent. ', email);
    });
};

module.exports = emails;
