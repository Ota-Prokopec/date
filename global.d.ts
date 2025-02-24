import './packages/i18n-translations/src/types'

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line no-unused-vars
  interface Hello {
    cs: 'hello'
  }
  //  export type Locale = MessagesLocale;
}
