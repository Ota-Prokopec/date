import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/drizzle/drizzleSchema.ts',
  out: './src/generated/drizzle',

  dbCredentials: {
    url: 'postgres://user:password@localhost:5432'!,
  },
  verbose: true,
  strict: true,
});
