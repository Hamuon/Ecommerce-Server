import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Product } from "./resolvers/Product.js";
import { Mutation } from "./resolvers/Mutation.js";
import { Category } from "./resolvers/Category.js";
import { db } from "./db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Mutation,
    Category,
  },
  context: {
    db,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server is ready at port ${url}`);
