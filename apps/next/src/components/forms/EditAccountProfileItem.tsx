import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { ReactNode } from 'react'

type EditAccountProfileItemProps = {
  children: ReactNode
  className?: string
  title: string
}
export const EditAccountProfileItem = ({
  children,
  className,
  title,
}: EditAccountProfileItemProps) => {
  return (
    <Card header={title} className={cn('p-4 rounded-[30px]', className)}>
      <Column className="w-full h-full">{children}</Column>
    </Card>
  )
}
