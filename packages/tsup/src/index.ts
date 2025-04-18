import type { Options } from 'tsup'

export const baseTsupConfig = {
  entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],
  format: ['esm'],
  clean: true,
  outDir: 'dist',
  dts: false,
} as const satisfies Options
