import { baseTsupConfig } from '@repo/tsup/base';
import { defineConfig } from 'tsup';

// @ts-expect-error
export default defineConfig(baseTsupConfig);
