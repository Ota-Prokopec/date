import { builder } from '@/builder';
import { db } from '@repo/db';
import { eq } from '@repo/db/orm';
import * as schema from '@repo/db/schema';

builder.mutationField('updateUserProfile', (t) =>
  t.field({
    type: 'UpdateUserProfile',
    args: { userProfileData: t.arg({ type: 'UpdateUserProfileArgs' }) },
    resolve: async (parent, args, ctx) => {
      const user = (await ctx).session?.user;
      if (!user) throw new Error('User not authenticated');

      const { username, gender, bio } = args.userProfileData;

      const updateUserProfileRecord = await db
        .update(schema.user)
        .set({ bio, gender, name: username })
        .where(eq(schema.user.id, user.id));

      return {
        userId: user.id,
      };
    },
  })
);
