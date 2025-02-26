import { useMessages } from '@repo/i18n-next/react/useMessages'
import { getAccountDataZodSchemaWithErrorMessages } from '@repo/ts-types'
import { useEffect, useState } from 'react'

type ZodSchema = ReturnType<typeof getAccountDataZodSchemaWithErrorMessages>

export const useAccountFormDataZodSchemaWithErrorMessages = () => {
  const { messages } = useMessages('others.accountZodSchemaWithErrorMessages')
  const [zodSchema, setZodSchema] = useState<ZodSchema | undefined>(undefined)

  useEffect(() => {
    if (messages) setZodSchema(getAccountDataZodSchemaWithErrorMessages(messages))
  }, [messages])

  return { zodSchema }
}
