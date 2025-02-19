'use client'

import { Text } from '@repo/ui/components/common/Text'
import { groupBy } from '@repo/utils/common/groupBy'

const TestPage = () => {
  const t = groupBy(
    [
      { key: 1, data: 'ahoj' },
      { key: 0, data: 'a' },
      { key: 1, data: 'b' },
    ],
    (item) => item.key
  )[0]

  type T = typeof t

  return <>"j"</>
}

export default TestPage
