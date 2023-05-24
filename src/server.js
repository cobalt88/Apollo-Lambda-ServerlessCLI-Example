import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import pkg from "body-parser";
const { json } = pkg;
import cors from "cors";
import { TypeDefs, Resolvers } from "./graph/index.js";

const server = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();
app.use(cors(), json(), expressMiddleware(server));

export const graphqlHandler = serverlessExpress({ app });

