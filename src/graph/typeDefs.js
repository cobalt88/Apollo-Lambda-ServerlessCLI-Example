import { gql } from "graphql-tag";

const typeDefs = gql`
	type Query {
		ServerlessTestQuery: String!
		HelloWorld: String!
		DemoUser: User!
		DemoUsers: [User!]!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		username: String!
	}
`;

export { typeDefs };
