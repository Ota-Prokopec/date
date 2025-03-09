import introspectionResult from '@/graphql/generated/client-schema.json'
import { buildClientSchema, type IntrospectionQuery } from 'graphql'
import { withScalars } from 'apollo-link-scalars'
import { DateTimeISOResolver } from 'graphql-scalars'

const schema = buildClientSchema(introspectionResult as unknown as IntrospectionQuery)

export const apolloCustomScalarsLink = withScalars({
  schema,
  typesMap: {
    Date: DateTimeISOResolver,
  },
})
