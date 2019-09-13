const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    hello: String!
    users: [User!]!
  }

  type User {
    id: ID!
    username: String!
    fullName: String!
  }
  
  type Mutation {
    createUser(username: String!, fullName: String!, password: String!): User!
    updateUser(username: String!, fullName: String, password: String): User!
    deleteUser(username: String!): User!
  }
  
`;

module.exports.typeDefs = typeDefs;
