'use server';

import { AbstractIntlMessages } from 'next-intl';
import { getMessages } from 'next-intl/server';

type GetMessagesAction = ({ locale }: { locale: Locale }) => Promise<AbstractIntlMessages>;

export const getMessagesAction: GetMessagesAction = async ({ locale }: { locale: Locale }) => {
  const messages = await getMessages({ locale });
  return messages;
};
