import { useTranslations } from 'next-intl'
import { UserProfileCardItem } from './UserProfileCardItem'

type UserProfileCardBioItemProps = {
  bio: string
}

export const UserProfileCardBioItem = ({ bio }: UserProfileCardBioItemProps) => {
  const t = useTranslations('components.UserProfileCardBioItem')

  return <UserProfileCardItem title={t('title')}>{bio}</UserProfileCardItem>
}
