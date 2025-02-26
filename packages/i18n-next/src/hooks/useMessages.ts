'use client'

import { useLocale, NestedKeyOf, NestedValueOf } from 'next-intl'
import { useEffect, useState } from 'react'
import { loadMessages } from '../loadMessages'
import { zodLocale } from '../options'

type Path = NestedKeyOf<IntlMessages>

export const useMessages = <TPath extends Path>(path: TPath) => {
  const rootPath = path?.split('.').at(0) as keyof IntlMessages

  const locale = zodLocale.parse(useLocale())
  const [messages, setMessages] = useState<NestedValueOf<IntlMessages, TPath> | null>(null)

  useEffect(() => {
    loadMessages({ locale, paths: [rootPath] }).then((messages) => {
      const nestedPath = path?.split('.')

      setMessages(() => {
        return nestedPath?.reduce(
          //@ts-expect-error
          (acc, pathElement) => acc[pathElement] as unknown as NestedValueOf<IntlMessages, TPath>,
          messages
        ) as unknown as NestedValueOf<IntlMessages, TPath>
      })
    })
  }, [locale])

  return { messages }
}
