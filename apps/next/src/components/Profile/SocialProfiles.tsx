'use client'

import type { SocialProfileDataParams, SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { Column } from '@repo/ui/components/common/Column'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { IconLink } from '@repo/ui/components/Icons/Icons'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { socialProfilesMetaData } from './socialProfilesData'

export type SocialProfilesProps = {
  socials: Partial<SocialsData>
  disableLink?: boolean
  loading?: boolean
  onClick?: (platform: SocialProfilePlatform) => void
}

export const SocialProfiles = ({ socials, onClick, disableLink = false }: SocialProfilesProps) => {
  return (
    <Column>
      {(Object.entries(socials ?? []) as [[SocialProfilePlatform, SocialProfileDataParams]]).map(
        ([platform, params], i) => (
          <SocialProfileItem
            key={i}
            onClick={() => {
              if (onClick) onClick(platform)
            }}
            disableLink={disableLink}
            {...params}
            icon={socialProfilesMetaData[platform].icon}
          ></SocialProfileItem>
        )
      )}
    </Column>
  )
}

export const SocialProfilesSkeletonLoading = () => {
  return (
    <Column>
      <SocialProfileItemSkeletonLoading
        icon={socialProfilesMetaData['instagram'].icon}
      ></SocialProfileItemSkeletonLoading>
    </Column>
  )
}

type SocialProfileItemProps = SocialProfileDataParams & {
  icon: ReactNode
  disableLink: boolean
  onClick: () => void
  className?: string
}
const SocialProfileItem = ({
  profileId,
  link,
  icon,
  disableLink,
  onClick,
  className,
}: SocialProfileItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn('border-none shadow-none items-start [&>*]:justify-start', className)}
    >
      <Row className="gap-2 justify-center items-center">
        {icon}
        <Text className="font-bold text-black/75 text-lg">{profileId}</Text>
        {!disableLink && (
          <Link href={link}>
            <IconLink></IconLink>
          </Link>
        )}
      </Row>
    </button>
  )
}

const SocialProfileItemSkeletonLoading = ({
  className,
  icon,
}: Pick<SocialProfileItemProps, 'className' | 'icon'>) => {
  return (
    <button className={cn('border-none shadow-none items-start [&>*]:justify-start', className)}>
      <Row className="gap-2 justify-center items-center">
        {icon}
        <div className="font-bold text-black/75 text-lg">
          <Skeleton></Skeleton>
        </div>
        <IconLink></IconLink>
      </Row>
    </button>
  )
}
