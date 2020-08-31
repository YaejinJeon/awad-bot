const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {bodyParserGraphQL} = require('body-parser-graphql');
const compression = require('compression');

const fs = require('fs');
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers');

const app = express();
const PORT = 5000;

app.use(bodyParserGraphQL());
app.use(compression());


const server = new ApolloServer({ 
  typeDefs, resolvers, introspection:true, playground:true });

  server.applyMiddleware({ 
    app,
    path: "/graphql"
  });




app.listen(PORT,()=>{console.log("apollo server is running on port 5000!!!yay")});