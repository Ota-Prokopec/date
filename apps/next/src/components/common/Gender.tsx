import type { Gender as GenderType, PothosOptional } from '@repo/ts-types'
import { IconFemale, IconMale } from '@repo/ui/components/Icons/Icons'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'

type GenderProps = {
  gender?: PothosOptional<GenderType>
}

export const Gender = ({ gender }: GenderProps) => {
  return gender ? (
    gender == 'male' ? (
      <IconMale className="text-blue-500" />
    ) : (
      <IconFemale className="text-red-500" />
    )
  ) : (
    <Skeleton></Skeleton>
  )
}
