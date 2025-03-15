'use client'

import { useTestQuerySuspenseQuery } from '@/graphql/generated/apollo'
import { Column } from '@repo/ui/components/common/Column'
import { merge, omit } from 'lodash'

const Page = () => {
  console.log(merge({ lo: 1, ol: { j: 1, b: 4 } }, { ol: { j: 2 } }))

  return <Column className="justify-center items-center">j</Column>
}

export default Page
