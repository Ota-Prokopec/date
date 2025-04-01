'use client'

import { Swiper } from '@/components/common/Swiper'
import type {
  UserProfileCardData,
  UserProfileMiniCardData,
} from '@/components/Profile/userProfileCard/UserProfileCardDataTypes'
import { useGetListOfRandomUsersSuspenseQuery } from '@/graphql/generated/apollo'

const MainPage = () => {
  const { data } = useGetListOfRandomUsersSuspenseQuery({
    variables: { limit: 4 },
    fetchPolicy: 'cache-first',
  })
  const userProfiles: UserProfileCardData[] | undefined = data?.getListOfRandomUsers

  return userProfiles && <Swiper data={userProfiles}></Swiper>
}

export default MainPage
