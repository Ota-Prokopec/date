import { builder } from '@/builder';
import { type AccountPothosType } from './PothosSchemaTypes';

export const AccountRef = builder.objectRef<AccountPothosType>('Account').implement({
  fields: (t) => ({
    userId: t.exposeString('userId', { nullable: false }),
    name: t.exposeString('name'),
    birthDate: t.expose('birthDate', { type: 'Date' }),
    bio: t.exposeString('bio'),
    socials: t.expose('socials', { type: 'Socials' }),
    profilePictureURL: t.exposeString('profilePictureURL'),
    gender: t.expose('gender', { type: 'Gender' }),
    lookigForGender: t.expose('gender', { type: 'Gender' }),
    coords: t.expose('coords', { type: 'Coords' }),
  }),
});
