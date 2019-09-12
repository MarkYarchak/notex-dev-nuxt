/*
const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = express();

const schema = buildSchema(`
  type Animal {
    name: String,
    age: Int,
    size: String,
    color: String,
  }

  type Query {
    hello: String,
    message: String,
    messageObj: [Animal]
  }

`);

let root = {
  hello: () => {
    return 'Hello world!';
  },
  message: () => 'Hello Mark',
  messageObj: null,
};

app.use('/graphql', graphqlHTTP((request, response, graphQLParams) => ({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })),
);

app.listen(5000, () => console.log('clear server'));
*/
