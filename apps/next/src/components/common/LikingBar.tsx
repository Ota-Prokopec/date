import type { WithClassName } from '@repo/ts-types'
import { Row } from '@repo/ui/components/common/Row'
import { IconHeart, IconTimes } from '@repo/ui/components/Icons/Icons'
import { IconBorder } from './IconBorder'
import { cn } from '@repo/ui/dist/lib/utils'
import type { CSSProperties } from 'react'

type LikingBarProps = WithClassName<{
  heartClassName?: string
  crossClassName?: string
}>

export const LikingBar = ({ className, heartClassName, crossClassName }: LikingBarProps) => {
  return (
    <Row className={cn('cursor-pointer', className)}>
      <IconBorder className="mr-[-10px] shadow-lg rotate-[-22deg]">
        <IconTimes className={cn('w-14 h-14 fill-black/75', crossClassName)}></IconTimes>
      </IconBorder>
      <IconBorder className="ml-[-10px] shadow-lg rotate-[22deg] bg-red-500/90">
        <IconHeart className={cn('w-14 h-14 fill-white', heartClassName)}></IconHeart>
      </IconBorder>
    </Row>
  )
}
