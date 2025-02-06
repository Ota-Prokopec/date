import { cookieStorage } from '@repo/cookies';

export const useColorTheme = () => {
  const [colorTheme, setColorTheme] = cookieStorage.useStorageValue('colorTheme');
  return { colorTheme, setColorTheme };
};
