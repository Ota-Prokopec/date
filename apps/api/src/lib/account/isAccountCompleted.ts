import { accountDataZodSchema, type AccountData, type IncompleteAccountData } from '@repo/ts-types'

type OmitedKeys = keyof Pick<AccountData, 'socials' | 'age' | 'isAccountCompleted'>

const omitedProperties = {
  age: true,
  isAccountCompleted: true,
  socials: true,
} satisfies Record<OmitedKeys, true>

const checkingSchema = accountDataZodSchema.omit(omitedProperties)

type IsAccountCompletedProp =
  | Omit<AccountData, OmitedKeys>
  | Omit<IncompleteAccountData, OmitedKeys>

export const isAccountCompleted = (accountData: IsAccountCompletedProp) => {
  return checkingSchema.safeParse(accountData).success
}
