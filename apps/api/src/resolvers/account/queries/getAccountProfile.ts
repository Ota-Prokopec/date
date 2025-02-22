import { builder } from '@/builder'
import { getUsersAge } from '@/lib/users/getUsers'
import type { UserPothosType } from '@/schema/PothosSchemaTypes'
import { db, drizzleSchema } from '@repo/db'

//add coords and age

builder.queryField('getAccountProfile', (t) =>
  t.field({
    type: 'Account',
    resolve: async (_parent, args, ctx) => {
      const userId = ctx.session?.user.id
      if (!userId) throw new Error('User is not authorizated to get user profile')

      const accountData = await db.query.user.findFirst({
        where: (userReference, { eq }) => eq(userReference.id, userId),
      })

      if (!accountData) throw new Error('User profile was not found')

      const usersCoords = await ctx.loaders.coords.load(userId)

      return {
        age: accountData?.birthDate ? getUsersAge(accountData?.birthDate) : null,
        bio: accountData?.bio,
        birthDate: accountData?.birthDate,
        coords: usersCoords,
        gender: accountData?.gender,
        lookingForGender: accountData?.lookingForGender,
        profilePictureURL: accountData?.image,
        userId: accountData?.id,
        username: accountData?.name,
      }
    },
  })
)
