import { createAuthClient } from 'better-auth/react';

type AuthClient = ReturnType<typeof createAuthClient>;

type GetReactAuth = ({ baseUrl }: { baseUrl: string }) => Pick<AuthClient, 'signIn' | 'signOut' | 'useSession'>;

export const getReactAuth: GetReactAuth = ({ baseUrl }) => {
  const authClient = createAuthClient({
    baseURL: baseUrl,
  });

  const signIn: AuthClient['signIn'] = authClient['signIn'];
  const signOut: AuthClient['signOut'] = authClient['signOut'];
  const useSession: AuthClient['useSession'] = authClient['useSession'];

  return {
    signIn,
    signOut,
    useSession,
  };
};
