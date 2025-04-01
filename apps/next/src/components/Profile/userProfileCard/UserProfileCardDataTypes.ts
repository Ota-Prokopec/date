import type { AccountData, IncompleteAccountData, UserProfileData } from '@repo/ts-types'

export type UserProfileCardData = AccountData | IncompleteAccountData | UserProfileData

export type UserProfileMiniCardData = Pick<
  AccountData | IncompleteAccountData | UserProfileData,
  'age' | 'gender' | 'username' | 'userId' | 'profilePictureURL'
>
