import { Storage } from '@repo/next-storage';
import { z } from 'zod';

export const localStorageZodSchema = z.object({});

export const localStorage = new Storage({
  zodSchema: localStorageZodSchema,
  type: 'localstorage',
});
