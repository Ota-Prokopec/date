import { builder } from '@/builder'
import { type AccountPothosType } from './PothosSchemaTypes'
import type { AccountData } from '@repo/ts-types'
import { getUsersAge } from '@/lib/users/getUsers'
import { getCoordsForUser } from '@/lib/coords/getCoordsForUser'

export const AccountRef = builder.objectRef<AccountPothosType>('Account').implement({
  fields: (t) =>
    ({
      userId: t.exposeString('userId', { nullable: false }),
      username: t.exposeString('username', { nullable: false }),
      birthDate: t.expose('birthDate', { type: 'Date' }),
      bio: t.exposeString('bio'),
      profilePictureURL: t.exposeString('profilePictureURL'),
      gender: t.expose('gender', { type: 'Gender' }),
      lookingForGender: t.expose('gender', { type: 'Gender' }),
      coords: t.field({
        type: 'Coords',
        nullable: true,
        resolve: async (parent) => {
          const coords = (await getCoordsForUser([parent.userId])).at(0)
          return coords
        },
      }),
      age: t.field({
        type: 'Int',
        nullable: true,
        resolve: (parent) => (parent.birthDate ? getUsersAge(parent.birthDate) : null),
      }),
      socials: t.field({
        type: 'Socials',
        resolve: async (parent, args, ctx, info) => {
          const response = await ctx.loaders.socials.load(parent.userId)
          return response
        },
      }),
    }) satisfies Record<keyof AccountData, unknown>,
})
