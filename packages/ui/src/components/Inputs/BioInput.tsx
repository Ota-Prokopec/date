import { Textarea } from '@heroui/react'

type BioInputProps = {} & Parameters<typeof Textarea>[0]

export const BioInput = ({ ...props }: BioInputProps) => {
  return (
    <Textarea
      className=" outline-none !border-0 w-full"
      style={{ border: '0 !important' }}
      {...props}
    />
  )
}
