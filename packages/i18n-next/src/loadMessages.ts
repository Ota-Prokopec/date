import type { Locale } from './i18n'

type Path = keyof IntlMessages

const defaultPaths: Path[] = ['components', 'others', 'pages']

type LoadMessagesProps<TPaths extends Path[]> = {
  locale: Locale
  paths?: TPaths
}
type LoadMessagesReturnType<TPaths extends Path[]> = Promise<Pick<IntlMessages, TPaths[number]>>

type ImportType = IntlMessages[Path]
type MessagesPromiseType = Promise<{ path: Path; import: ImportType }>

export const loadMessages = async <TPaths extends Path[]>({
  locale,
  paths,
}: LoadMessagesProps<TPaths>): LoadMessagesReturnType<TPaths> => {
  const messagesPromise = (paths || defaultPaths).map(
    (path) =>
      new Promise<Awaited<MessagesPromiseType>>(async (res) => {
        const file: ImportType = (
          await import(`../../i18n-translations/src/locales/${locale}/${path}.json`)
        ).default
        res({ import: file, path: path })
      })
  )

  const messages = await Promise.all(messagesPromise)

  return messages.reduce(
    (acc, currentValue) => ({ ...acc, [currentValue.path]: currentValue.import }),
    {} as Awaited<LoadMessagesReturnType<TPaths>>
  )
}
