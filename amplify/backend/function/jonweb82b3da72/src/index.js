/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const sesClient = new AWS.SES();
const sesConfirmedAddress = "no-reply@jonesparaz.ca";
const sanitizeHtml = require('sanitize-html');

function getEmailMessage(emailObj) {

    const firstClean = sanitizeHtml(emailObj.first);
    const lastClean = sanitizeHtml(emailObj.last);
    const messageClean = sanitizeHtml(emailObj.message);
    const emailClean = sanitizeHtml(emailObj.email);
    const subjectClean = sanitizeHtml(emailObj.subject);

    const emailRequestParams = {
        Destination: {
          ToAddresses: [ 'jon.esparaz@gmail.com' ]  
        },
        Message: {
            Body: {
                Text: {
                    Data: `${messageClean} from ${firstClean} ${lastClean} via jonesparaz.ca`
                }
            },
            Subject: {
                Data: subjectClean
            }
        },
        Source: sesConfirmedAddress,
        ReplyToAddresses: [ emailClean ]
    };
    
    return emailRequestParams;
}

exports.handler = async (event, context, callback) => {

    const emailObj = { 
        first: event.arguments.first, 
        last: event.arguments.last, 
        email: event.arguments.email, 
        subject: event.arguments.subject,
        message: event.arguments.message    
    };
    const params = getEmailMessage(emailObj);

    sesClient.sendEmail(params, function (err, data) {
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            console.log(data);
            context.succeed(event);
        }
    });
}
