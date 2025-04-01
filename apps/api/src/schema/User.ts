import { builder } from '@/builder'
import { getUsersAge } from '@/lib/users/getUsersAge'
import { type UserPothosType } from './PothosSchemaTypes'

/**
 * If the user does not have username, ...., then the user is not searchable!
 * So there will just be nonNullable values
 */

export const UserRef = builder.objectRef<UserPothosType>('User').implement({
  fields: (t) =>
    ({
      userId: t.exposeString('userId', { nullable: false }),
      profilePictureURL: t.exposeString('profilePictureURL', { nullable: false }),
      gender: t.expose('gender', { type: 'Gender', nullable: false }),
      username: t.exposeString('username', { nullable: false }),
      lookingForGender: t.expose('gender', { type: 'Gender', nullable: false }),
      bio: t.exposeString('bio', { nullable: true }),
      socials: t.field({
        type: 'Socials',
        nullable: false,
        resolve: async (parent, args, ctx, info) => {
          const response = await ctx.loaders.socials.load(parent.userId)
          return response || {}
        },
      }),
      age: t.field({
        type: 'Int',
        nullable: false,
        resolve: (parent) => getUsersAge(parent.birthDate),
      }),
    }) satisfies Omit<Record<keyof UserPothosType | 'socials' | 'age', unknown>, 'birthDate'>,
})
