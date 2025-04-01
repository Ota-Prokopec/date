import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import { useTranslations } from 'next-intl'

export const NoMoreProfiles = () => {
  const t = useTranslations('components.NoMoreProfiles')

  return (
    <Column>
      <Text>{t('title')}</Text>
      <Text>{t('description')}</Text>
    </Column>
  )
}
