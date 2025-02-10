import { builder } from '@/builder';
import { buckets } from '@/lib/pictureBuckets';
import { db } from '@repo/db';
import { eq } from '@repo/db/orm';
import * as schema from '@repo/db/schema';
import type { Readable } from 'stream';

builder.mutationField('uploadFile', (t) =>
  t.field({
    type: 'Boolean',
    args: { file: t.arg({ type: 'File' }) },
    resolve: async (parent, args, ctx) => {
      console.log(args.file);

      return true;
    },
  })
);
