import { z } from 'zod';

export const graphqlHealthZodSchema = z.object({
  ok: z.boolean(),
});

export type GraphqlHealth = z.TypeOf<typeof graphqlHealthZodSchema>;
