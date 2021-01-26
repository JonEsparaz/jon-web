import os
import boto3


def handler(event, context):
    table = os.environ['TABLE']
    client = boto3.client('dynamodb')
    response = client.scan(TableName=table)

    for course in response['Items']:
        reset_lecutures = []
        for i in range(len(course['lectures']['L'])):
            reset_lecutures.append(
                {'M': {'number': {'S': str(i+1)}, 'viewed': {'BOOL': False}}})

        client.update_item(TableName=table, Key={
                           "id": course["id"]}, UpdateExpression="set lectures=:l", ExpressionAttributeValues={':l': {'L': reset_lecutures}})

    return True