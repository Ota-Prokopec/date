import { Storage } from '@repo/next-storage';
import { cookieStorageZodSchema } from './cookieStorageOptions';

export const cookieStorage = new Storage({
  zodSchema: cookieStorageZodSchema,
  type: 'cookies',
});
