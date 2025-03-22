import type { SocialProfileDataParams } from '@repo/ts-types'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { IconLink } from '@repo/ui/components/Icons/Icons'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import Link from 'next/link'
import { createElement, type ReactNode } from 'react'

export type SocialProfileItemProps = SocialProfileDataParams & {
  icon: ReactNode
  disableLink: boolean
  onClick: () => void
  className?: string
}

export const SocialProfileItem = ({
  profileId,
  link,
  icon,
  disableLink,
  onClick,
  className,
}: SocialProfileItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('border-none shadow-none items-start [&>*]:justify-start', className)}
    >
      <Row className="gap-2 justify-center items-center">
        {icon}
        {createElement(typeof profileId == 'string' ? Text : 'div', {
          className: 'font-bold text-black/75 text-lg',
          children: profileId,
        })}
        {!disableLink && (
          <Link href={link}>
            <IconLink></IconLink>
          </Link>
        )}
      </Row>
    </button>
  )
}
