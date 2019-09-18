const { AuthenticationError, ApolloError, UserInputError, ValidationError, SyntaxError, ForbiddenError, SchemaError } = require('apollo-server-express');
const { User } = require('./models/User');

const resolvers = {
  Query: {
    users: () => User.find(),
    profileUser: (_, {username}) => User.find({username}),
  },
  Mutation: {
    createUser: async (_, userData, { pubsub }) => {
      const newUser = new User(userData);
      await newUser.save();
      await pubsub.publish('NEW_USER', {
        newUser: newUser,
      });
      return newUser;
    },
    updateUser: async (_, userData) => {
      // change to findById next line
      const availableUsers = await User.find({ username: userData.username });
      if (availableUsers.length) {
          await User.updateOne({ username: userData.username }, userData);
          return userData;
        // } else throw new ValidationError('This data already in use');
      } else throw new AuthenticationError('No user registered');
    },
    deleteUser: async (_, { username }) => {
      const availableUsers = await User.find({username});
      if (availableUsers.length) {
        await User.deleteOne({ username });
        return { username };
      } else throw new AuthenticationError('No user registered');
    },
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_USER')
    },
  },
};

module.exports.resolvers = resolvers;
