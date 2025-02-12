import SchemaBuilder from '@pothos/core';
import { createContext } from './createContext';
import DataloaderPlugin from '@pothos/plugin-dataloader';

type getBuilderProps = {
  Objects: PothosSchemaTypes.UserSchemaTypes['Objects'];
  Scalars: PothosSchemaTypes.UserSchemaTypes['Scalars'];
  Context: PothosSchemaTypes.UserSchemaTypes['Context'];
  Args: PothosSchemaTypes.UserSchemaTypes['Inputs'];
};

export const getBuilder = <Parameters extends getBuilderProps>() =>
  new SchemaBuilder<{
    Context: Parameters['Context'];
    DefaultInputFieldRequiredness: true;
    Objects: Parameters['Objects'];
    Scalars: Parameters['Scalars'];
    DefaultFieldNullability: true;
    Inputs: Parameters['Args'];
  }>({
    defaultInputFieldRequiredness: true,

    plugins: [DataloaderPlugin],
  });

export { createContext };
