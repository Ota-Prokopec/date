import { Card } from '@repo/ui/components/common/Card';
import { Column } from '@repo/ui/components/common/Column';
import { Text } from '@repo/ui/components/common/Text';
import { cn } from '@repo/ui/ts-lib/lib/utils';
import type { ReactNode } from 'react';

type EditProfileItemProps = {
  children: ReactNode;
  className?: string;
  title: string;
};
export const EditProfileItem = ({ children, className, title }: EditProfileItemProps) => {
  return (
    <Card header={title} className={cn('p-4 rounded-[30px]', className)}>
      <Column className="w-full h-full">{children}</Column>
    </Card>
  );
};
