import { getReactAuth } from '@repo/better-auth/client';
import { env } from './env';

const authClient: ReturnType<typeof getReactAuth> = getReactAuth({
  baseUrl: env.NEXT_PUBLIC_WEB_URL,
});

type AuthClient = typeof authClient;

export const signIn: AuthClient['signIn'] = authClient['signIn'];
export const signOut: AuthClient['signOut'] = authClient['signOut'];
export const useSession: AuthClient['useSession'] = authClient['useSession'];
