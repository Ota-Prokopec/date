import type { Auth } from 'better-auth';
import { env } from './env';
import { getAuth } from './node';

//@ts-ignore
export const auth: Auth = getAuth({
  google: {
    GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: env.GOOGLE_CLIENT_SECRET,
  },
});
