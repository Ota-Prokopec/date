'use client'

import { useState } from 'react'
import {
  SelectContentShadcn,
  SelectItemShadcn,
  SelectTriggerShadcn,
  SelectValueShadcn,
  SelectShadcn,
} from '../shadcn/select'

export type SelectItem = { value: string; label: string }
export type SelectItems = SelectItem[]

export type SelectProps = {
  items: SelectItems

  initialValue?: SelectItem['value']
}

export const Select = ({ items, initialValue }: SelectProps) => {
  const [value, setValue] = useState(initialValue)

  console.log(value)

  return (
    <SelectShadcn onValueChange={(value) => setValue(value)}>
      <SelectTriggerShadcn className="w-[180px]">
        <SelectValueShadcn placeholder="Theme" />
      </SelectTriggerShadcn>
      <SelectContentShadcn>
        {items.map(({ label, value }, i) => (
          <SelectItemShadcn key={i} value={value}>
            {label}
          </SelectItemShadcn>
        ))}
      </SelectContentShadcn>
    </SelectShadcn>
  )
}
