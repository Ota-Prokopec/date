import type { Coords, UserProfileData } from '@repo/ts-types';

export type UserProfileType = UserProfileData;
export type UpdateUserProfileType = Pick<UserProfileData, 'userId'>;

export type CoordsType = Coords;
export type AccountType = { userId: string };
