import {
  gql
} from 'apollo-server-express';

export default gql`
    extend type Query {
      clients: [Client!]
      client(id: ID!): Note!
    }

    extend type Mutation {
      createClient(Name: String!): Client!
      deleteClient(ID: ID!): Boolean!
      updateClient(ID: ID!, Name: String!): Client!
    }
  
    type Note {
      id: ID!
      name: String!
    }
  `;