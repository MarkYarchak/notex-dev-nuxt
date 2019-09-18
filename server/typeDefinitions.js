const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!
    username: String!
    email: String!
    fullName: String!
  }
  
  type Query {
    users: [User!]!
    profileUser (username: String!): [User!]!
  }
  
  type Mutation {
    createUser(username: String!, email: String!, fullName: String!, password: String!): User!
    updateUser(username: String!, email: String, fullName: String, password: String): User!
    deleteUser(username: String!): User!
  }
  
  type Subscription {
    newUser: User!
  }
  
`;

module.exports.typeDefs = typeDefs;
