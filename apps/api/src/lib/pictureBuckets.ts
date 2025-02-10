import { Cloudinary } from '@repo/cloudinary';

import { v2 as cloudinary, type ConfigOptions } from 'cloudinary';
import { env } from './env';

const options = cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLODINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

const getBuckets = (options: ConfigOptions, rootFileName: string) => {
  const profilePictures = new Cloudinary(options, `${rootFileName}/profile-pictures`);

  return {
    profilePictures,
  };
};

export const buckets = getBuckets(options, env.CLOUDINARY_ROOT_FOLDER_NAME ?? '');
