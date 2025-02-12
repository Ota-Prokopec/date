import { builder } from '@/builder';
import { db } from '@repo/db';
import { and, eq } from '@repo/db/orm';
import * as schema from '@repo/db/schema';
import type { SocialProfilePlatform } from '@repo/ts-types';
import { getObjectKeys } from '@repo/utils/common/object';

builder.mutationField('updateUserProfile', (t) =>
  t.field({
    type: 'Boolean',
    args: { userProfileData: t.arg({ type: 'UpdateAccountArgs' }) },
    resolve: async (_parent, args, ctx) => {
      const user = (await ctx).session?.user;
      if (!user) throw new Error('User not authenticated');

      const { gender, bio, birthDate, socials, lookingForGender } = args.userProfileData;
      let awaiting: unknown[] = [];

      // updating user's information
      awaiting.push(
        db
          .update(schema.user)
          .set({ bio, gender, birthDate, lookingForGender })
          .where(eq(schema.user.id, user.id))
      );

      //updating user's socials
      if (socials) {
        const socialsTypes: SocialProfilePlatform[] = getObjectKeys(socials);
        const usersSocialsUpdatePromise = socialsTypes.map((socialType) =>
          db
            .update(schema.socials)
            .set({
              link: socials[socialType].link,
              platformProfileId: socials[socialType].profileId,
            })
            .where(and(eq(schema.socials.userId, user.id), eq(schema.socials.type, socialType)))
        );

        awaiting.push(...usersSocialsUpdatePromise);
      }

      // awaiting - no info result
      await Promise.all(awaiting);

      return true;
    },
  })
);
