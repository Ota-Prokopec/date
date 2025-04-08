import { SchemaTypes } from '@pothos/core'
import { PothosValidationPlugin } from '@pothos/plugin-validation'
import { PothosScopeAuthPlugin } from '@pothos/plugin-scope-auth'

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      validation: PothosValidationPlugin<Types>
      scopeAuth: PothosScopeAuthPlugin<Types>
    }
  }
}
