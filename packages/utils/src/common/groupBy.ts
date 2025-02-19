export const groupBy = <TArray extends Iritable<Record<string, unknown>>>(arr: TArray, keys: keyof TArray[number]) => {

  Object.groupBy<keyof TArray[number],TArray> (arr, (item) => item.)
