import { builder } from '@/builder'
import { type SwipePothosType } from './PothosSchemaTypes'

export const SwipeRef = builder.objectRef<SwipePothosType>('Swipe').implement({
  fields: (t) =>
    ({
      isMatch: t.exposeBoolean('isMatch', { nullable: false }),
    }) satisfies Record<keyof SwipePothosType, unknown>,
})
