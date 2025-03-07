'use client'

import { useTestQueryQuery } from '@/graphql/generated/urql'
import { Column } from '@repo/ui/components/common/Column'
import { Suspense, useState } from 'react'

const Page = () => {
  const { data, refetch } = useTe

  console.log(data?.test)

  return <Column className="justify-center items-center">j</Column>
}

export default Page
