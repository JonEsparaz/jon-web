/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const contact = /* GraphQL */ `
  query Contact(
    $first: String
    $last: String
    $email: String
    $subject: String
    $message: String
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      date
      content
      previewImage
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        content
        previewImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
