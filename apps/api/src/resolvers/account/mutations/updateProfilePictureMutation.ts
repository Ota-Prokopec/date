import { builder } from '@/builder'
import { buckets } from '@/lib/pictureBuckets'
import { db } from '@repo/db'
import { eq } from '@repo/db/orm'
import * as schema from '@repo/db/schema'
import type { Readable } from 'stream'

builder.mutationField('updateAccountPicture', (t) =>
  t.field({
    type: 'Boolean',
    args: { pictureFile: t.arg({ type: 'File', required: true }) },
    resolve: async (parent, args, ctx) => {
      const user = (await ctx).session?.user
      if (!user) throw new Error('User not authenticated')

      const { pictureFile } = args
      console.log(pictureFile)

      const uploadPictureResponse = await buckets.profilePictures.uploadFile(pictureFile)

      const updateUserProfileRecord = await db
        .update(schema.user)
        .set({ image: uploadPictureResponse.secure_url })
        .where(eq(schema.user.id, user.id))

      return true
    },
  })
)
