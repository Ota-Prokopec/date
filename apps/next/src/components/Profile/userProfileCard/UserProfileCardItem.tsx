import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import type { ReactNode } from 'react'
import { match } from 'ts-pattern'

type UserProfileCardItemProps = {
  title: string
  children: ReactNode
}

export const UserProfileCardItem = ({ title, children }: UserProfileCardItemProps) => {
  return (
    <Column className="gap-2">
      <Text className="font-bold text-xl">{title}:</Text>
      <div className="ml-4">
        {match({ isText: typeof children === 'string' })
          .with({ isText: true }, () => <Text className="font-bold text-black/75">{children}</Text>)
          .otherwise(() => children)}
      </div>
    </Column>
  )
}
