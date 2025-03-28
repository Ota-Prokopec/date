import SchemaBuilder from '@pothos/core'
import DataloaderPlugin from '@pothos/plugin-dataloader'
import ZodPlugin from '@pothos/plugin-zod'
import { createContext } from './createContext'
import AddGraphQLPlugin from '@pothos/plugin-add-graphql'

type getBuilderProps = {
  Objects: PothosSchemaTypes.UserSchemaTypes['Objects']
  Scalars: PothosSchemaTypes.UserSchemaTypes['Scalars']
  Context: PothosSchemaTypes.UserSchemaTypes['Context']
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
  }>({
    defaultInputFieldRequiredness: true,
    defaultFieldNullability: false,
    plugins: [AddGraphQLPlugin, DataloaderPlugin, ZodPlugin],
    zod: {
      // optionally customize how errors are formatted
      validationError: (zodError, args, context, info) => {
        // the default behavior is to just throw the zod error directly
        return zodError
      },
    },
  })

export { createContext }
