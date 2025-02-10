import { builder } from '@/builder';
import { type UpdateUserProfileType, type UserProfileType } from './PothosSchemaTypes';

export const UptateUserProfileRef = builder
  .objectRef<UpdateUserProfileType>('UpdateUserProfile')
  .implement({
    fields: (t) => ({
      userId: t.exposeString('userId', { nullable: false }),
    }),
  });
