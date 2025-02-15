import type { Options } from 'tsup'

export const baseTsupConfig = {
  entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],
  sourcemap: true,
  format: ['esm'],
  clean: true,
  outDir: 'dist',
  dts: true,
} as const satisfies Options
