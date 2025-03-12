import type { Session } from '@repo/better-auth/types'
import { db } from '@repo/db'
import type { AccountData } from '@repo/ts-types'

export const getAccount = async (session: Session): Promise<Omit<AccountData, 'socials'>> => {
  const accountData = await db.query.user.findFirst({
    where: (userReference, { eq }) => eq(userReference.id, session.user.id),
  })

  if (!accountData) throw new Error('User profile was not found')

  return {
    bio: accountData?.bio,
    birthDate: accountData?.birthDate,
    gender: accountData?.gender,
    lookingForGender: accountData?.lookingForGender,
    profilePictureURL: accountData?.image,
    userId: accountData?.id,
    username: accountData?.name,
  }
}
