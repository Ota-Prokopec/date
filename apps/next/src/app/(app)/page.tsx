'use client'

import { LikingPeopleGrid } from '@/components/common/LikingPeopleGrid'
import { useGetListOfRandomUsersSuspenseQuery } from '@/graphql/generated/apollo'

const MainPage = () => {
  const { data } = useGetListOfRandomUsersSuspenseQuery({ variables: { limit: 4 } })

  return data && <LikingPeopleGrid userProfiles={data.getListOfRandomUsers}></LikingPeopleGrid>
}

export default MainPage
