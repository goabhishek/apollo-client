import { gql } from '@apollo/client';

export const USERS = gql`
  query users($page: Int, $limit: Int, $filter: UserFilter, $search: String) {
    users(page: $page, limit: $limit, filter: $filter, search: $search) {
      payload {
        _id
        name
        email
        isPasswordSet
        phone
        gender
        age
        quotes {
          _id
          by
          quote
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      page
      limit
      count
      message
      status
    }
  }
`;

export const USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      payload {
        _id
        name
        email
        isPasswordSet
        phone
        gender
        age
        quotes {
          _id
          by
          quote
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      token
      message
      status
    }
  }
`;
