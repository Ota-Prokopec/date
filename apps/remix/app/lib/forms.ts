import { useState } from 'react';

type GetRequiredFormsData<Obj extends Record<string, unknown>> = {
  [Key in keyof Required<Obj>]: Obj[Key] extends NonNullable<unknown> ? Obj[Key] : never;
};

export const useForms = <TForms extends Record<string, unknown>>(
  defaultValues: TForms,
  callback: (data: TForms) => void
) => {
  const [data, update] = useState<TForms>(defaultValues);

  const mutate = () => {
    callback(data);
  };

  type Value = TForms[keyof TForms];
  type Functionalized = {
    [Key in keyof Required<TForms>]: (value: Value) => TForms[Key];
  };

  const updateItemProxy = new Proxy<Functionalized>({} as Functionalized, {
    get: (_, key: string) => {
      return (value: Value) => {
        update((prevData) => ({ ...prevData, [key]: value }));
        return true;
      };
    },
  });

  return {
    data,
    update,
    mutate,
    updateItem: updateItemProxy,
  };
};
