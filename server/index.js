const { Nuxt, Builder } = require('nuxt');
const consola = require('consola');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
const { ApolloServer, PubSub } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefinitions');
const databaseConfig = require('./config/database');

const app = express();
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';


async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  await mongoose.connect(databaseConfig.database, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to database at', databaseConfig.database)
  })
  .catch(err => console.log(err));
  const pubsub = new PubSub();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, pubsub }),
  });
  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);
  app.use(passport.initialize());
  app.use(passport.session());

  // const io = require('socket.io')(httpServer);
  // io.on('connection', () => { /* … */ });
  httpServer.listen(port, host, () => {
      console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`);
      console.log(`🚀 Subscriptions ready at ws://${host}:${port}${server.subscriptionsPath}`);
  });
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
