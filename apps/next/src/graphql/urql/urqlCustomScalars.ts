import customScalarsExchange from 'urql-custom-scalars-exchange'
import schema from '@graphql/generated/client-schema.json'
import type { IntrospectionQuery } from 'graphql'

export const urqlCustomScalarsExchange = customScalarsExchange({
  schema: schema as unknown as IntrospectionQuery,
  scalars: { Date: (value) => new Date(value) },
})
