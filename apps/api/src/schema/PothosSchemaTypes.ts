import type { AccountData, Coords, UserProfileData } from '@repo/ts-types'

export type CoordsPothosType = Coords
export type AccountPothosType = Omit<AccountData, 'socials'>
export type UserPothosType = Omit<UserProfileData, 'socials'>
