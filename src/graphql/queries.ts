/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image
        userID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
          items {
            id
            userID
            tweetID
            createdAt
            updatedAt
          }

        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFleet = /* GraphQL */ `
  query GetFleet($id: ID!) {
    getFleet(id: $id) {
      id
      type
      text
      image
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFleets = /* GraphQL */ `
  query ListFleets(
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFleets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        text
        image
        userID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
