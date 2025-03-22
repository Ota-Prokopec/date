import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'
import type { ReactNode } from 'react'
import { UserProfileCardItem } from './UserProfileCardItem'
import { cn } from '@repo/ui/dist/lib/utils'
import { ProfileNameAndAgeSkeletonLoading } from '../nameAndAge/UserProfileNameAndAgeSkeletonLoading'
import { useTranslations } from 'next-intl'
import { SocialProfilesSkeletonLoading } from '../SocialProfiles/SocialProfilesSkeletonLoading'

type UserProfileCardSkeletonLoadingProps = {
  className?: string
  children?: ReactNode
}

export const UserProfileCardSkeletonLoading = ({
  className,
  children,
}: UserProfileCardSkeletonLoadingProps) => {
  const t = useTranslations('components.UserProfileCardBioItem')
  return (
    <Card className={cn('', className)}>
      <Column className=" h-full p-4 gap-6">
        <div className="w-[300px] h-[350px] rounded-t-xl rounded-b-none  relative">
          <Skeleton className="w-full h-full rounded-t-xl rounded-b-none"></Skeleton>

          <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white rounded-[100px] flex items-center justify-center [&_*]:w-14 [&_*]:h-14">
            <Skeleton></Skeleton>
          </div>
        </div>

        <ProfileNameAndAgeSkeletonLoading></ProfileNameAndAgeSkeletonLoading>

        <Column>
          <UserProfileCardItem title={t('title')}>{''}</UserProfileCardItem>
          <Skeleton></Skeleton>
        </Column>

        <SocialProfilesSkeletonLoading></SocialProfilesSkeletonLoading>
        {children}
      </Column>
    </Card>
  )
}
