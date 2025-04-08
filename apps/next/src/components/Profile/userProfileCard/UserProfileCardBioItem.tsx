import { useTranslations } from 'next-intl'
import { UserProfileCardItem } from './UserProfileCardItem'
import ShowMoreText from 'react-show-more-text'

type UserProfileCardBioItemProps = {
  bio: string
}

export const UserProfileCardBioItem = ({ bio }: UserProfileCardBioItemProps) => {
  const t = useTranslations('components.UserProfileCardBioItem')

  return (
    <UserProfileCardItem title={t('title')}>
      <ShowMoreText
        less={t('showLess')}
        more={t('showMore')}
        anchorClass="text-blue-500 font-bold curson-pointer"
        lines={3}
      >
        {bio}
      </ShowMoreText>
    </UserProfileCardItem>
  )
}
