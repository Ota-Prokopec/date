import type { AccountData, Coords, IncompleteAccountData, UserProfileData } from '@repo/ts-types'

export type CoordsPothosType = Coords

export type AccountPothosType = Omit<
  IncompleteAccountData | AccountData,
  'socials' | 'isAccountCompleted'
>
export type UserPothosType = Omit<UserProfileData, 'socials' | 'age'> & {
  birthDate: AccountData['birthDate']
}
