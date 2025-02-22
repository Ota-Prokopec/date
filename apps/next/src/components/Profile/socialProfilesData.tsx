import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { IconInstagram } from '@repo/ui/components/Icons/IconInstagram'
import type { ReactNode } from 'react'

export const socialProfilesMetaData: Record<
  SocialProfilePlatform,
  { icon: ReactNode; title: string }
> = {
  instagram: { icon: <IconInstagram className="w-10 h-10"></IconInstagram>, title: 'Instagram' },
}

export const socialProfilesPlaceholderData: SocialsData = { instagram: { link: '', profileId: '' } }
