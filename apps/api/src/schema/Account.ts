import { builder } from '@/builder'
import { type AccountPothosType } from './PothosSchemaTypes'
import type { AccountData } from '@repo/ts-types'

export const AccountRef = builder.objectRef<AccountPothosType>('Account').implement({
  fields: (t) =>
    ({
      userId: t.exposeString('userId', { nullable: false }),
      username: t.exposeString('username'),
      birthDate: t.expose('birthDate', { type: 'Date' }),
      bio: t.exposeString('bio'),
      socials: t.expose('socials', { type: 'Socials' }),
      profilePictureURL: t.exposeString('profilePictureURL'),
      gender: t.expose('gender', { type: 'Gender' }),
      lookingForGender: t.expose('gender', { type: 'Gender' }),
      coords: t.expose('coords', { type: 'Coords' }),
    }) satisfies Record<keyof AccountData, unknown>,
})
