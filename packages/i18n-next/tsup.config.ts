import { baseTsupConfig } from '@repo/tsup';
import { defineConfig, type Options } from 'tsup';

export default defineConfig({
  ...baseTsupConfig,
  entry: [...baseTsupConfig.entry, 'src/**/*.json'],
  external: ['**/*.json'],
});
