import os
import boto3
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def handler(event, context):
    client = boto3.client('dynamodb')

    response = client.scan(TableName=os.environ['TABLE'])

    missed = 0
    for course in response['Items']:
        for lecture in course['lectures']['L']:
            if lecture['M']['viewed']['BOOL'] == False:
                missed += 1

    if missed > 0:
        sender = 'no-reply@jonesparaz.ca'
        to = os.environ['EMAIL']
        smtp_user = os.environ['USER']
        smtp_pass = os.environ['PASS']
        host = "email-smtp.us-east-1.amazonaws.com"
        port = 587

        subject = 'Weekly Lecture Tracker'
        body_text = f'You have {missed} lectures to watch!'

        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = sender
        msg['To'] = to

        body = MIMEText(body_text, 'plain')
        msg.attach(body)

        try:
            server = smtplib.SMTP(host, port)
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(smtp_user, smtp_pass)
            server.sendmail(sender, to, msg.as_string())
            server.close()
        except Exception as e:
            print("Error: ", e)
        else:
            print("Email sent!")

    return response