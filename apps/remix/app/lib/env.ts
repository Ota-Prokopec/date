import { env as environment } from '@repo/env';

export const env = environment(import.meta.env, 'client');
