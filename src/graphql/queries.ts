/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const contact = /* GraphQL */ `
  query Contact(
    $first: String!
    $last: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    contact(
      first: $first
      last: $last
      email: $email
      subject: $subject
      message: $message
    )
  }
`;
