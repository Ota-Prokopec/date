export type MakeOptional<T extends Record<string, unknown>, O extends keyof T> = {
  [Key in keyof T]: O extends T[Key] ? T[Key] | undefined | null : T[Key];
};

type T = MakeOptional<{ a: string, b: string, c: string }, 'a'|"b">;
