import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { ReactNode } from 'react'

type EditAccountProfileItemProps = {
  children: ReactNode
  className?: string
  title: string
  description?: string
}
export const EditAccountProfileItem = ({
  children,
  className,
  title,
  description,
}: EditAccountProfileItemProps) => {
  return (
    <Card header={title} className={cn('p-4 rounded-[30px]', className)}>
      <Column className="w-full h-full gap-4">
        {description && <Text className="font-bold text-black/75">{description}</Text>}
        {children}
      </Column>
    </Card>
  )
}
