import { UserRoundPen } from '@/components/Icons'
import { envClient } from '@/lib/envClient'
import { Input } from '@heroui/react'

type UsernameInputProps = {
  onChange: (value: string) => void
  value?: string
}

export const UsernameInput = ({ onChange, value }: UsernameInputProps) => {
  return (
    <Input
      value={value}
      onValueChange={(value) => onChange(value)}
      min={envClient.NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME}
      maxLength={envClient.NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME}
      className="outline-none !border-0"
      size="lg"
      style={{ border: '0 !important' }}
      startContent={<UserRoundPen></UserRoundPen>}
      type="text"
      placeholder={`Username`}
    />
  )
}
