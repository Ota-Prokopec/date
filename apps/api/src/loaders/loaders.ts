import { createUserLoader } from './usersLoader'

export type Loaders = {
  users: ReturnType<typeof createUserLoader>
}

export const loaders: Loaders = {
  users: createUserLoader(),
}
