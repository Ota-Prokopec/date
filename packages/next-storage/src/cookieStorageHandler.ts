import { parseCookies as nookiesGetCookies, setCookie, destroyCookie } from 'nookies';
import { safeParseValue } from './safeParseValue';
import { type NextCookiesReturnType } from '@repo/ts-types';

export const getCookieStorageData = (): Record<string, any> => {
  const cookies = Object.entries(nookiesGetCookies())
    .map(([key, value]) => ({ name: key, value: value }))
    .reduce((acc, value) => [...acc, value], [] as NextCookiesReturnType);

  return parseCookies(cookies);
};

export const parseCookies = (cookies: NextCookiesReturnType): Record<string, string> => {
  return cookies
    .map(({ name, value }) => ({ [name]: safeParseValue(value) }))
    .reduce((acc, value) => ({ ...acc, ...value }), {} as Record<string, string>);
};

export const fromStringCookieToNextCookies = (cookieString: string): NextCookiesReturnType => {
  return cookieString
    .split('; ')
    .filter((item) => !!item)
    .map((item) => {
      const [name, value] = item.split('=');

      if (!name || !value) throw new Error('Cookies are not consistent');
      return {
        name,
        value,
      };
    });
};

export const setCookieItem = (key: string, value: string) => {
  setCookie(null, key, JSON.stringify(value));
};
export const removeCookieItem = (key: string) => destroyCookie(null, key);
