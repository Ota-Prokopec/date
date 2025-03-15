import { builder } from '@/builder'
import { updateAccountInformation } from '@/lib/account/updateAccount'
import { PothosArgsBuilder } from '@/lib/pothos/pothosArgsBuilder'
import { getFullAccountFormZodSchemaWithErrorMessages } from '@repo/forms/account-fullAccountZodSchema'
import { zodNullishProperties, type TypeCheck } from '@repo/ts-types'
import type { UpdateAccountArgs } from '../args/UpdateAccountArgs'

const zodSchemaPick = {
  bio: true,
  birthDate: true,
  gender: true,
  lookingForGender: true,
  socials: true,
  username: true,
} satisfies Record<keyof UpdateAccountArgs, true>

builder.mutationField('updateAccount', (t) =>
  t.field({
    type: 'Boolean',
    args: { userProfileData: t.arg({ type: 'UpdateAccountArgs' }) },
    resolve: async (_parent, notCheckedArgs, ctx) => {
      const zodSchema = zodNullishProperties(
        (await getFullAccountFormZodSchemaWithErrorMessages()).pick(zodSchemaPick),
        zodSchemaPick
      )

      const argsBuilder = new PothosArgsBuilder(zodSchema)

      const userProfileData = argsBuilder.parse(notCheckedArgs.userProfileData)

      // * Type-check
      type Check = TypeCheck<typeof userProfileData, UpdateAccountArgs>
      //   ^?

      const user = (await ctx).session?.user
      if (!user) throw new Error('User not authenticated')

      await updateAccountInformation(userProfileData satisfies UpdateAccountArgs, user.id)

      return true
    },
  })
)
