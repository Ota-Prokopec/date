import {
  Coords,
  type Gender,
  type GraphqlHealth,
  type SocialsData,
  type SwipeType,
} from '@repo/ts-types'

type ScalarSkeleton<Input extends {}, Output extends {}> = {
  Input: Input
  Output: Output
}

export type CoordsScalar = ScalarSkeleton<Coords, Coords>
export type GraphqlHealthScalar = ScalarSkeleton<GraphqlHealth, GraphqlHealth>
export type GenderScalar = ScalarSkeleton<Gender, Gender>
export type UploadScalar = ScalarSkeleton<File, never>
export type DateScalar = ScalarSkeleton<Date, Date>
export type SocialsScalar = ScalarSkeleton<SocialsData, SocialsData>
export type SwipeTypeScalar = ScalarSkeleton<SwipeType, SwipeType>
