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
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      lectures {
        viewed
        number
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lectures {
          viewed
          number
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
