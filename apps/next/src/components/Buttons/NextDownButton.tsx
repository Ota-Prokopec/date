import { Button } from '@repo/ui/components/common/Button'
import { cn } from '@repo/ui/dist/lib/utils'
import { ArrowBigDownDash } from 'lucide-react'

type NextDownButtonProps = {
  label: string
  className?: string
  onNext: () => void
}
export const NextDownButton = ({ label, className, onNext }: NextDownButtonProps) => {
  return (
    <Button
      onClick={onNext}
      className={cn('gap-2 w-min h-auto', className)}
      icon={<ArrowBigDownDash strokeWidth={2.5} className="w-8 h-8"></ArrowBigDownDash>}
      type="button"
    >
      {label}
    </Button>
  )
}
