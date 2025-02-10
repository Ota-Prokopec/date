import { db } from '@repo/db';
import type { UserProfileData } from '@repo/ts-types';
import DataLoader from 'dataloader';

export const createUserLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const users = await db.query.user.findMany({
      where: (userSchema, { inArray }) => inArray(userSchema.id, userIds as string[]),
    });
    return users.map((user) => {
      const userAge = user.birthDate
        ? Math.floor(new Date(Date.now(), user.birthDate?.getTime()).getTime() * 1000 * 60 * 60 * 24 * 365)
        : null;

      return {
        userAge: userAge,
        userBio: user.bio,
        userGender: user.gender,
        userId: user.id,
        userName: user.name,
        userPictureUrl: user.image,
      } as UserProfileData;
    });
  });
