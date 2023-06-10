import { gql } from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = gql`
	# extend schema
	#   @link(
	#     url: "https://specs.apollo.dev/federation/v2.0"
	#     import: ["@key", "@shareable"]
	#   )
	${scalarTypeDefs}
	type Query {
		hello: String
		GetUser(Email: String!): Users
		GetUsers(limit: Int!): [Users]
		GetRole(RoleID: Int!): UserRoles
		GetRoles(limit: Int!): [UserRoles]
	}

	type Mutation {
		CreateUser(
			Username: String!
			Email: String!
			PrimaryRole: Int!
			SecondaryRoles: [Int]
		): Users

		UpdateUser(
			Username: String
			Email: String!
			PrimaryRole: Int
			SecondaryRoles: [Int]
			LastLogin: DateTime
			UserActivity: [UserActivityInput]
		): Users

		DeleteUser(email: String!): Boolean

		CreateUserRole(
			RoleId: Int!
			RoleTitle: String!
			Description: String!
		): UserRoles

		UpdateUserRole(
			id: ID
			RoleId: Int!
			RoleTitle: String
			Description: String
		): UserRoles

		DeleteUserRole(id: ID!): UserRoles
	}

	input UserActivityInput {
		Timestamp: DateTime
		Activity: String!
		ActivityCode: Int
		EventSource: String
	}

	type UserActivity {
		Timestamp: DateTime
		Activity: String!
		ActivityCode: Int
		EventSource: String
	}

	type UserRoles {
		id: ID!
		RoleID: Int!
		RoleTitle: String!
		Description: String!
	}

	type Users {
		id: ID!
		Username: String!
		Email: String!
		LastLogin: DateTime
		CreatedAt: DateTime
		UserActivity: [UserActivity]
		PrimaryRole: Int
		SecondaryRoles: [Int]
	}
`;

export default typeDefs;
