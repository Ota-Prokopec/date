import customScalarsExchange from 'urql-custom-scalars-exchange'
import schema from '@graphql/generated/client-schema.json'

export const urqlCustomScalarsExchange = customScalarsExchange({
  schema: schema,
  scalars: { Date: (value) => new Date(value) },
})
