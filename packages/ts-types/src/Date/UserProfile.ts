import type { NonNullableObject } from '../../src/Helpers/NonNullableObject'
import type { Account } from './Account'

export type UserProfile = NonNullableObject<
  Required<
    Pick<
      Account,
      'username' | 'userId' | 'socials' | 'profilePictureURL' | 'gender' | 'lookingForGender'
    > & { age: number; bio: Account['bio'] }
  >
>
