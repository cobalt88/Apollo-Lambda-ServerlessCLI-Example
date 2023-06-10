/**
 *@function dbQuery
 *@description - Creates a connection to the database, executes a query, closes the connection, and returns the query result.
 *@param {object} query - Prisma query
 *@returns {object} - Prisma query result
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function dbQuery(query) {
  try {
    await prisma.$connect();

    const action = await query;

    await prisma.$disconnect();

    return action;
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
}
