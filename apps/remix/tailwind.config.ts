import { tailwindConfig } from '@repo/ui/tailwindConfig';

import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { plugin } from 'flowbite-react/tailwind';
import twAnimate from 'tailwindcss-animate';
import { merge } from 'lodash';

const config: Config = {
  ...tailwindConfig,
  theme: merge(tailwindConfig.theme, {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  }),
};

export default config;
