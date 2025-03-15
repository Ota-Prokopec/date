// CS
import type csPages from './locales/cs/pages.json'
import type csComponents from './locales/cs/components.json'
import type csOthers from './locales/cs/others.json'
import type csForms from './locales/cs/forms.json'

// EN
import type enPages from './locales/en/pages.json'
import type enComponents from './locales/en/components.json'
import type enOthers from './locales/en/others.json'
import type enForms from './locales/en/forms.json'

export type Messages = {
  pages: typeof csPages & typeof enPages
  components: typeof enComponents & typeof csComponents
  others: typeof enOthers & typeof csOthers
  forms: typeof enForms & typeof csForms
}

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line no-unused-vars
  interface IntlMessages extends Messages {}
  //  export type Locale = MessagesLocale;
}
