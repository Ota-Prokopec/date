import { defineConfig } from 'tsup';
import { baseTsupConfig } from '@repo/tsup/base';

export default defineConfig({
  ...baseTsupConfig,
  noExternal: ['react-easy-crop'],
});
