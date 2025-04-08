import type {
  AccountData,
  Coords,
  IncompleteAccountData,
  SwipeResponse,
  UserProfileData,
} from '@repo/ts-types'

export type CoordsPothosType = Coords

export type AccountPothosType = Omit<
  IncompleteAccountData | AccountData,
  'socials' | 'isAccountCompleted'
>
export type UserPothosType = Omit<UserProfileData, 'socials' | 'age'> & {
  birthDate: AccountData['birthDate']
}

export type SwipePothosType = SwipeResponse
