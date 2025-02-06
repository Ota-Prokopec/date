import { z } from 'zod';

export const genderZodSchema = z.union([z.literal('male'), z.literal('female')]);
export type Gender = z.TypeOf<typeof genderZodSchema>;
