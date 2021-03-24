import {ApolloServer} from 'apollo-server-micro';
import schema from './typedefs-resolvers';
import {dbConnect} from './lib/dbConnect';

const apolloServer = new ApolloServer({
  schema,
  playground: true,
});

dbConnect();

export default apolloServer.createHandler({path: '/api/graphql'});

export const config = {
  api:{
    bodyParser: false,
  }
}