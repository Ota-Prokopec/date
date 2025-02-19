import type { NonNullishItemsOnly, NonOptionalItemsOnly } from '@repo/ts-types'

export const groupBy = <TArray extends Record<string, PropertyKey | null | undefined>[]>(
  arr: TArray,
  callback: (
    item: NonOptionalItemsOnly<NonNullishItemsOnly<TArray[number]>>,
    index: number
  ) => TArray[number][keyof TArray[number]]
) => {
  //@ts-ignore
  const grouped = Object.groupBy(arr, callback)
  //@ts-ignore
  return Object.entries(grouped).map(([_key, value]) => value) as TArray[]
}
