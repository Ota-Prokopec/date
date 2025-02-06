import { i18nRouting } from './options';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = i18nRouting;
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

const nextRouting = createSharedPathnamesNavigation(routing) as ReturnType<typeof createSharedPathnamesNavigation>;
type NextRouting = typeof nextRouting;

export const Link: NextRouting['Link'] = nextRouting['Link'];
export const redirect: NextRouting['redirect'] = nextRouting['redirect'];
export const usePathname: NextRouting['usePathname'] = nextRouting['usePathname'];
export const useRouter: NextRouting['useRouter'] = nextRouting['useRouter'];
