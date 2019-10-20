const { AuthenticationError, ApolloError, UserInputError, ValidationError, SyntaxError, ForbiddenError, SchemaError } = require('apollo-server-express');
const { User } = require('./models/User');
const { createUser } = require('./gqlRoutes/createUser');
const { updateUser } = require('./gqlRoutes/updateUser');
const { deleteUser } = require('./gqlRoutes/deleteUser');
const { userLogin } = require('./gqlRoutes/userLogin');
const { checkUserLoginStatus } = require('./gqlRoutes/checkUserLoginStatus');
const { sendRecoveryEmail } = require('./gqlRoutes/sendRecoveryEmail');
const { verifyRecoveryLink } = require('./gqlRoutes/verifyRecoveryLink');
const { passwordRecovery } = require('./gqlRoutes/passwordRecovery');

const resolvers = {
  Query: {
    userLogin,
    checkUserLoginStatus,
    sendRecoveryEmail,
    verifyRecoveryLink,
    users: () => User.find(),
    profileUser: (_, {username}) => User.findOne({username}),
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    passwordRecovery,
    addCollaborator: async (_, userData) => {
      const updateResult = await User.updateOne({ _id: userData.id }, { $addToSet: { collaborators: userData } });
      return !!updateResult.nModified;
    },
    removeCollaborator: async (_, userData) => {
      const updateResult = await User.updateOne({ _id: userData.id }, { $pull: { collaborators: { id: userData.id } } });
      return !!updateResult.nModified;
    },
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_USER')
    },
  },
};

module.exports.resolvers = resolvers;
