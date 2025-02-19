import { createSocialLoader } from './socialsLoader'
import { createUserLoader } from './usersLoader'

export type Loaders = {
  users: ReturnType<typeof createUserLoader>
  socials: ReturnType<typeof createSocialLoader>
}

export const getLoaders = (): Loaders => ({
  users: createUserLoader(),
  socials: createSocialLoader(),
})
