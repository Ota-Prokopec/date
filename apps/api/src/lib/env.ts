import { env as environment } from '@repo/env';

export const env = environment(process.env, 'server');
