import { db } from '@repo/db';
import { type Session } from '@repo/better-auth/types';
import { getSession } from '@repo/better-auth/session';

import { fromStringCookieToNextCookies } from '@repo/next-storage/handlers';
import type { NextCookiesReturnType } from '@repo/ts-types';
import { env } from '../env';

export const createInnerContext = () => {
  return {
    db,
    isTest: env.NODE_ENV === 'test',
  };
};

export type Context = { request: Request; session: Session | null; cookies: NextCookiesReturnType } & ReturnType<
  typeof createInnerContext
>;

export const createContext = async ({ request }: { request: Request }): Promise<Context> => {
  const cookieHeader = request.headers.get('Cookie') ?? '';

  const cookies = fromStringCookieToNextCookies(cookieHeader);

  let session: Session | null = null;

  try {
    session = await getSession({ headers: request.headers });
  } catch (error) {}

  const innerSession = createInnerContext();

  return {
    request,
    session,
    ...innerSession,
    cookies,
  };
};
