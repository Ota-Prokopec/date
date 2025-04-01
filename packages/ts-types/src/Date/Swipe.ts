import { z, type TypeOf } from 'zod'

export const swipeTypeZodSchema = z.tuple([z.literal('like'), z.literal('dislike')])

export type SwipeType = TypeOf<typeof swipeTypeZodSchema>
