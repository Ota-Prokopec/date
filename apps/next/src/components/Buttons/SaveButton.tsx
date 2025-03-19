import { Button } from '@repo/ui/components/common/Button'
import { cn } from '@repo/ui/dist/lib/utils'
import { Check } from 'lucide-react'

type SaveButtonProps = {
  label: string
  className?: string
}

export const SaveButton = ({ label, className }: SaveButtonProps) => {
  return (
    <Button
      className={cn('gap-2 w-[250px] h-auto', className)}
      icon={<Check strokeWidth={2.5} className="w-8 h-8"></Check>}
      type="submit"
    >
      {label}
    </Button>
  )
}
