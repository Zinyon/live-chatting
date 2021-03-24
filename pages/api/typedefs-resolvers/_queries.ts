import {gql} from 'apollo-server-micro';

const typeDefs = gql`
  type Query{
    users: [User]
  }
`

export default typeDefs;