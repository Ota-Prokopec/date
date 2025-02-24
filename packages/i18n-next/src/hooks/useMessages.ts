'use client'

import { useLocale, NestedKeyOf, NestedValueOf } from 'next-intl'
import { useEffect, useState } from 'react'
import { loadMessages } from '../loadMessages'
import { zodLocale } from '../options'

type Path = NestedKeyOf<IntlMessages>

export const useMessages = <TPath extends Path>(path?: TPath) => {
  const rootPath = path?.split('.').at(0) as keyof IntlMessages | undefined

  const locale = zodLocale.parse(useLocale())
  const [messages, setMessages] = useState<
    NestedValueOf<IntlMessages, TPath> | Pick<IntlMessages, keyof IntlMessages> | null
  >(null)

  useEffect(() => {
    loadMessages({ locale, paths: rootPath ? [rootPath] : [] }).then((messages) => {
      const nestedPath = path?.split('.')

      //! pathElement is typeof string, but expected to be NestedKeyOf<IntlMessages>
      if (nestedPath)
        setMessages(
          nestedPath?.reduce(
            //@ts-expect-error
            (acc, pathElement) => acc[pathElement] as unknown as NestedValueOf<IntlMessages, TPath>,
            messages
          ) as unknown as NestedValueOf<IntlMessages, TPath>
        )
      else setMessages(messages as unknown as Pick<IntlMessages, keyof IntlMessages>)
    })
  }, [locale])

  return { messages }
}
