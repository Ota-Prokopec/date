import { builder } from '@/builder';
import { type AccountType } from './PothosSchemaTypes';

export const AccountRef = builder.objectRef<AccountType>('Account').implement({
  fields: (t) => ({
    userId: t.exposeString('userId', { nullable: false }),
  }),
});
