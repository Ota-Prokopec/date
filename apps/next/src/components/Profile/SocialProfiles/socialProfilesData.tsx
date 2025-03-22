import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { IconFacebook, IconInstagram } from '@repo/ui/components/Icons/Icons'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'
import type { ReactNode } from 'react'

export const socialProfilesMetaData: Record<
  SocialProfilePlatform,
  { icon: ReactNode; title: string }
> = {
  instagram: { icon: <IconInstagram className="w-10 h-10"></IconInstagram>, title: 'Instagram' },
  facebook: {
    icon: <IconFacebook className="w-10 h-10 fill-blue-600"></IconFacebook>,
    title: 'facebook',
  },
}

type PlaceholderData = {
  [Key in keyof Required<NonNullable<SocialsData[keyof SocialsData]>>]: ReactNode | string
}

export type SocialsDataToSocialsProfiles = {
  [Key in keyof SocialsData[keyof SocialsData]]: ReactNode | string
}

export const socialProfilesPlaceholderData = {
  instagram: { link: '', profileId: <Skeleton className="w-20 h-4"></Skeleton> },
  facebook: { link: '', profileId: <Skeleton className="w-20 h-4"></Skeleton> },
} as const satisfies Record<SocialProfilePlatform, PlaceholderData>
