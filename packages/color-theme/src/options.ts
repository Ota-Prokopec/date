import { z } from 'zod';

export const colorThemeZod = z.union([z.literal('dark'), z.literal('light')]);
export type ColorTheme = z.infer<typeof colorThemeZod>;
