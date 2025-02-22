import { createCoordsLoader } from './coordsLoader'
import { createSocialLoader } from './socialsLoader'
import { createUserLoader } from './usersLoader'

export type Loaders = {
  users: ReturnType<typeof createUserLoader>
  socials: ReturnType<typeof createSocialLoader>
  coords: ReturnType<typeof createCoordsLoader>
}

export const getLoaders = (): Loaders => ({
  users: createUserLoader(),
  socials: createSocialLoader(),
  coords: createCoordsLoader(),
})
