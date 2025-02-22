import { Input } from '@heroui/react'
import { UserRoundPen } from '../Icons/Icons'

type UsernameInputProps = {
  value?: string
} & Omit<Parameters<typeof Input>[0], 'type' | 'startContent'>

export const UsernameInput = ({ value, ...props }: UsernameInputProps) => {
  return (
    <Input
      value={value}
      className="outline-none !border-0"
      size="lg"
      style={{ border: '0 !important' }}
      startContent={<UserRoundPen></UserRoundPen>}
      type="text"
      {...props}
    />
  )
}
