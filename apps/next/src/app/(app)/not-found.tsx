import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import { useTranslations } from 'next-intl'

const NotFoundPage = () => {
  const t = useTranslations('pages.not-found')

  return (
    <Center className="p-4">
      <Column className="gap-4">
        <Text className="font-bold text-6xl text-red-500 text-center">404 not found</Text>
        <Text className="font-bold text-4xl text-black/95 dark:text-white/95 text-center">
          {t('title')}
        </Text>
        <Text className="font-bold text-2xl text-black/75 dark:text-white/75 text-center">
          {t('message')}
        </Text>
      </Column>
    </Center>
  )
}
export default NotFoundPage
