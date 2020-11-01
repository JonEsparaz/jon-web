/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');

const smtpEndpoint = 'email-smtp.us-east-1.amazonaws.com';
const port = 587;
const senderAddress = 'no-reply@jonesparaz.ca';
const smtpUsername = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASS;

exports.handler = async (event) => {
  const emailClean = sanitizeHtml(event.arguments.email);
  const subjectClean = sanitizeHtml(event.arguments.subject);
  const messageClean = sanitizeHtml(event.arguments.message);
  const firstClean = sanitizeHtml(event.arguments.first);
  const lastClean = sanitizeHtml(event.arguments.last);

  const transporter = nodemailer.createTransport({
    host: smtpEndpoint,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: senderAddress,
    to: 'jon.esparaz@gmail.com',
    replyTo: emailClean,
    subject: subjectClean,
    text: `${messageClean} from ${firstClean} ${lastClean} via jonesparaz.ca`,
  };

  try {
    const res = await transporter.sendMail(mailOptions);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
