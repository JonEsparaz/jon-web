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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      date
      content
      previewImage
      tags
      status
      description
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
        tags
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByStatus = /* GraphQL */ `
  query PostsByStatus(
    $status: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByStatus(
      status: $status
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        date
        content
        previewImage
        tags
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
