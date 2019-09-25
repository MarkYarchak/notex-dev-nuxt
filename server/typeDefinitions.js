const { gql } = require('apollo-server-express');

const typeDefs = gql`

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
  
  type User {
      id: ID!
      username: String!
      email: String!
      fullName: String!
      avatar: String!
      collaborators: [User!]
      notes: [Note!]
      discussions: [Dialog]
      organizations: [Organization!]
      settings: Settings!
  }

  type Content {
      text: String
      image: String
      audio: String
      video: String
  }
  
  type Note {
      content: Content!
  }

  type Dialog {
      id: ID!
      messages: [Content!]
  }
  
  type Organization {
      id: ID!
      name: String!
      avatar: String!
      members: [User!]
  }
  
  type Publication {
      id: ID!
      content: Content!
      comments: [String!]
  }
  
  type Settings {
      mobileMenuPosition: Boolean
  }
  
`;

module.exports.typeDefs = typeDefs;
