export type HasDuplicatedProperties<
  T extends object[],
  K extends keyof T[number],
  Seen = never,
> = T extends [infer First extends Record<K, any>, ...infer Rest extends object[]]
  ? First[K] extends Seen
    ? true
    : HasDuplicatedProperties<Rest, K, Seen | First[K]>
  : false
