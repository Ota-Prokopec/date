import type { Gender } from './GenderTypes';
import type { Socials } from './SocialPlatforms';

export type UserProfile = {
  name: string;
  age: number;
  bio: string;
  socials: Socials | undefined | null;
  profilePictureURL: string;
  gender: Gender;
  lookigForGender: Gender;
};
