import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as schema from './schema/index'
import { env } from '@repo/env'
export * from './schema/index'

const databaseUrl = env(process.env, 'server').DATABASE_URL

const client = new pg.Client({
  connectionString: databaseUrl,
})

client.connect()

export const drizzleSchema = schema
export const db = drizzle(client, { schema: schema })
