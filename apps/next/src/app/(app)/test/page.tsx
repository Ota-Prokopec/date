'use client'

import { useTestQuerySuspenseQuery } from '@/graphql/generated/apollo'
import { Column } from '@repo/ui/components/common/Column'

const Page = () => {
  const { data } = useTestQuerySuspenseQuery()

  console.log('re-render')

  return <Column className="justify-center items-center">j</Column>
}

export default Page
