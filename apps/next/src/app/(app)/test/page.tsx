'use client'

import { useTestQuerySuspenseQuery } from '@/graphql/generated/apollo'
import { Column } from '@repo/ui/components/common/Column'
import { merge, omit } from 'lodash'

const Page = () => {
  console.log(omit({ a: 1 }, 'b'))

  return <Column className="justify-center items-center">j</Column>
}

export default Page
