'use client'

import { Text } from '@repo/ui/components/common/Text'

const TestPage = () => {
  ;(async () => {
    const pages = await import(`@repo/i18n-translations/${'en'}-pages`)
    console.log(pages)
  })()

  return <>"j"</>
}

export default TestPage
