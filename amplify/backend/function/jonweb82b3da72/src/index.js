/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { SES } from 'aws-sdk';
const sesClient = new SES();
const sesConfirmedAddress = "jon.esparaz@gmail.com";
const sanitizeHtml = require('sanitize-html');

export function handler(event, context, callback) {
    const emailObj = JSON.parse(event.body);
    const params = getEmailMessage(emailObj);
    const sendEmailPromise = sesClient.sendEmail(params).promise();
    
    const response = {
        statusCode: 200
    };
    
    sendEmailPromise.then(function(result) {
        console.log(result);
        callback(null, response);
    }).catch(function(err) {
        console.log(err);
        response.statusCode = 500;
        callback(null, response);
    });
}

function getEmailMessage (emailObj) {

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
