import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Label } from '../shadcn/label'

export type RadioItem<Key extends string, Value extends string> = {
  key: Key
  value: Value
}
type RadioProps<Key extends string, Value extends string> = {
  items: RadioItem<Key, Value>[]
  getRadio: ({ key, selected }: { key: Key; selected: boolean }) => ReactNode
  onChange?: (key: Key) => void
  defaultOption?: Key
  className?: string
}

export const Radio = <Key extends string, Value extends string>({
  items,
  getRadio,
  onChange,
  className,
  defaultOption,
}: RadioProps<Key, Value>) => {
  const [selected, setSelected] = useState<Key | undefined>(defaultOption)

  return (
    <div className={cn('w-min h-min flex flex-col gap-3', className)}>
      {items.map((item) => {
        return (
          <button
            onClick={() => {
              setSelected(item.key)
              if (onChange) onChange(item.key)
            }}
            key={item.key}
            className="flex items-center w-min h-min"
          >
            <Label className="cursor-pointer">
              {getRadio({ key: item.key, selected: selected === item.key })}
            </Label>
          </button>
        )
      })}
    </div>
  )
}
