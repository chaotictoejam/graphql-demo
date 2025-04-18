const { ApolloServer, gql } = require("apollo-server");

// Mock data
let users = [
  {
    id: "1",
    name: "Alice",
    email: "alice@example.com",
    age: 30,
    posts: [
      { id: "a", title: "Hello World", content: "My first post!" },
      { id: "b", title: "GraphQL Tips", content: "Query what you need!" },
    ],
  },
  {
    id: "2",
    name: "Bob",
    email: "bob@example.com",
    age: 25,
    posts: [],
  },
];

// Type definitions
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User
    updateUser(id: ID!, name: String, email: String, age: Int): User
  }
`;

// Resolvers
const resolvers = {
  Query: {
    user: (_, { id }) => users.find((u) => u.id === id),
    users: () => users,
  },
  Mutation: {
    createUser: (_, { name, email, age }) => {
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        email,
        age,
        posts: [],
      };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, name, email, age }) => {
      const user = users.find((u) => u.id === id);
      if (!user) return null;
      if (name) user.name = name;
      if (email) user.email = email;
      if (age) user.age = age;
      return user;
    },
  },
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
