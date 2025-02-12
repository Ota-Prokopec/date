export const getObjectKeys = <TObject extends Record<string, unknown>>(
  object: TObject
): (keyof TObject)[] => {
  return Object.keys(object) as (keyof TObject)[];
};
