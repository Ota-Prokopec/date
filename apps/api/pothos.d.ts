import { SchemaTypes } from '@pothos/core'
import { PothosValidationPlugin } from '@pothos/plugin-validation'

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      validation: PothosValidationPlugin<Types>
    }
  }
}
