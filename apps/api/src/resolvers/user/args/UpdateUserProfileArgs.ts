import { builder } from '@/builder';
import type { UploadScalar } from '@/scalars/ScalarsTypes';
import type { Gender, UserProfileData } from '@repo/ts-types';

export type UpdateUserProfileArgs = {
  bio?: string;
  username: string;
  gender?: Gender;
};

builder.inputType('UpdateUserProfileArgs', {
  fields: (t) => ({
    username: t.string({ required: true }),
    bio: t.string({ required: false }),
    gender: t.field({ type: 'Gender', required: false }),
  }),
});
