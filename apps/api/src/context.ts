import { createContext as AuthContext } from '@repo/graphql/server';
import { createUserLoader } from './loaders/userLoader';

export const createContext = async ({ request }: { request: Request }) => {
  const auth = await AuthContext({ request });

  const loaders = {
    userLoader: createUserLoader(),
  };

  return { ...auth, loaders };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
