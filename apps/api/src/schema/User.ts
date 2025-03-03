import { builder } from '@/builder'
import { type UserPothosType } from './PothosSchemaTypes'
import type { UserProfileData } from '@repo/ts-types'

/**
 * If the user does not have username, ...., then the user is not searchable!
 * So there will just be nonNullable values
 */

export const UserRef = builder.objectRef<UserPothosType>('User').implement({
  fields: (t) =>
    ({
      userId: t.exposeString('userId', { nullable: false }),
      profilePictureURL: t.exposeString('profilePictureURL', { nullable: false }),
      age: t.exposeInt('age', { nullable: false }),
      gender: t.expose('gender', { type: 'Gender', nullable: false }),
      bio: t.exposeString('bio', { nullable: true }),
      username: t.exposeString('username', { nullable: false }),
      lookingForGender: t.expose('gender', { type: 'Gender', nullable: false }),
      socials: t.field({
        type: 'Socials',
        nullable: true,

        resolve: async (parent, args, ctx, info) => {
          const response = await ctx.loaders.socials.load(parent.userId)
          return response || {}
        },
      }),
    }) satisfies Record<keyof UserProfileData, unknown>,
})
