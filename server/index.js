const { Nuxt, Builder } = require('nuxt');
const consola = require('consola');
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefinitions');
const databaseConfig = require('./config/database');

const app = express();
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

const server = require('http').createServer(app);

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  await mongoose.connect(databaseConfig.database, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('Connected to database at', databaseConfig.database)
  })
  .catch(err => console.log(err));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server.applyMiddleware({ app });

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


  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
