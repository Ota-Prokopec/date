// CS
import type csPages from './locales/cs/pages.json'
import type csComponents from './locales/cs/components.json'

// EN
import type enPages from './locales/en/pages.json'
import type enComponents from './locales/en/components.json'

export type Messages = {
  pages: typeof csPages & typeof enPages
  components: typeof enComponents & typeof csComponents
}

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line no-unused-vars
  interface IntlMessages extends Messages {}
  //  export type Locale = MessagesLocale;
}
