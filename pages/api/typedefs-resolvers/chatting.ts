import {gql} from 'apollo-server-micro';
import {getUser} from '../services/user';

const typeDefs = gql`
  type User{
    id: ID!
    name: String!
    email: String!
    imageUrl: String
  }
`

interface User{
  id: number;
  name: string;
  email: string;
}

const tempUsers : User[]= [
  {
    id: 0,
    name: '진영',
    email: 'pjy20450107@gmail.com',
  },
  {
    id: 1,
    name: '지녕',
    email: 'pjy20450107@naver.com'
  }
]

const resolvers = {
  Query:{
    users: async (parent: unknown, args: unknown, ctx: unknown) => await getUser(args,ctx)
  }
}

export default {typeDefs, resolvers}