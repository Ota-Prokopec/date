import { Locale as TranslationsLocale } from './options';
// CS
import type csPages from '../../i18n-translations/locales/cs/pages.json';
import type csComponents from '../../i18n-translations/locales/cs/components.json';

// EN
import type enPages from '../../i18n-translations/locales/en/pages.json';
import type enComponents from '../../i18n-translations/locales/en/components.json';

type Messages = {
  pages: typeof csPages & typeof enPages;
  components: typeof enComponents & typeof csComponents;
};

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line no-unused-vars
  interface IntlMessages extends Messages {}
  export type Locale = TranslationsLocale;
}
