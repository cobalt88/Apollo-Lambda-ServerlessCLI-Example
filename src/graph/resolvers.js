import dbQuery from "../db.js";
import { resolvers as scalarResolvers } from "graphql-scalars";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Query = {
	...scalarResolvers,
	Query: {
		hello: async () => {
			return "Hello world!";
		},
		GetUser: async (parent, args, context, info) => {
			const user = await dbQuery(
				prisma.users.findUnique({
					where: {
						Email: args.Email,
					},
				})
			);
			return user;
		},
		GetUsers: async (parent, args, context, info) => {
			const users = await dbQuery(
				prisma.users.findMany({
					take: parseInt(args.limit),
				})
			);
			return users;
		},
		GetRole: async (parent, args, context, info) => {
			const role = await dbQuery(
				prisma.userRoles.findUnique({
					where: {
						RoleID: args.RoleID,
					},
				})
			);

			return role;
		},
		GetRoles: async (parent, args, context, info) => {
			const roles = await dbQuery(
				prisma.userRoles.findMany({
					take: parseInt(args.limit),
				})
			);
			return roles;
		},
	},
	Mutation: {
		CreateUser: async (parent, args, context, info) => {
			const user = await dbQuery(
				prisma.users.create({
					data: {
						Username: args.Username,
						Email: args.Email,
						PrimaryRole: args.PrimaryRole,
						SecondaryRoles: args.SecondaryRoles,
						UserActivity: {
							Activity: "User Created",
							EventSource: "Mutation CreateUser",
						},
					},
				})
			);
			console.log("Made it create user mutation");
			return user;
		},
		UpdateUser: async (parent, args, context, info) => {
			const user = await dbQuery(
				prisma.users.update({
					where: {
						Email: args.Email,
					},
					data: { ...args },
				})
			);
			return user;
		},
		DeleteUser: async (parent, args, context, info) => {
			const user = await dbQuery(
				prisma.users.delete({
					where: {
						Email: args.email,
					},
				})
			);
			if (user) {
				return true;
			} else {
				return false;
			}
		},
		CreateUserRole: async (parent, args, context, info) => {
			const role = await dbQuery(
				prisma.userRoles.create({
					data: {
						RoleID: args.RoleId,
						RoleTitle: args.RoleTitle,
						Description: args.Description,
					},
				})
			);
			return role;
		},
		UpdateUserRole: async (parent, args, context, info) => {
			const role = await dbQuery(
				prisma.userRoles.update({
					where: {
						RoleID: args.RoleId,
					},
					data: {
						RoleTitle: args.RoleTitle,
						RoleDescription: args.RoleDescription,
					},
				})
			);
			return role;
		},
		DeleteUserRole: async (parent, args, context, info) => {
			const role = await dbQuery(
				prisma.userRoles.delete({
					where: {
						id: args.id,
					},
				})
			);
			return role;
		},
	},
};

export default Query;
