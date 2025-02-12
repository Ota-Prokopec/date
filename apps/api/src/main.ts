import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { schema } from './schema';
import { useCookies } from '@whatwg-node/server-plugin-cookies';
import { createContext } from './context';

// Create a Yoga instance with a GraphQL schema.
export const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/api/graphql',
  plugins: [useCookies()],
  context: (e) => createContext({ request: e.request }),
  cors: {
    credentials: true,
    origin: ['http://localhost:5173'],
  },
  multipart: true,
  maskedErrors: false,
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4444, () => {
  console.log('Server is running on http://localhost:4444/api/graphql');
});

export const handleRequest: typeof yoga.handleRequest = yoga.handleRequest;
