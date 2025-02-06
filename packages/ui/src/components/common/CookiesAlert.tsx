'use client';

import { LiaCookieSolid } from 'react-icons/lia';
import { cn } from '../../lib/utils';
import { Column } from './Column';
import { Text } from './Text';
import { cookieStorage } from '@repo/cookies';
import { Card } from '../shadcn/card';
import { Button } from '../shadcn/button';
import { useTranslations } from 'next-intl';

export type CookiesAlertProps = {};

export const CookiesAlert = ({}: CookiesAlertProps) => {
  const [cookiesAccepted, setCookiesAccepted] = cookieStorage.useStorageValue('cookiesAccepted');
  const cookieAlertTranslations = useTranslations('components.CookieAlert');

  const acceptCookies = () => setCookiesAccepted(true);

  return (
    <Card
      className={cn('border-1 rounded-2xl fixed bottom-0 w-[calc(100%-16px)] h-auto p-4 m-2 max-w-[600px] z-[1000]', {
        hidden: cookiesAccepted,
      })}
    >
      <Column className="gap-2">
        <LiaCookieSolid className="w-8 h-8"></LiaCookieSolid>
        <Text>{cookieAlertTranslations('title')}</Text>
        <Button onClick={acceptCookies} className="bg-blue-500/75 font-bold">
          {cookieAlertTranslations('iAgree')}
        </Button>
      </Column>
    </Card>
  );
};
