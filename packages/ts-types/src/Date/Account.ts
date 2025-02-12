import type { Coords } from '../maps/Coords';
import type { Gender } from './GenderTypes';
import type { Socials } from './SocialPlatforms';

export type Account = {
  name: string;
  birthDate: Date;
  bio: string;
  socials: Socials | undefined | null;
  profilePictureURL: string;
  gender: Gender;
  lookingForGender: Gender;
  userId: string;
  coords: Coords;
};
