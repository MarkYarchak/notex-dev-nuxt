const { Dog } = require('./models/Dog');

const resolvers = {
  Query: {
    hello: () => 'hello world',
    dogs: () => Dog.find(),
  },
  Mutation: {
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    },
    deleteDog: async (_, { id }) => {
      await Dog.deleteOne({ id });
      return id;
    }
  }
};

module.exports.resolvers = resolvers;
