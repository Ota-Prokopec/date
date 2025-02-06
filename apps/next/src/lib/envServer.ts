import { env as environment } from '@repo/env';

export const envServer = environment(process.env, 'server');
