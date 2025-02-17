import { Coords, type Gender, type GraphqlHealth, type Socials } from '@repo/ts-types'
import type { FileUpload } from 'graphql-upload/processRequest.mjs'

type ScalarSkeleton<Input extends {}, Output extends {}> = {
  Input: Input
  Output: Output
}

export type CoordsScalar = ScalarSkeleton<Coords, Coords>
export type GraphqlHealthScalar = ScalarSkeleton<GraphqlHealth, GraphqlHealth>
export type GenderScalar = ScalarSkeleton<Gender, Gender>
export type FileScalar = ScalarSkeleton<File, never>
export type DateScalar = ScalarSkeleton<string, Date>
export type SocialsScalar = ScalarSkeleton<Socials, Socials>
