import { createCoordsLoader } from './coordsLoader'
import { createSocialLoader } from './socialsLoader'
import { createUsersLoader } from './usersLoader'

export type Loaders = {
  users: ReturnType<typeof createUsersLoader>
  socials: ReturnType<typeof createSocialLoader>
  coords: ReturnType<typeof createCoordsLoader>
}

export const getLoaders = (): Loaders => ({
  users: createUsersLoader(),
  socials: createSocialLoader(),
  coords: createCoordsLoader(),
})
