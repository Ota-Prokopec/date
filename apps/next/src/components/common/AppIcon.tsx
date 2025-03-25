import { cn } from '@repo/ui/dist/lib/utils'
import { Image } from '@repo/ui/components/common/Image'

type AppIconProps = {
  className?: string
}
export const AppIcon = ({ className }: AppIconProps) => {
  return <Image className={cn('', className)} src="/icon.png"></Image>
}
