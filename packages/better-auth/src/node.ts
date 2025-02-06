import { db } from '@repo/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

type GetAuthProps = {
  google: {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  };
};
export type Auth = ReturnType<typeof betterAuth>;

type GetAuth = ({ google }: GetAuthProps) => Auth;

export const getAuth: GetAuth = ({ google }) => {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
    }),

    socialProviders: {
      google: {
        clientId: google.GOOGLE_CLIENT_ID,
        clientSecret: google.GOOGLE_CLIENT_SECRET,
      },
    },
  });
};
