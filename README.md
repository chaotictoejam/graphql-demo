# GraphQL Demo Project

## Description
A demonstration project showcasing GraphQL implementation. This project serves as an example of how to build and structure a GraphQL API.

## Prerequisites
- Node.js (version X.X.X)
- npm or yarn

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
```
2. Install dependencies:

```
npm install
# or
yarn install
```

## Usage

1. Start the server:

```
npm start
# or
yarn start
```

2. Access the GraphQL playground at `http://localhost:4000/`

## Demo Queries\Mutations

```graphql
# Get all users
query {
  users {
    id
    name
    email
  }
}
```

```graphql
# Get user by ID
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
```

```graphql
# Create a user
mutation {
  createUser(name: "Charlie", email: "charlie@example.com", age: 22) {
    id
    name
  }
}
```