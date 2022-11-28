
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const tracks = [
  {
    id: 1,
    title: 'Mexico climb',
    author: 'Kate Chopin',
    length: '20'
  },
  {
    id: 2,
    title: 'Around Brno (100 km)',
    author: 'Paul Auster',
    length: '100'
  },
];


const typeDefs = `#graphql
  type Track {
    title: String
    author: String
    id: Int
  }

  type Query {
    tracks: [Track]
  }
`;

const resolvers = {
    Query: {
      tracks: () => tracks,
    },
};

const server = new ApolloServer({
typeDefs,
resolvers,
});
  const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);