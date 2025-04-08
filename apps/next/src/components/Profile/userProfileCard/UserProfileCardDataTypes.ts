import type {
  AccountData,
  IncompleteAccountData,
  PothosOptionalObjectByKeys,
  UserProfileData,
} from '@repo/ts-types'

export type UserProfileCardData = PothosOptionalObjectByKeys<
  AccountData | IncompleteAccountData | UserProfileData,
  'socials'
>

export type UserProfileMiniCardData = Pick<
  AccountData | IncompleteAccountData | UserProfileData,
  'age' | 'gender' | 'username' | 'userId' | 'profilePictureURL'
>
