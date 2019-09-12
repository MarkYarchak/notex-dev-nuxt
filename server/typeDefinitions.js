const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    hello: String!
    dogs: [Dog!]
  }

  type Dog {
    id: ID!
    name: String!
  }
  
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(name: String!): Dog!
  }
  
`;

module.exports.typeDefs = typeDefs;
