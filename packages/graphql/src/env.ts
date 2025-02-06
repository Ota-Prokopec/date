import { env as environment, getAutoEnv } from '@repo/env';

export const env = environment(getAutoEnv(), 'server');
