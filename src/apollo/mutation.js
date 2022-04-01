import { gql } from '@apollo/client';

export const USER_CREATE = gql`
  mutation userCreate($input: NewUser!) {
    userCreate(input: $input) {
      payload {
        _id
        name
        email
        #password
        #confirmPassword
        phone
        gender
        age
      }
      token
      message
      status
    }
  }
`;

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      payload {
        _id
        name
        email
        isPasswordSet
        phone
        gender
        age
        createdAt
        updatedAt
      }
      token
      message
      status
    }
  }
`;

export const USER_UPDATE = gql`
  mutation userUpdate($userId: ID!, $update: UpdateUser!) {
    userUpdate(userId: $userId, update: $update) {
      payload {
        _id
        name
        email
        isPasswordSet
        phone
        gender
        age
        createdAt
        updatedAt
      }
      token
      message
      status
    }
  }
`;

export const USER_DELETE = gql`
  mutation userDelete($userId: ID!) {
    userDelete(userId: $userId) {
      payload {
        _id
        name
        email
        isPasswordSet
        phone
        gender
        age
        createdAt
        updatedAt
      }
    }
  }
`;
