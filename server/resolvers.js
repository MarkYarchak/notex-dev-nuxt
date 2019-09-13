const { User } = require('./models/User');

const resolvers = {
  Query: {
    hello: () => 'hello world',
    users: () => User.find(),
  },
  Mutation: {
    createUser: async (_, userData) => {
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, userData) => {
      const availableUsers = await User.find({username: userData.username});
      if (availableUsers.length) {
        await User.updateOne({ username: userData.username }, userData);
        return userData;
      } else throw new Error('No user registered');
    },
    deleteUser: async (_, { username }) => {
      const availableUsers = await User.find({username});
      if (availableUsers.length) {
        await User.deleteOne({ username });
        return { username };
      } else throw new Error('No user registered');
    },
  },
};

module.exports.resolvers = resolvers;
