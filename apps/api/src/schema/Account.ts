import { builder } from '@/builder'
import { type AccountPothosType } from './PothosSchemaTypes'
import { accountDataZodSchema, type AccountData } from '@repo/ts-types'
import { getCoordsForUser } from '@/lib/coords/getCoordsForUser'
import { accountActions } from '@/lib/account/accountActions'
import { getUsersAge } from '@/lib/users/getUsersAge'

export const AccountRef = builder.objectRef<AccountPothosType>('Account').implement({
  fields: (t) =>
    ({
      userId: t.exposeString('userId', { nullable: false }),
      username: t.exposeString('username', { nullable: false }),
      birthDate: t.expose('birthDate', { type: 'Date', nullable: true }),
      bio: t.exposeString('bio', { nullable: true }),
      profilePictureURL: t.exposeString('profilePictureURL', { nullable: true }),
      gender: t.expose('gender', { type: 'Gender', nullable: true }),
      lookingForGender: t.expose('gender', { type: 'Gender', nullable: true }),
      // coords: t.field({
      //   type: 'Coords',
      //   nullable: true,
      //   resolve: async (parent) => {
      //     const coords = (await getCoordsForUser([parent.userId])).at(0)
      //     return coords
      //   },
      // }),
      age: t.field({
        type: 'Int',
        nullable: true,
        resolve: (parent) => (parent.birthDate ? getUsersAge(parent.birthDate) : null),
      }),
      socials: t.field({
        type: 'Socials',
        nullable: false,
        resolve: async (parent, args, ctx, info) => {
          const response = await ctx.loaders.socials.load(parent.userId)
          return response ?? {}
        },
      }),
      isAccountCompleted: t.field({
        nullable: false,
        type: 'Boolean',
        resolve: (parent) => {
          //? Omit isAccountCompleted property - because there will never be isAccountCompleted in parent
          return accountActions.isAccountCompleted(parent)
        },
      }),
    }) satisfies Record<keyof AccountData, unknown>,
})
