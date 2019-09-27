const { AuthenticationError, ApolloError, UserInputError, ValidationError, SyntaxError, ForbiddenError, SchemaError } = require('apollo-server-express');
const { User } = require('./models/User');
const { createUser } = require('./gqlRoutes/createUser');
const { updateUser } = require('./gqlRoutes/updateUser');
const { deleteUser } = require('./gqlRoutes/deleteUser');
const { userLogin } = require('./gqlRoutes/userLogin');

const resolvers = {
  Query: {
    userLogin,
    users: () => User.find(),
    profileUser: (_, {username}) => User.findOne({username}),
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_USER')
    },
  },
};

module.exports.resolvers = resolvers;
