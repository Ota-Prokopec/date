import type { SwipeType, WithClassName } from '@repo/ts-types'
import { Row } from '@repo/ui/components/common/Row'
import { IconHeart, IconTimes } from '@repo/ui/components/Icons/Icons'
import { cn } from '@repo/ui/dist/lib/utils'
import { IconBorder } from './IconBorder'

type LikingBarProps = WithClassName<{
  heartClassName?: string
  crossClassName?: string
  onClick: (swipeType: SwipeType) => void
}>

export const LikingBar = ({
  className,
  heartClassName,
  crossClassName,
  onClick,
}: LikingBarProps) => {
  return (
    <Row className={cn('cursor-pointer', className)}>
      <IconBorder className="mr-[-10px] shadow-lg rotate-[-22deg]">
        <IconTimes
          onClick={() => onClick('dislike')}
          className={cn('w-14 h-14 fill-black/75', crossClassName)}
        ></IconTimes>
      </IconBorder>
      <IconBorder className="ml-[-10px] shadow-lg rotate-[22deg] bg-red-500/90">
        <IconHeart
          onClick={() => onClick('like')}
          className={cn('w-14 h-14 fill-white', heartClassName)}
        ></IconHeart>
      </IconBorder>
    </Row>
  )
}
