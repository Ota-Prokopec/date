import type { ReactNode } from 'react'
import { toast, type ExternalToast } from 'sonner'

type Types = {
  error: typeof toast.error
  warning: typeof toast.warning
  loading: typeof toast.loading
  message: typeof toast.message
  success: typeof toast.success
}

const types = {
  error: toast.error,
  warning: toast.warning,
  loading: toast.loading,
  message: toast.message,
  success: toast.success,
} as unknown as {
  [Key in keyof Types]: (
    message: string | ReactNode,
    options?: ExternalToast
  ) => () => string | number
}

type TypeKeys = keyof typeof types

export const messages = new Proxy(types, {
  get: (target, prop, receiver) => {
    return (message: string | ReactNode, options?: ExternalToast) => {
      const id = (target as unknown as Types)[prop as TypeKeys](message, options)
      return () => toast.dismiss(id)
    }
  },
})
