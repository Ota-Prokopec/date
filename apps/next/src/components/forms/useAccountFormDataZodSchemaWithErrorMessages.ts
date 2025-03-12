import { useMessages } from '@repo/i18n-next/react/useMessages'
import { getEditAccountDataZodSchemaWithErrorMessages } from '@repo/ts-types'
import { useEffect, useState } from 'react'
import { loadMessages } from '../../../../../packages/i18n-next/src/loadMessages'
import { cookieStorage } from '@repo/cookies'

type ZodSchema = ReturnType<typeof getEditAccountDataZodSchemaWithErrorMessages>

export const useAccountFormDataZodSchemaWithErrorMessages = () => {
  const { messages } = useMessages('others.accountZodSchemaWithErrorMessages')
  const [zodSchema, setZodSchema] = useState<ZodSchema | undefined>(undefined)

  useEffect(() => {
    if (messages) setZodSchema(getEditAccountDataZodSchemaWithErrorMessages(messages))
  }, [messages])

  return zodSchema
}

export const getAccountFormDataZodSchemaWithErrorMessages = async () => {
  const locale = cookieStorage.proxyStorage().locale
  const messages = await loadMessages({
    locale,
    paths: ['others'],
  })
  return getEditAccountDataZodSchemaWithErrorMessages(
    messages.others.accountZodSchemaWithErrorMessages
  )
}
