import type { Session } from '@repo/better-auth/types'
import { db } from '@repo/db'
import * as schema from '@repo/db/schema'
import type { UploadApiResponse } from 'cloudinary'
import { buckets } from '../pictureBuckets'

const profilePicturesCDNBaseUrl = buckets.profilePictures.getBucketsBaseUrl()

/**
 * If the picture is already from (my) cloudinary -> it will be deleted
 * Anyways new picture will be loaded to CDN and record in DB will be changed
 * */
export const updateAccountProfilePicture = async (session: Session, newPictureFile: File) => {
  const currentPicture = session.user.image

  const alreadyHasPictureOnCdn = currentPicture
    ? currentPicture?.includes(profilePicturesCDNBaseUrl)
    : false
  let awaiting: [Promise<'deleted'> | null, Promise<UploadApiResponse> | null] = [null, null]

  if (alreadyHasPictureOnCdn && currentPicture) {
    const CDNfileName = buckets.profilePictures.getFileNameFromUrl(currentPicture)
    awaiting[0] = buckets.profilePictures.deleteFiles(CDNfileName)
  }

  awaiting[1] = buckets.profilePictures.uploadFile(newPictureFile)

  const [deliting, upload] = await Promise.all(awaiting)

  const newUrl = upload?.secure_url
  if (!newUrl) throw new Error('Picture could not be uploaded to Cloudinary CDN service.')

  return db.update(schema.user).set({ image: newUrl })
}
