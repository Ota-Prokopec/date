import { z } from 'zod';

export const coordsZodSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export type Coords = z.TypeOf<typeof coordsZodSchema>;
