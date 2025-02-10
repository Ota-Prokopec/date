import { builder } from '@/builder';
import { type UserProfileType } from './PothosSchemaTypes';

export const UserRef = builder.objectRef<UserProfileType>('UserProfile').implement({
  fields: (t) => ({
    userId: t.exposeString('userId', { nullable: false }),
    userPictureUrl: t.exposeString('userPictureUrl', { nullable: true }),
    userAge: t.exposeInt('userAge', { nullable: true }),
    userGender: t.exposeString('userGender', { nullable: true }),
    userBio: t.exposeString('userBio', { nullable: true }),
    userName: t.exposeString('userName', { nullable: false }),
  }),
});
