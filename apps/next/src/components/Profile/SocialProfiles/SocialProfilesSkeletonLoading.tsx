import { Column } from '@repo/ui/components/common/Column'
import { socialProfilesMetaData } from './socialProfilesData'
import { SocialProfileItemSkeletonLoading } from './SocialProfilesItemSkeletonLoading'

export const SocialProfilesSkeletonLoading = () => {
  return (
    <Column className="gap-2">
      <SocialProfileItemSkeletonLoading
        icon={socialProfilesMetaData['instagram'].icon}
      ></SocialProfileItemSkeletonLoading>
      <SocialProfileItemSkeletonLoading
        icon={socialProfilesMetaData['facebook'].icon}
      ></SocialProfileItemSkeletonLoading>
    </Column>
  )
}
