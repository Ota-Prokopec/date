import type { ReactNode } from 'react'
import { toast, type ExternalToast } from 'sonner'

type Types = {
  error: typeof toast.error
  warning: typeof toast.warning
  loading: typeof toast.loading
  message: typeof toast.message
  success: typeof toast.success
}

type MessageFn = (
  message: string | ReactNode,
  condition: boolean,
  options?: ExternalToast
) => () => void

type MessageFnParams = Parameters<MessageFn>

const types = {
  error: toast.error,
  warning: toast.warning,
  loading: toast.loading,
  message: toast.message,
  success: toast.success,
} as unknown as {
  [Key in keyof Types]: MessageFn
}

type TypeKeys = keyof typeof types

export const messages = new Proxy(types, {
  get: (target, prop, receiver) => {
    return (
      message: MessageFnParams[0],
      condition: MessageFnParams[1],
      options?: MessageFnParams[2]
    ) => {
      let id: string | number | undefined = undefined
      if (condition)
        id = (target as unknown as Types)[prop as TypeKeys](message, {
          dismissible: true,
          ...options,
        })
      return () => toast.dismiss(id)
    }
  },
})
