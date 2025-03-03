import { useMessages } from '@repo/i18n-next/react/useMessages'
import { getEditAccountDataZodSchemaWithErrorMessages } from '@repo/ts-types'
import { useEffect, useState } from 'react'

type ZodSchema = ReturnType<typeof getEditAccountDataZodSchemaWithErrorMessages>

export const useAccountFormDataZodSchemaWithErrorMessages = () => {
  const { messages } = useMessages('others.accountZodSchemaWithErrorMessages')
  const [zodSchema, setZodSchema] = useState<ZodSchema | null>(null)

  useEffect(() => {
    if (messages) setZodSchema(getEditAccountDataZodSchemaWithErrorMessages(messages))
  }, [messages])

  return { zodSchema }
}
