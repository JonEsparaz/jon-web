/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const sesClient = new AWS.SES();
const sesConfirmedAddress = "jon.esparaz@gmail.com";
const sanitizeHtml = require('sanitize-html');

function getEmailMessage(emailObj) {

    const firstClean = sanitizeHtml(emailObj.first);
    const lastClean = sanitizeHtml(emailObj.last);
    const messageClean = sanitizeHtml(emailObj.message);
    const emailClean = sanitizeHtml(emailObj.email);
    const subjectClean = sanitizeHtml(emailObj.subject);

    const emailRequestParams = {
        Destination: {
          ToAddresses: [ sesConfirmedAddress ]  
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

exports.handler = async (event) => {

    const emailObj = { 
        first: event.arguments.first, 
        last: event.arguments.last, 
        email: event.arguments.email, 
        subject: event.arguments.subject,
        message: event.arguments.message    
    };
    const params = getEmailMessage(emailObj);
    const sendEmailPromise = await sesClient.sendEmail(params).promise();
        
    sendEmailPromise.then(function(result) {
        console.log(result);
    }).catch(function(err) {
        console.log(err);
    });
}
