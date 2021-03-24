import chatting from './chatting';
import queries from './_queries';

import {makeExecutableSchema} from 'graphql-tools'

const typeDefs = [chatting.typeDefs, queries]
const resolvers = [chatting.resolvers];

export default makeExecutableSchema({typeDefs, resolvers});
