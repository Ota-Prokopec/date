'use client'

import {
  ProfileNameAndAge,
  ProfileNameAndAgeSkeletonLoading,
} from '@/components/Profile/ProfileNameAndAge'
import { Button } from '@repo/ui/components/common/Button'
import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import Image from 'next/image'
import { SocialProfiles, SocialProfilesSkeletonLoading } from './SocialProfiles'
import type { ReactNode } from 'react'
import { IconFemale, IconMale } from '../Icons'
import type { UserProfileData } from '@repo/ts-types'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'

type UserProfileCardProps = {
  className?: string
  children?: ReactNode
  data: UserProfileData
}

export const UserProfileCard = ({ className, children, data }: UserProfileCardProps) => {
  const GenderIcon = data.gender ? (
    <IconMale className="text-blue-500" />
  ) : (
    <IconFemale className="text-red-500" />
  )

  return (
    <Card className={cn('', className)}>
      <Column className=" h-full p-4 gap-6">
        <Card className="w-[300px] h-[350px] rounded-t-xl rounded-b-none  relative">
          <Image
            alt="profile-picture"
            src={data.profilePictureURL}
            width={300}
            height={350}
            className="w-full h-full rounded-t-xl rounded-b-none"
          ></Image>

          <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white rounded-[100px] flex items-center justify-center [&_*]:w-14 [&_*]:h-14">
            {GenderIcon}
          </div>
        </Card>

        <ProfileNameAndAge name={data.username} age={data.age}></ProfileNameAndAge>

        <UserProfileCardItem title={'Bio:'}>{data.bio}</UserProfileCardItem>

        <SocialProfiles socials={data.socials}></SocialProfiles>
        {children}
      </Column>
    </Card>
  )
}

const UserProfileCardItem = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Column>
      <Text className="font-bold">{title}</Text>
      <Text className="ml-4">{children}</Text>
    </Column>
  )
}

export const UserProfileCardSkeletonLoading = ({
  className,
  children,
}: Omit<UserProfileCardProps, 'data'>) => {
  return (
    <Card className={cn('', className)}>
      <Column className=" h-full p-4 gap-6">
        <Card className="w-[300px] h-[350px] rounded-t-xl rounded-b-none  relative">
          <Skeleton className="w-full h-full rounded-t-xl rounded-b-none"></Skeleton>

          <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white rounded-[100px] flex items-center justify-center [&_*]:w-14 [&_*]:h-14">
            <Skeleton></Skeleton>
          </div>
        </Card>

        <ProfileNameAndAgeSkeletonLoading></ProfileNameAndAgeSkeletonLoading>

        <Column>
          <UserProfileCardItem title={'Bio:'}>{''}</UserProfileCardItem>
          <Skeleton></Skeleton>
        </Column>

        <SocialProfilesSkeletonLoading></SocialProfilesSkeletonLoading>
        {children}
      </Column>
    </Card>
  )
}
