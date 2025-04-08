import SchemaBuilder from '@pothos/core'
import DataloaderPlugin from '@pothos/plugin-dataloader'
import ZodPlugin from '@pothos/plugin-zod'
import { createContext } from './createContext'
import AddGraphQLPlugin from '@pothos/plugin-add-graphql'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import { Context as AuthContext } from './createContext'
import type { AuthScopes } from './authScopes'
import type { NonNullableObject } from '@repo/ts-types'

type getBuilderProps = {
  Objects: PothosSchemaTypes.UserSchemaTypes['Objects']
  Scalars: PothosSchemaTypes.UserSchemaTypes['Scalars']
  Context: PothosSchemaTypes.UserSchemaTypes['Context'] & AuthContext
  Args: PothosSchemaTypes.UserSchemaTypes['Inputs']
}

export const getBuilder = <Parameters extends getBuilderProps>() =>
  new SchemaBuilder<{
    Context: Parameters['Context']
    DefaultInputFieldRequiredness: true
    Objects: Parameters['Objects']
    Scalars: Parameters['Scalars']
    DefaultFieldNullability: false
    Inputs: Parameters['Args']
    AuthScopes: AuthScopes
    AuthContexts: {
      authenticated: Parameters['Context'] & NonNullableObject<AuthContext>
    }
  }>({
    defaultInputFieldRequiredness: true,
    defaultFieldNullability: false,
    plugins: [AddGraphQLPlugin, DataloaderPlugin, ZodPlugin, ScopeAuthPlugin],
    zod: {
      // optionally customize how errors are formatted
      validationError: (zodError, args, context, info) => {
        // the default behavior is to just throw the zod error directly
        return zodError
      },
    },
    scopeAuth: {
      authScopes: (context) => ({
        authenticated: !!context.session?.user.id,
      }),
    },
  })

export { createContext }
