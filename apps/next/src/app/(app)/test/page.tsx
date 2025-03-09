'use client'

import { Loadable } from '@/components/Loadable/Loadable'
import { useTestQueryQuery, useTestQuerySuspenseQuery } from '@/graphql/generated/apollo'
import { Column } from '@repo/ui/components/common/Column'
import dynamic from 'next/dynamic'

const Page = () => {
  const { data } = useTestQuerySuspenseQuery()

  console.log(data?.test)

  return <Column className="justify-center items-center">j</Column>
}

export default Page
