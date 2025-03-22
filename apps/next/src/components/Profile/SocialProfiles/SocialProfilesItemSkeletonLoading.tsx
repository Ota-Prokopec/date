import { Row } from '@repo/ui/components/common/Row'
import { IconLink } from '@repo/ui/components/Icons/Icons'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { SocialProfileItemProps } from './SocialProfilesItem'

export const SocialProfileItemSkeletonLoading = ({
  className,
  icon,
}: Pick<SocialProfileItemProps, 'className' | 'icon'>) => {
  return (
    <button className={cn('border-none shadow-none items-start [&>*]:justify-start', className)}>
      <Row className="gap-2 justify-center items-center">
        {icon}
        <div className="font-bold text-black/75 text-lg">
          <Skeleton></Skeleton>
        </div>
        <IconLink></IconLink>
      </Row>
    </button>
  )
}
