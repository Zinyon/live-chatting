import {gql} from '@apollo/client';

export const GET_USER_QUERY = gql`
  query getUser{
    users{
      id
      name
      email
    }
  }
`