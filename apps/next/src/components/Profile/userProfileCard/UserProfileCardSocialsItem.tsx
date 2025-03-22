import type { SocialsData } from '@repo/ts-types'
import { SocialProfiles } from '../SocialProfiles/SocialProfiles'
import { UserProfileCardItem } from './UserProfileCardItem'
import { useTranslations } from 'next-intl'

type UserProfileCardSocialsItemProps = {
  socials: SocialsData
}

export const UserProfileCardSocialsItem = ({ socials }: UserProfileCardSocialsItemProps) => {
  const t = useTranslations('components.UserProfileCardSocialsItem')

  return (
    <UserProfileCardItem title={t('title')}>
      <SocialProfiles socials={socials}></SocialProfiles>
    </UserProfileCardItem>
  )
}
