import { builder } from '@/builder';
import { db } from '@repo/db';

builder.queryField('getUserProfile', (t) =>
  t.field({
    args: { userId: t.arg({ type: 'String', required: false }) },
    type: 'UserProfile',
    resolve: async (parent, args, ctx) => {
      if (!ctx.session?.user.id) throw new Error('User is not authorizated to get user profile');

      const userProfileData = await ctx.loaders.userLoader.load(
        args.userId ?? ctx.session?.user.id
      );
      if (!userProfileData) throw new Error('User not found');
      return userProfileData;
    },
  })
);
