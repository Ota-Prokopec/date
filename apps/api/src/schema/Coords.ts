import { builder } from '@/builder'
import { CoordsPothosType } from './PothosSchemaTypes'
import type { Coords } from '@repo/ts-types'

export const CoordsRef = builder.objectRef<CoordsPothosType>('coords').implement({
  fields: (t) =>
    ({
      lng: t.exposeFloat('lng', { nullable: false }),
      lat: t.exposeFloat('lat', { nullable: false }),
    }) satisfies Record<keyof Coords, unknown>,
})
