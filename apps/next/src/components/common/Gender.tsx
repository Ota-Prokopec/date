import type { Gender as GenderType, PothosOptional } from '@repo/ts-types'
import { IconFemale, IconMale } from '@repo/ui/components/Icons/Icons'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'
import { cn } from '@repo/ui/dist/lib/utils'

type GenderProps = {
  gender?: PothosOptional<GenderType>
  className?: string
}

export const Gender = ({ gender, className }: GenderProps) => {
  return gender ? (
    gender == 'male' ? (
      <IconMale className={cn('text-blue-500', className)} />
    ) : (
      <IconFemale className={cn('text-red-500 w-14 h-14', className)} />
    )
  ) : (
    <Skeleton></Skeleton>
  )
}
