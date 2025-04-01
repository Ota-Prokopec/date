import type { UserSelect } from '@repo/db'
import type { AccountData, UserProfileData } from '@repo/ts-types'
import { checkNonNullablePropertiesInObject } from '@repo/utils/common/nonNullableObject'

/**
 * @param {UserSelect[]} responseArray - must include "gender"|"image"|"lookingForGender"|"birghtDate" as nonNullable values
 */
export const convertFromDatabaseUsersToAppUsers = (responseArray: UserSelect[]) => {
  return responseArray.map((user) => {
    //! Only collumns in notNullableCollumns can have ! mark, so that i am sure, there will be valid values
    const standartisedUser = checkNonNullablePropertiesInObject(user, [
      'gender',
      'image',
      'lookingForGender',
      'birthDate',
    ])

    return {
      bio: standartisedUser.bio,
      gender: standartisedUser.gender,
      userId: standartisedUser.id,
      username: standartisedUser.name,
      profilePictureURL: standartisedUser.image,
      lookingForGender: standartisedUser.lookingForGender,
      birthDate: standartisedUser.birthDate,
    } satisfies Omit<UserProfileData, 'socials' | 'age'> & { birthDate: AccountData['birthDate'] }
  })
}
