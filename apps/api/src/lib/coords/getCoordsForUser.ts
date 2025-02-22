import { db } from '@repo/db'
import { Coords } from '@repo/ts-types'

export const getCoordsForUser = async (userIds: string[]) => {
  const res = await db.query.coords.findMany({
    where: (coordsReference, { inArray }) => inArray(coordsReference.userId, userIds),
  })

  const grouped = Object.groupBy(res, (item) => item.userId)
  //! group with userId and sort for userIds
  return userIds.map((userId) => {
    const coordsParams = grouped[userId]?.at(0)
    return coordsParams
      ? ({ lat: coordsParams.latitude, lng: coordsParams.longitude } satisfies Coords)
      : undefined
  })
}
