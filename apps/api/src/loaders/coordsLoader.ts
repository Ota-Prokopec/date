import { getCoordsForUser } from '@/lib/coords/getCoordsForUser'
import DataLoader from 'dataloader'

export const createCoordsLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const coords = await getCoordsForUser(userIds as string[])

    return coords
  })
