export type ErrorMessage<T extends string> = T & {
  __type_error_message: never
}
