import { auth as nodeAuth } from './auth';
import type { Session } from './types';

type GetSessionProps = {
  headers: Headers;
};
type GetSession = (params: GetSessionProps) => Promise<Session | null>;

export const getSession: GetSession = async ({ headers }) => {
  return await nodeAuth.api.getSession({
    headers: headers,
  });
};
